<?php
require('mysql_table.php');
include'../php_output.php';
$invoice_no=$_GET['invoiceNo'];

    class PDF extends PDF_MySQL_Table{
   function Header(){
	
	$invoice_no=$_GET['invoiceNo'];
    $query="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoice_no'";
	if($query_run=mysql_query($query)){
		if(mysql_num_rows($query_run)!=NULL){
	while($query_row=mysql_fetch_assoc($query_run))
		{
	$invoice_no=$query_row['invoice_no'];
	$work_order=$query_row['work_order'];

	$mobile=$query_row["mobile"];	
	$mobile=$query_row['mobile'];
	 $query1="SELECT * FROM `client` WHERE `mobile`= '$mobile'";
	if($query_run=mysql_query($query1))
		{          
			if(mysql_num_rows($query_run)!=NULL){		
		while($query_row=mysql_fetch_assoc($query_run))
			{ 
				$address=$query_row['address'];
				$address=ucwords($address);
					//$address=wordwrap($address,15,"\n");
				$address1=implode(' ', array_slice(explode(' ', $address), 0,8));
					$address2=implode(' ', array_slice(explode(' ', $address), 8,11));
					$address3=implode(' ', array_slice(explode(' ', $address), 11,15));
				$company=$query_row['company'];
				$company=ucwords($company);
			}
			}
			else {echo"ERROR: Client Is Not Exist!!";exit;}
		}
    $x =150; $y =43.18;
    $this->SetXY($x,$y);	
   
    $this->SetFont('Arial','B',10);    
	$tym = date('d-m-Y');
	$this->Ln(1);
	$this->SetFont('Arial','B',10); 
	$this->Cell(190,5,"Invoice",1,1,'C');
	$this->Ln(1);
	$this->Cell(125,5,"$company",0,0,'L');$this->SetFont('Arial','I',10);$this->Cell(65,5,"Date : $tym",0,1,'L');
	$this->Cell(125,5,"$address1",0,0,'L');$this->Cell(65,5,"Invoice No: $invoice_no ",0,1,'L');
	if($address2!=''){$this->Cell(125,5,"$address2",0,0,'L');}if($work_order!=''){$this->Cell(65,5,"Work Order: $work_order",0,1,'L');}
	if($address3!=''){$this->Cell(125,5,"$address3",0,1,'L');}
	if($mobile!=''){$this->Cell(125,5,"Mobile: $mobile",0,1,'L');}
	
		}
		parent::Header();
		
	}
	else {echo"ERROR: Invoice Not Found!!";exit;}
	
	}
	
}
function Footer(){
/*
	$this->SetAutoPageBreak(1,2);
	//$this->Line(1,275,210,275);
    // Go to 1.5 cm from bottom
    $this->SetY(-40);
    $this->SetFont('Arial','I',10);
	$this->Cell(95,7,"Originating Officer ",0,0,'C');
	$this->Cell(95,7,"Authorised Signature ",0,1,'C');
  // $this->Cell(0,0,'EVERFIRST TECHNOLOGY LTD.',0,2,'L'); 
    // Select Arial italic 8
    $this->SetFont('Arial','I',8);
    // Print page number in Left
   // $this->Cell(0,10,'Page '.$this->PageNo(),0,0,'R');

    parent::Footer();
*/}
    }


$pdf=new PDF();
$pdf->AddPage('P','A4');

$query="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoice_no'"; 
if($query_run=mysql_query($query)){
while($query_row=mysql_fetch_assoc($query_run)){
$subtotal=$query_row['subtotal'];
$discount=$query_row['discount'];
$vat=$query_row['vat'];
$vatP=round($vat*100/$subtotal);
$tax=$query_row['tax'];
$taxP=round($tax*100/$subtotal);
$grand_total=$query_row['grand_total'];
}}

$query="SELECT * FROM `invoice_surface` WHERE `invoice_no`='$invoice_no'"; 

