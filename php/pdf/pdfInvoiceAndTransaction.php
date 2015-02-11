<?php
require('mysql_table.php');
include'../db_connect.php';
class PDF extends PDF_MySQL_Table{
        function Header(){

        parent::Header();
        }
        function Footer(){
        parent::Footer();
        }
}

error_reporting(E_ALL ^ E_NOTICE);

$date1=$_GET['fromdate'];
$date2=$_GET['todate'];
$name=$_GET['name'];

$pdf=new PDF();
$pdf->AddPage('L','A4');

$x =10; $y =20;
$pdf->SetXY($x,$y);
$pdf->SetFont('Arial','I',10);
$tym = date('j F Y');

$query1="SELECT * FROM `client` WHERE `company`='$name'";
 if($query_run1=mysql_query($query1)){
	while($query_row1=mysql_fetch_assoc($query_run1)){
			 $address=$query_row1['address'];
			 $mobile=$query_row1['mobile'];
			 
			 }}

$pdf->Cell(250,7,"Date   : $tym ",0,1,'L');
$pdf->SetX($x);
$pdf->Cell(250,7,"Report : Customer Wise Report[ $date1 to $date2 ]",0,1,'L');
$pdf->ln(5);
$pdf->Cell(250,5,"Company: $name",0,1,'L');
$pdf->Cell(250,5,"Address: $address",0,1,'L');
$pdf->Cell(250,5,"Mobile: $mobile",0,1,'L');





//Column Headers

$pdf->ln(0);

$pdf->SetFont('Arial','',8);
$pdf->Cell(250,7,"Report : Customer Invoice[ $date1 to $date2 ]",0,1,'L');

 $query1="SELECT * FROM `invoice_core` WHERE `company`='$name' AND date BETWEEN '$date1' AND '$date2'";
 if($query_run1=mysql_query($query1)){
	while($query_row1=mysql_fetch_assoc($query_run1)){
			 $date=$query_row1['date'];
			 $invoice_no=$query_row1['invoice_no'];
			 $work_order=$query_row1['work_order'];
			 $mobile=$query_row1['mobile'];
			 $subtotal=$query_row1['subtotal'];
			 $discount=$query_row1['discount'];
			 $vat=$query_row1['vat'];
			 $tax=$query_row1['tax'];
			 $grand_total=$query_row1['grand_total'];
			 $paid=$query_row1['paid'];
			 $bad_draft=$query_row1['bad_draft'];
			 
			 $pdf->ln(0);
			$pdf->Cell(30,5,"Date",'LTRB',0,'C');$pdf->Cell(30,5,"$date",'LTRB',1,'L');
			$pdf->Cell(30,5,"Invoice",'LTRB',0,'C');$pdf->Cell(30,5,"Work Order",'LTRB',0,'C');$pdf->Cell(30,5,"Subtotal",'LTRB',0,'C');
			$pdf->Cell(30,5,"Discount",'LTRB',0,'C');$pdf->Cell(30,5,"Vat ",'LTRB',0,'C');$pdf->Cell(30,5,"Tax",'LTRB',0,'C');
			$pdf->Cell(30,5,"Grand Total",'LTRB',0,'C');$pdf->Cell(30,5,"Paid",'LTRB',0,'C');$pdf->Cell(30,5,"Bad Draft",'LTRB',1,'C');
			
			$pdf->Cell(30,5,"$invoice_no",'LTRB',0,'C');$pdf->Cell(30,5,"$work_order",'LTRB',0,'C');$pdf->Cell(30,5,"$subtotal",'LTRB',0,'C');
			$pdf->Cell(30,5,"$discount",'LTRB',0,'C');$pdf->Cell(30,5,"$vat",'LTRB',0,'C');$pdf->Cell(30,5,"$tax",'LTRB',0,'C');
			$pdf->Cell(30,5,"$grand_total",'LTRB',0,'C');$pdf->Cell(30,5,"$paid ",'LTRB',0,'C');$pdf->Cell(30,5,"$bad_draft",'LTRB',1,'C');
			

			}
			
 }
 
$pdf->Cell(250,7,"Report : Customer Transaction [ $date1 to $date2 ]",0,1,'L');

