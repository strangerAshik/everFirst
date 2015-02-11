<?php
require('mysql_table.php');
include'../db_connect.php';

class PDF extends PDF_MySQL_Table{
        function Header(){
        //Title     A4 =210mm(width X) * 297 mm(height Y)
        parent::Header();
        }
        function Footer(){
        }
}

/*$date1=$_POST['date1'];
$date2=$_POST['date2'];*/

//A3 = 297mm x 426mm//a4 = 210mm x 297mm
error_reporting(E_ALL ^ E_NOTICE);

$date1=$_GET['fromdate'];
$date2=$_GET['todate'];
//$date2='11 August, 2014';

$pdf=new PDF();
$pdf->AddPage('P','A4');
//Heading infos
$x =150; $y =30;
$pdf->SetXY($x,$y);
$pdf->SetFont('Arial','B',10);
$pdf->Ln(5);
$tym = date('j F, Y');
$pdf->Cell(0,0,"Date : $tym ",0,1,'R');

//$invoice_no=0;$subtotal=0;$discount=0;$vat=0;$tax=0;$grand_total=0;



$x=$pdf->getX();$y=$pdf->getY();
$x =10; $y += 5;
$pdf->SetXY($x,$y);

$pdf->SetFont('Arial','B',12);
$pdf->Cell(190,7,"Invoice report Between $date1 to $date2",'LTRB',1,'C');
//Column Headers
$pdf->Cell(31.5,7,"Date",'LTRB',0,'C');
$pdf->Cell(31.5,7,"Invoice No",'LTRB',0,'C');
$pdf->Cell(31.5,7,"Company",'LTRB',0,'C');
$pdf->Cell(31.5,7,"Grand Total",'LTRB',0,'C');
$pdf->Cell(31.5,7,"Paid",'LTRB',0,'C');
$pdf->Cell(31.5,7,"Due",'LTRB',1,'C');

$pdf->SetFont('Arial','',10);
$query="SELECT * FROM `invoice_core` WHERE date BETWEEN '$date1' AND '$date2'"; 
if($query_run=mysql_query($query)){
while($query_row=mysql_fetch_assoc($query_run)){
$date =$query_row['date'];
$invoice_no =$query_row['invoice_no'];
$company=$query_row['company'];
$company=ucwords($company);
$grand_total =$query_row['grand_total'];
$paid=$query_row['paid'];
$due=$grand_total-$paid;

$pdf->Cell(31.5,7,"$date",'LTRB',0,'C');
$pdf->Cell(31.5,7,"$invoice_no",'LTRB',0,'C');
$pdf->Cell(31.5,7,"$company",'LTRB',0,'C');
$pdf->Cell(31.5,7,"$grand_total ",'LTRB',0,'C');
$pdf->Cell(31.5,7,"$paid",'LTRB',0,'C');
$pdf->Cell(31.5,7,"$due",'LTRB',1,'C');
}}

$tym = date('d-m-Y');
$pdf->Output("$tym Invoice Between $date1 to $date2.pdf ", 'I');
?>