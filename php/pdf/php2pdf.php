<?php
require('mysql_table.php');

class PDF extends PDF_MySQL_Table{
function Header(){
    //Title 	A4 =210mm(width) * 297 mm(height)
    $x =150; $y =40;
    $this->SetXY($x,$y);
    $this->SetFont('Arial','B',18);
    $this->Cell(0,0,'Invoice',0,2,'R');
    $this->SetFont('Arial','B',10);
    $this->Ln(5);
    $tym = date('d-m-Y');
    $this->Cell(0,0,"Date : $tym ",0,2,'R');
    $this->Ln(5);
	$con = mysql_connect('localhost','nrock','nrock'); 
	mysql_select_db('everfirst_db');
	$query=("SELECT lastInvoiceNum FROM get_invoice_no");
	$res=mysql_query($query) or die('Error: '.mysql_error()."<BR>Query: $query");
	$get_invoice_no=mysql_fetch_assoc($res);
	$this->Cell(0,0,"Invoice : $get_invoice_no["lastInvoiceNum"]",0,0,'R'); 



	//Client Info
	$x =10; $y =40;
	$this->SetXY($x,$y);
	$query=("SELECT client_name FROM client WHERE client_mobile = '01677007983' ");
	$res=mysql_query($query) or die('Error: '.mysql_error()."<BR>Query: $query");
	$this->SetFont('Arial','B',18);
	$client_name=mysql_result($res,0,0);
	$this->Cell(0,0,"$client_name",0,0,'L');
	$this->Ln(5);
	$query=("SELECT client_address FROM client WHERE client_mobile = '01677007983' ");
	$res=mysql_query($query) or die('Error: '.mysql_error()."<BR>Query: $query");
	$client_address=mysql_result($res,0,0);
	$this->SetFont('Arial','',14);
	$this->Cell(25,0,"$client_address",0,0,'L'); 

    parent::Header();
}
}

//Connect to database
error_reporting(E_ALL ^ E_DEPRECATED);

	$pdf = mysql_connect('localhost','nrock','nrock'); 
	mysql_select_db('everfirst_db');


$pdf=new PDF();
$pdf->AddPage();

$x=$pdf->getX();$y=$pdf->getY();
$x =5; $y += 20;
$pdf->SetXY($x,$y);

$pdf->Cell(198,7,"BILL",'LTRB',1,'C');
$pdf->Ln(1);
$pdf->AddCol('itemName',-1,'item Name','C');
$pdf->AddCol('partNo',-1,'Part No.','C');
$pdf->AddCol('quantity',-1,'quantity','C');
$pdf->AddCol('unitPrice',-1,'Unit Price','L');
$pdf->Table("SELECT * FROM `invoice_product_detail`");


$query=("SELECT * FROM get_invoice_no");
$res=mysql_query($query) or die('Error: '.mysql_error()."<BR>Query: $query");
$get_invoice_no=mysql_result($res,0,1);

$pdf->Output(" $get_invoice_no.pdf ", 'I');
?>