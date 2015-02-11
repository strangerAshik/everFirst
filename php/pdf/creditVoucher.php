<?php
require('mysql_table.php');
include'../php_output.php';
$voucherNo=$_GET['voucherNo'];

    class PDF extends PDF_MySQL_Table{
   function Header(){
	
	$voucherNo=$_GET['voucherNo'];
    $query="SELECT * FROM `credit_transaction` WHERE `voucher`='$voucherNo'";
	if($query_run=mysql_query($query)){
		if(mysql_num_rows($query_run)!=NULL){
	while($query_row=mysql_fetch_assoc($query_run))
		{
	//$invoice_no=$query_row['invoice_no'];
	$date=$query_row['date'];
	$purpose=$query_row['purpose'];
	$purpose=ucwords($purpose);
	$payFrom=$query_row['pay_from'];
	$payFrom=ucwords($payFrom);
	$mobile=$query_row['mobile'];
	$address=$query_row['address'];
	$workOrder=$query_row['work_order'];
	
	$address=ucwords($address);
	//$paid_amount=$query_row['paid_amount'];
	$amount=$query_row['amount'];
	
    $x =150; $y =10;
    $this->SetXY($x,$y);	
    $this->SetFont('Arial','B',12); 
	$this->Ln(5);
	$this->Cell(190,4,"EVERFIRST TECHNOLOGY LTD.",0,1,'C');	
	$this->SetFont('Arial','',7); 	
	$this->Cell(190,3,"House # 421 (Ground Floor), Road # 30, New DOHS",0,1,'C');		
	$this->Cell(190,3,"Mohakhali, Dhaka-1206, Bangladesh",0,1,'C');		
	$tym = date('d-m-Y');
	$this->Ln(1);
	$this->SetFont('Arial','B',10); 
	$this->Cell(190,5,"Credit Voucher",1,1,'C');
	$this->SetFont('Arial','I',10);
	$this->Ln(1);
	$this->Cell(125,5,"Voucher No: $voucherNo",0,0,'L');$this->Cell(65,5,"Date: $date ",0,1,'R');
	$this->Cell(125,5,"Work Order: $workOrder",0,1,'L');
	$this->Cell(190,5,"Purpose: $purpose",0,1,'L');
	//if($work_order!=''){$this->Cell(65,5,"Work Order: $work_order",0,1,'L');}
	
		}
		parent::Header();
		
	}
	else {echo"ERROR: Voucher No. Not Found!!";exit;}
	
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
$pdf->AddPage('P','A4');


$x=$pdf->getX();$y=$pdf->getY();
$x =10; $y+= 10;
$pdf->SetXY($x,$y);

$query="SELECT * FROM `credit_transaction` WHERE `voucher`='$voucherNo'";
	if($query_run=mysql_query($query)){
		if(mysql_num_rows($query_run)!=NULL){
	while($query_row=mysql_fetch_assoc($query_run))
		{
	$payFrom=$query_row['pay_from'];
	$payFrom=ucwords($payFrom);
	$mobile=$query_row['mobile'];
	$address=$query_row['address'];
	
	$address=ucwords($address);
	//$paid_amount=$query_row['paid_amount'];
	$amount=$query_row['amount'];
	$note=$query_row['note'];
	$inWord=convert_number_to_words($amount);
	$amount=$query_row['amount'];
	$pdf->Cell(95,5,"Pay From :  $payFrom",1,0,'L');$pdf->Cell(95,5,"Mobile : $mobile ",1,1,'L');
	$pdf->Cell(190,5,"Amount :  $amount",1,1,'L');
	$pdf->Cell(190,5,"Amount In Word(TK) :  $inWord",1,1,'L');
	if($note!=''){$pdf->Cell(190,5,"Note :  $note",1,1,'L');}
	}
	}
	}


$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(190,7,"",0,1,'L');
$pdf->Cell(66.3333333,7,"Originating Officer ",0,0,'C');
$pdf->Cell(66.3333333,7,"Authorised Signature ",0,0,'C');
$pdf->Cell(66.3333333,7,"Receiver Signature ",0,1,'C');
$tym = date('d-m-Y');
$pdf->Output("$tym invoice no. $voucherNo.pdf ", 'I');
?>