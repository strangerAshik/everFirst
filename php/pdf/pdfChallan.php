<?php
require('mysql_table.php');
include'../php_output.php';
$invoice_no=$_GET['invoiceNo'];
$challanNo=$_GET['challanNo'];
class PDF extends PDF_MySQL_Table{
function Header(){
	$challanNo=$_GET['challanNo'];
	$invoice_no=$_GET['invoiceNo'];
	
    $query="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoice_no'";
	if($query_run=mysql_query($query)){
		if(mysql_num_rows($query_run)!=NULL){
	while($query_row=mysql_fetch_assoc($query_run))
		{
	$invoice_no=$query_row['invoice_no'];
	$work_order=$query_row['work_order'];
	
	$mobile=$query_row['mobile'];
	$query1="SELECT * FROM `client` WHERE `mobile`='$mobile'";
	if($query_run=mysql_query($query1))
		{          
			if(mysql_num_rows($query_run)!=NULL){		
		while($query_row=mysql_fetch_assoc($query_run))
			{
				$address=$query_row['address'];
				$address=ucwords($address); 
				$address1=implode(' ', array_slice(explode(' ', $address), 0,7));
					$address2=implode(' ', array_slice(explode(' ', $address), 7,11));
					$address3=implode(' ', array_slice(explode(' ', $address), 11,15));
					$company=$query_row['company'];
					$company=ucwords($company);			
			}
			}
			else {echo"ERROR: Client Is Not Exist!!";exit;}
		}
    $x =150; $y =43.18;
    $this->SetXY($x,$y);	
     
	$tym = date('d-m-Y');
	$this->Ln(1);
	$this->SetFont('Arial','B',10); 
	$this->Cell(190,5,"Challan",1,1,'C');
	$this->Ln(1);
	$this->SetFont('Arial','B',10);
	$this->Cell(130,5,"$company",0,0,'L');
	$this->SetFont('Arial','I',10);
	$this->Cell(60,5,"Date : $tym",0,1,'L');
	$this->SetFont('Arial','I',10);
	$this->Cell(130,5,"$address1",0,0,'L');$this->Cell(60,5,"Invoice No: $invoice_no ",0,1,'L');
	$this->Cell(130,5,"$address2",0,0,'L');$this->Cell(60,5,"Challan No: $challanNo ",0,1,'L');	
	$this->Cell(130,5,"$address3",0,0,'L');if($work_order!=''){$this->Cell(60,5,"Work Order: $work_order",0,1,'L');}
	if($mobile!=''){$this->Cell(125,5,"Mobile: $mobile",0,1,'L');}
	
		}
		parent::Header();
		
	}
	else {echo"ERROR: Invoice Not Found!!";exit;}
	
	}
	
}
function Footer(){
	//$this->Line(1,275,210,275);
    // Go to 1.5 cm from bottom
    $this->SetY(-15);
    $this->SetFont('Arial','B',18);
  //  $this->Cell(0,0,'EVERFIRST TECHNOLOGY LTD.',0,2,'L'); 
    // Select Arial italic 8
    $this->SetFont('Arial','I',8);
    // Print page number in Left
   // $this->Cell(0,10,'Page '.$this->PageNo(),0,0,'R');

    parent::Footer();
}
}





$pdf=new PDF();
$pdf->AddPage();

$x=$pdf->getX();$y=$pdf->getY();
$x =10; $y += 10;
$pdf->SetXY($x,$y);
$pdf->SetFont('Arial','B',9);
//Table Header
$cellWidth=134/3;
//$pdf->Cell(190,7,"Challan",'LTRB',1,'C');
$pdf->Cell(6,5,"SL",'LTRB',0,'C');
$pdf->Cell(55,5,"Item Name",'LTRB',0,'C');
$pdf->Cell(43,5,"Part No",'LTRB',0,'C');
$pdf->Cell(43,5,"Brand",'LTRB',0,'C');
$pdf->Cell(43,5,"Quantity",'LTRB',1,'C');

$query="SELECT * FROM `challan` WHERE `invoice_no`='$invoice_no' AND `challan_no`='$challanNo'"; 
if($query_run=mysql_query($query)){
$sl=1;
while($query_row=mysql_fetch_assoc($query_run)){
$item_name=$query_row['item'];
$item_name=ucwords($item_name);
$part_no=$query_row['part'];
$part_no=ucwords($part_no);
$brand=$query_row['brand'];
$brand=strtoupper($brand);
$delivered_quantity=$query_row['delivered_quantity'];
//$unit_price=$query_row['unit_price'];
//$total=$quantity*$unit_price;
$cellWidth=(185/4);
$pdf->SetFont('Arial','',9);
if($delivered_quantity>0){
$pdf->Cell(6,5,"$sl",'LTRB',0,'C');
$pdf->Cell(55,5,"$item_name",'LTRB',0,'C');
$pdf->Cell(43,5,"$part_no",'LTRB',0,'C');
$pdf->Cell(43,5,"$brand",'LTRB',0,'C');
$pdf->Cell(43,5,"$delivered_quantity",'LTRB',1,'C');
++$sl;
}


}}

/**************Footer Start*********************/
$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(95,7,"Originating Officer ",0,0,'C');
$pdf->Cell(95,7,"Receiver Signature ",0,1,'C');
/**************Footer Start*********************/
$tym = date('d-m-Y');
$pdf->Output("$tym invoice no. $invoice_no.pdf ", 'I');
?>