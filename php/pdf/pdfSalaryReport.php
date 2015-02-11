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


$pdf=new PDF();
$pdf->AddPage('P','A4');

error_reporting(E_ALL ^ E_NOTICE);

$date1=$_GET['fromdate'];
$date2=$_GET['todate'];



$x =10; $y =20;
$pdf->SetXY($x,$y);
$pdf->SetFont('Arial','I',10);
$tym = date('j F Y');

$pdf->Cell(250,5,"Date   : $tym ",0,1,'L');
$pdf->SetX($x);
$pdf->Cell(250,5,"Report : Salary Payment [ $date1 to $date2 ]",0,1,'L');

$pdf->ln(5);



//Column Headers



$pdf->ln(0);


$pdf->SetFont('Arial','',8);
$query="SELECT * FROM debit_transaction WHERE date BETWEEN '$date1' AND '$date2'"; 
if($query_run=mysql_query($query)){
$pdf->Cell(28,5,"Voucher",'LTRB',0,'C');$pdf->Cell(50,5,"Pay To ",'LTRB',0,'C');$pdf->Cell(28,5,"Due Amount",'LTRB',0,'C');$pdf->Cell(28,5,"Paid Amount",'LTRB',1,'C');
while($query_row=mysql_fetch_assoc($query_run)){
$id=$query_row['id'];
$date=$query_row['date'];
$purpose=$query_row['purpose'];  
if($purpose=='salary')   {
$purpose=strtoupper($query_row['purpose']);     
$invoice_no=strtoupper($query_row['invoice_no']);
$work_order=strtoupper($query_row['work_order']);       
$voucher=$query_row['voucher'];
$amount=$query_row['amount'];
$paid_amount=$query_row['paid_amount'];
$pay_to=strtoupper($query_row['pay_to']); 
$mobile=strtoupper($query_row['mobile']);
$address=strtoupper($query_row['address']);
$note=$query_row['note'];
$loan_transaction_id=$query_row['loan_transaction_id'];
//$bank_name=$query_row['bank_name'];
$fromBank=$query_row['from_bank'];
$fromAccount=$query_row['from_account'];
$storeBank=$query_row['store_bank'];
$storeAccount=$query_row['store_account'];
//$account_no=strtoupper($query_row['account_no']);
$cheque_no=strtoupper($query_row['cheque_no']);
$utility_bill_no=strtoupper($query_row['utility_bill_no']);
$utilityType=$query_row['utility_type'];
$vehicle_no=$query_row['vehicle_no'];
$vehicle_cost_type=strtoupper($query_row['vehicle_cost_type']);         

$saleCommission=strtoupper($query_row['sale_comission_amount']); 

$pdf->ln(0);
//$pdf->Cell(28,5,"Date",'LTRB',0,'C');
//$pdf->Cell(28,5,"Work Order",'LTRB',0,'C');

$pdf->Cell(28,5,"$voucher",'LTRB',0,'C');$pdf->Cell(50,5,"$pay_to ",'LTRB',0,'C');$pdf->Cell(28,5,"$amount",'LTRB',0,'C');$pdf->Cell(28,5,"$paid_amount",'LTRB',1,'C');
/*$pdf->Cell(28,5,"$date",'LTRB',0,'C');$pdf->Cell(40,5,"$purpose",'LTRB',0,'C');$pdf->Cell(28,5,"$invoice_no",'LTRB',0,'C');
$pdf->Cell(28,5,"$work_order",'LTRB',0,'C');


$pdf->Cell(40,5,"Mobile",'LTRB',0,'C');$pdf->Cell(28,5,"Address",'LTRB',0,'C');$pdf->Cell(28,5,"Sale Commission",'LTRB',0,'C');
$pdf->Cell(28,5,"loan Tran.Id",'LTRB',0,'C');$pdf->Cell(28,5,"From Bank",'LTRB',0,'C');$pdf->Cell(28,5,"From Account",'LTRB',0,'C');
$pdf->Cell(28,5,"Cheque No",'LTRB',1,'C');

$pdf->Cell(40,5,"$mobile",'LTRB',0,'C');$pdf->Cell(28,5,"$address",'LTRB',0,'C');$pdf->Cell(28,5,"$saleCommission",'LTRB',0,'C');
$pdf->Cell(28,5,"$loan_transaction_id",'LTRB',0,'C');$pdf->Cell(28,5,"$fromBank ",'LTRB',0,'C');$pdf->Cell(28,5,"$fromAccount",'LTRB',0,'C');
$pdf->Cell(28,5,"$cheque_no",'LTRB',1,'C');

$pdf->Cell(40,5,"Store Bank",'LTRB',0,'C');$pdf->Cell(28,5,"Store Account No",'LTRB',0,'C');$pdf->Cell(28,5,"Utility Type",'LTRB',0,'C');
$pdf->Cell(28,5,"Vehicle No",'LTRB',0,'C');$pdf->Cell(28,5,"Cost Type",'LTRB',0,'C');
$pdf->Cell(56,5,"Note",'LTRB',1,'C');

$pdf->Cell(40,5,"$storeBank",'LTRB',0,'C');$pdf->Cell(28,5,"$storeAccount",'LTRB',0,'C');$pdf->Cell(28,5,"$utilityType",'LTRB',0,'C');
$pdf->Cell(28,5,"$vehicle_no",'LTRB',0,'C');$pdf->Cell(28,5,"$vehicle_cost_type ",'LTRB',0,'C');
$pdf->Cell(56,5,"$note",'LTRB',1,'C');*/
}



}}
else{$pdf->Cell(28,5,"Invalid Operation Request!! ",'LTRB',1,'C');}

$tym = date('d-m-Y');
$pdf->Output("$tym Salary Report ( $date1 to $date2 ).pdf ", 'I');
?>