<?php
require('mysql_table.php');
include'../db_connect.php';
class PDF extends PDF_MySQL_Table{
function Header(){
    //Title 	A4 =210mm(width) * 297 mm(height)
	$x =150; $y =10;
    $this->SetXY($x,$y);	
    $this->SetFont('Arial','B',12); 
	$this->Ln(5);
	$this->Cell(190,4,"EVERFIRST TECHNOLOGY LTD.",0,1,'C');	
	$this->SetFont('Arial','',7); 	
	$this->Cell(190,3,"House # 421 (Ground Floor), Road # 30, New DOHS",0,1,'C');		
	$this->Cell(190,3,"Mohakhali, Dhaka-1206, Bangladesh",0,1,'C');		
	$tym = date('d-m-Y');
    parent::Header();
}}
$brand='CAT';
//$brand=$_POST['brand'];

//Title A4 =210mm(width X) * 297 mm(height Y)
error_reporting(E_ALL ^ E_NOTICE);
$pdf=new PDF();
$pdf->AddPage('P','A4');

$x =160; $y =30;
$pdf->SetXY($x,$y);
$pdf->SetFont('Arial','B',10);
$pdf->Ln(5);
$tym = date('d-m-Y');
$pdf->Cell(0,0,"Date : $tym ",0,2,'R');

$x=$pdf->getX();$y=$pdf->getY();
$x =10; $y += 5;
$pdf->SetXY($x,$y);

$query="SELECT * FROM `inventory_core` ORDER BY `brand` ASC";

//Title
$pdf->SetFont('Arial','B',12);
$pdf->Cell(190,7,"Stored Product with Provision",'LTRB',1,'C');
//Column Title

$pdf->Cell(38,7,"Brand",'LTRB',0,'C');
$pdf->Cell(38,7,"Item Name",'LTRB',0,'C');
$pdf->Cell(38,7,"Part No",'LTRB',0,'C');
$pdf->Cell(38,7,"Quantity",'LTRB',0,'C');
$pdf->Cell(38,7,"Provision",'LTRB',1,'C');

$pdf->SetFont('Arial','',10);
if($query_run=mysql_query($query)){
while($query_row=mysql_fetch_assoc($query_run)){
$item_name=ucwords($query_row['item_name']);
$part_no=ucwords($query_row['part_no']);
$brand=ucwords($query_row['brand']);
$quantity=$query_row['quantity'];
$provision=$query_row['provision'];

$pdf->Cell(38.0,7,"$brand",'LTRB',0,'C');
$pdf->Cell(38.0,7,"$item_name",'LTRB',0,'C');
$pdf->Cell(38.0,7,"$part_no",'LTRB',0,'C');
$pdf->Cell(38.0,7,"$quantity",'LTRB',0,'C');
$pdf->Cell(38.0,7,"$provision",'LTRB',1,'C');
}}

$tym = date('d-m-Y');
$pdf->Output("$tym Stored Product with Provision.pdf ", 'I');
?>