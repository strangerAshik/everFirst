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

$pdf=new PDF();
$pdf->AddPage('L','A4');

$x =10; $y =20;
$pdf->SetXY($x,$y);
$pdf->SetFont('Arial','I',10);
$tym = date('j F Y');

$pdf->Cell(250,7,"Date   : $tym ",0,1,'L');
$pdf->SetX($x);
$pdf->Cell(250,7,"Report : Credit transaction Between [ $date1 to $date2 ]",0,1,'L');

$pdf->ln(7);



//Column Headers



$pdf->ln(0);


$pdf->SetFont('Arial','',8);
$query="SELECT * FROM credit_transaction WHERE date BETWEEN '$date1' AND '$date2'"; 
//$x=20;

if($query_run=mysql_query($query)){
while($query_row=mysql_fetch_assoc($query_run)){

$date=$query_row['date'];
$purpose=strtoupper($query_row['purpose']);     
$invoice_no=strtoupper($query_row['invoice_no']);
$company=strtoupper($query_row['company']);
$work_order=strtoupper($query_row['work_order']);       
$voucher=$query_row['voucher'];
$pay_from=strtoupper($query_row['pay_from']);
$mobile=strtoupper($query_row['mobile']);
$address=strtoupper($query_row['address']);
$loan_transaction_id=$query_row['loan_transaction_id'];
$store_bank=$query_row['store_bank'];
$store_account=$query_row['store_account'];
$from_bank=$query_row['from_bank'];
$from_account=strtoupper($query_row['from_account']);
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
$pdf->Cell(36,5,"Address",'LTRB',0,'C');$pdf->Cell(20,5,"Loan Id",'LTRB',1,'C');

$pdf->Cell(36,5,"$purpose",'LTRB',0,'C');$pdf->Cell(36,5,"$voucher",'LTRB',0,'C');$pdf->Cell(36,5,"$invoice_no",'LTRB',0,'C');
$pdf->Cell(36,5,"$company",'LTRB',0,'C');$pdf->Cell(36,5,"$pay_from ",'LTRB',0,'C');$pdf->Cell(36,5,"$mobile",'LTRB',0,'C');
$pdf->Cell(36,5,"$address",'LTRB',0,'C');$pdf->Cell(20,5,"$loan_transaction_id",'LTRB',1,'C');

$pdf->Cell(36,5,"Store Bank",'LTRB',0,'C');$pdf->Cell(36,5,"Store Account",'LTRB',0,'C');$pdf->Cell(36,5,"From bank",'LTRB',0,'C');
$pdf->Cell(36,5,"From account",'LTRB',0,'C');$pdf->Cell(36,5,"Checque / TT",'LTRB',0,'C');$pdf->Cell(36,5,"Amount",'LTRB',0,'C');
$pdf->Cell(36,5,"Note",'LTRB',1,'C');

$pdf->Cell(36,5,"$store_bank ",'LTRB',0,'C');$pdf->Cell(36,5,"$store_account",'LTRB',0,'C');$pdf->Cell(36,5,"$from_bank",'LTRB',0,'C');
$pdf->Cell(36,5,"$from_account",'LTRB',0,'C');$pdf->Cell(36,5,"$checque_or_tt",'LTRB',0,'C');$pdf->Cell(36,5,"$amount ",'LTRB',0,'C');
$pdf->Cell(36,5,"$note",'LTRB',1,'C');

$pdf->ln(2);
}}

$tym = date('d-m-Y');
$pdf->Output("$tym Credit transaction Between $date1 to $date2.pdf ", 'I');
?>