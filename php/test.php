<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Invoice</title>
		<meta charset="utf-8"/>		
		<link rel="stylesheet" href="../css/main.css"/>
		<script type="text/javascript" src="../js/main.js"></script>
		<script type="text/javascript" src="../js/jquery-1.10.2.js"></script>
	</head>
	<body>
	<!--Login Sequacity-->
	 <?php
		session_start(); if(@$_SESSION['logStatus']!='login'){header('Location:../index.php') ;} 
	 ?>		
	 <!--End Login Sequacity-->
		<div class="wrapper fix">
		<header class="header fix">
		</header>

		<script>	
		$( ".header" ).load( "storeHeader.php" );
		</script>

		<section class="section fix">
			<!--<div class="challanHeadline fix"><h2>Invoice</h2></div><hr>-->
			<div class="invoiceAndChallan fix" >
			<?php include'../php/php_output.php';

$unitPrice = $_POST['unitPrice'];
$quantity = $_POST['quantity'];
$id = $_POST['id'];
echo $invoice= $_POST['invoice'];
$subtotal=0;
//print_r($id);
foreach( $unitPrice as $key => $n ) {
 // print "unitPrice is ".$n.", and quantity is " .$quantity[$key].' id ='.$id[$key]."\n";
 $query="UPDATE `invoice_surface` SET `unit_price`='$n',`quantity`='$quantity[$key]' WHERE `id`='$id[$key]' ";
 $subtotal+=$n*$quantity[$key];
if(mysql_query($query)){ //echo"Updated!!";
} 
else{ //echo"\nFalied to update!!";
}
}
$query="UPDATE `invoice_core` SET `subtotal`='7' WHERE `invoice_no`='150'";
?>
<form action='' method=''>
<table>
<tr><td  style="text-align:right;">Subtotal:</td><td colspan="3"><input type='text' value=<?php echo $invoice ;?> /></td></tr>
<tr><td style="width:638px;text-align:right;">Discount Amount(TK):</td><td style="width:231px"><input  type="text" id="discount"  /></td></tr>
<tr><td  style="text-align:right;width:400px;">Vat(%):</td><td style="width:231px"><input type="text" id="setVat" onkeyup="grandTotal();setVat();"/></td><td style="width:231px" id="getVat" ><input type="text" onkeyup="grandTotal();" /></td></tr>
<tr><td  style="text-align:right;width:227px;">Tax(%):</td><td style="width:231px"> <input type="text" id="setTax" onkeyup="grandTotal();setTax();"/></td><td style="width:231px"id="getTax"><input type="text" onkeyup="grandTotal();" id="tax"/></td></tr>
<tr><td  style="width:637px;text-align:right;font-size:18px;font-weight:bold;" >Grand Total:</td><td style="width:231px;font-size:18px;font-weight:bold;" id="grandTotal">To See Set Vat/Tax</td></tr>
<tr><td></td><td></td><td><input type="submit" value="Update"></td></tr>
</table>

</form>
		</body>
</html>