$query="SELECT * FROM credit_transaction WHERE `company`='$name' AND date BETWEEN '$date1' AND '$date2'"; 
//$x=20;

if($query_run=mysql_query($query)){
while($query_row=mysql_fetch_assoc($query_run)){

$date=$query_row['date'];
$purpose=strtoupper($query_row['purpose']);     
$invoice_no=strtoupper($query_row['invoice_no']);
//to get Due of the invoice 
 $query1="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoice_no'";
 if($query_run1=mysql_query($query1)){
	while($query_row1=mysql_fetch_assoc($query_run1)){
			 $grand_total=$query_row1['grand_total'];
			 $paid=$query_row1['paid'];
			 $due=$grand_total-$paid;
			 }
			
 }
$company=strtoupper($query_row['company']);
$work_order=strtoupper($query_row['work_order']);       
$voucher=$query_row['voucher'];
$pay_from=strtoupper($query_row['pay_from']);
$mobile=strtoupper($query_row['mobile']);
$address=strtoupper($query_row['address']);
//$loan_transaction_id=$query_row['loan_transaction_id'];
$store_bank=$query_row['store_bank'];
$store_account=$query_row['store_account'];
//$from_bank=$query_row['from_bank'];
//$from_account=strtoupper($query_row['from_account']);
$checque_or_tt=strtoupper($query_row['checque_or_tt']);
$amount=strtoupper($query_row['amount']);
$note=$query_row['note'];
//The columns
$x=$pdf->getX();$y=$pdf->getY();
$x =3; $y += 0;
$pdf->SetXY($x,$y);
$pdf->ln(0);
$pdf->Cell(36,5,"Date",'LTRB',0,'C');$pdf->Cell(36,5,"$date",'LTRB',1,'L');

$pdf->Cell(36,5,"Purpose",'LTRB',0,'C');$pdf->Cell(36,5,"Voucher",'LTRB',0,'C');$pdf->Cell(36,5,"Invoice",'LTRB',0,'C');
$pdf->Cell(36,5,"Customer Comp.",'LTRB',0,'C');$pdf->Cell(36,5,"Pay from ",'LTRB',0,'C');$pdf->Cell(36,5,"Mobile",'LTRB',0,'C');
$pdf->Cell(36,5,"Address",'LTRB',1,'C');

$pdf->Cell(36,5,"$purpose",'LTRB',0,'C');$pdf->Cell(36,5,"$voucher",'LTRB',0,'C');$pdf->Cell(36,5,"$invoice_no",'LTRB',0,'C');
$pdf->Cell(36,5,"$company",'LTRB',0,'C');$pdf->Cell(36,5,"$pay_from ",'LTRB',0,'C');$pdf->Cell(36,5,"$mobile",'LTRB',0,'C');
$pdf->Cell(36,5,"$address",'LTRB',1,'C');//

$pdf->Cell(36,5,"Store Bank",'LTRB',0,'C');$pdf->Cell(36,5,"Store Account",'LTRB',0,'C');$pdf->Cell(36,5,"From bank",'LTRB',0,'C');
$pdf->Cell(36,5,"From account",'LTRB',0,'C');$pdf->Cell(36,5,"Checque / TT",'LTRB',0,'C');$pdf->Cell(36,5,"Amount",'LTRB',0,'C');
$pdf->Cell(36,5,"Still Due",'LTRB',0,'C');
$pdf->Cell(20,5,"Note",'LTRB',1,'C');

$pdf->Cell(36,5,"$store_bank ",'LTRB',0,'C');$pdf->Cell(36,5,"$store_account",'LTRB',0,'C');$pdf->Cell(36,5,"$from_bank",'LTRB',0,'C');
$pdf->Cell(36,5,"$from_account",'LTRB',0,'C');$pdf->Cell(36,5,"$checque_or_tt",'LTRB',0,'C');$pdf->Cell(36,5,"$amount ",'LTRB',0,'C');
$pdf->Cell(36,5,"$due",'LTRB',0,'C');
$pdf->Cell(20,5,"$note",'LTRB',1,'C');

$pdf->ln(2);
}}

$tym = date('d-m-Y');
$pdf->Output("$tym CustomerWiseReport Between $date1 to $date2.pdf ", 'I');
?>