$x=$pdf->getX();$y=$pdf->getY();
$x =10; $y += 5;
$pdf->SetXY($x,$y);

$pdf->SetFont('Arial','B',9);
//$pdf->Cell(190,7,"Invoice",'LTRB',1,'C');
//Grand Total
$pdf->Cell(6,7,"SL",'LTRB',0,'C');
$pdf->Cell(50.67,7,"Item Name",'LTRB',0,'C');
$pdf->Cell(30.67,7,"Part No",'LTRB',0,'C');
$pdf->Cell(30.67,7,"Brand",'LTRB',0,'C');
$pdf->Cell(15.67,7,"Quantity",'LTRB',0,'C');
$pdf->Cell(25.67,7,"Unit Price",'LTRB',0,'C');
$pdf->Cell(30.67,7,"Total Price",'LTRB',1,'C');

$pdf->SetFont('Arial','',9);
if($query_run=mysql_query($query)){
$sl=1;
while($query_row=mysql_fetch_assoc($query_run)){
$item_name=$query_row['item_name'];
$item_name=ucwords($item_name);
$part_no=$query_row['part_no'];
$part_no=strtoupper($part_no);
$brand=$query_row['brand'];
$brand=strtoupper($brand);
$quantity=$query_row['quantity'];
$unit_price=$query_row['unit_price'];
$total=$quantity*$unit_price;

$pdf->Cell(6,7,"$sl",'LTRB',0,'C');
$pdf->Cell(50.67,7,"$item_name",'LTRB',0,'C');
$pdf->Cell(30.67,7,"$part_no",'LTRB',0,'C');
$pdf->Cell(30.67,7,"$brand",'LTRB',0,'C');
$pdf->Cell(15.67,7,"$quantity",'LTRB',0,'C');
$pdf->Cell(25.67,7,"$unit_price",'LTRB',0,'C');
$pdf->Cell(30.67,7,"$total",'LTRB',1,'C');
$sl++;
}}

//Subtotal
$pdf->Cell(159.30,7,"Subtotal",'LTRB',0,'R');
$pdf->Cell(30.7,7,"$subtotal",'LTRB',1,'C');

if ($discount != 0) {
//Total discount
$pdf->Cell(159.30,7,"Discount (TK)",'LTRB',0,'R');
$pdf->Cell(30.7,7,"$discount",'LTRB',1,'C');
}
if ($vat != 0) {
//Total vat
$pdf->Cell(159.30,7,"Vat ($vatP %)",'LTRB',0,'R');
$pdf->Cell(30.7,7,"$vat",'LTRB',1,'C');
}
if ($tax != 0) {
//Total tax
$pdf->Cell(159.30,7,"Tax ($taxP %)",'LTRB',0,'R');
$pdf->Cell(30.7,7,"$tax",'LTRB',1,'C');
}
//Grand Total
$pdf->Cell(159.30,7,"Grand Total",'LTRB',0,'R');
$pdf->Cell(30.7,7,"$grand_total",'LTRB',1,'C');
$inWord=convert_number_to_words($grand_total);
$pdf->Cell(190,5,"Amount In Word(TK) :  $inWord",1,0,'L');

$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(190,7,"",0,1,'L');

/***************footer  start***********************/
//$pdf->SetAutoPageBreak(1,2);
	//$this->Line(1,275,210,275);
    // Go to 1.5 cm from bottom
    $pdf->SetY(-40);
    $pdf->SetFont('Arial','I',10);
	$pdf->Cell(95,7,"Originating Officer ",0,0,'C');
	$pdf->Cell(95,7,"Authorised Signature ",0,1,'C');
  // $this->Cell(0,0,'EVERFIRST TECHNOLOGY LTD.',0,2,'L'); 
    
//footer 
/***************footer  end***********************/
$tym = date('d-m-Y');
$pdf->Output("$tym invoice no. $invoice_no.pdf ", 'I');
?>