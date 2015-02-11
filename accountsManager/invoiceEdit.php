<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Edit Invoice</title>
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
		$( ".header" ).load( "accountManagerHeader.php" );
		</script>

		<section class="section fix">
			<!--<div class="challanHeadline fix"><h2>Invoice</h2></div><hr>-->
			<div class="invoiceAndChallan fix" >
			<?php include'../php/php_output.php';
$invoiceNo=htmlentities(addslashes(strtolower(trim($_POST['editInvoice']))));
$query1="SELECT * FROM `invoice_surface` WHERE `invoice_no`='$invoiceNo' ORDER BY `id` DESC";
if($query_run=mysql_query($query1)){

	if(mysql_num_rows($query_run)==NULL){echo "<tr><td >No Item Added Yet!!</td></tr>";}
	else{	
	$sl=0;
	$subtotal=0;
	echo"<form action='' method=''>";
	echo "<table>";
	echo"<tr><th>SI</th><th>Item Name</th><th>Part No.</th><th>Brand</th><th>Unit Price</th><th>Quantity</th></tr>";
	while($query_row=mysql_fetch_assoc($query_run)){
		++$sl;
		$id=$query_row['id'];
		$itemName=$query_row['item_name'];
		$partNo=$query_row['part_no'];
		$brand=$query_row['brand'];
		$unitPrice=$query_row['unit_price'];
		$quantity=$query_row['quantity'];
		
		echo"<tr>
			    <td>$sl</td><td>$itemName</td><td>$partNo</td><td>$brand</td><td><input type='text' onkeyup='updateUnitPrice($id,this.value,$invoiceNo)' name='unitPrice[]' value=$unitPrice /></td><td><input type='text' onkeyup='updateQuantity($id,this.value,$invoiceNo)' value=$quantity /></td><td style='display:none;'><input type='text' name='id[]' id='$id' value=$id />	</td>
			</tr>";
		
		}
		
	
	
		
	
	}
	}
	else {echo "<tr><td>Query is not Runed</td></tr>";};
	//end of 
	/*
$unitPrice = $_POST['unitPrice'];
$quantity = $_POST['quantity'];
$id = $_POST['id'];
$invoice= $_POST['invoice'];
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
$query="UPDATE `invoice_core` SET `subtotal`='$subtotal' WHERE `invoice_no`='$invoice'";
if(mysql_query($query)){ //echo"Updated!!"; 
}
else{ //echo"\nFalied to update!!";
}*/
//subtotal, discount, vat, tax, grand total getting
$query="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoiceNo' ";
if($query_run=mysql_query($query)){
  	if(mysql_num_rows($query_run)!=NULL){
		 while($query_row=mysql_fetch_assoc($query_run)){
			$subtotal=$query_row['subtotal'];
			$discount=$query_row['discount'];
			$vat=$query_row['vat'];
			$tax=$query_row['tax'];
			$grand_total=$query_row['grand_total'];
		}
	
	}	
	else{echo"<tr><td>Invoice Was Not Generated Properly!!</td></tr>";}
}
else{echo"<tr><td>Invalid Query!!</td></tr>";}
?>


<tr><td colspan="5"  style="text-align:right;">Subtotal:</td><td  ><input type='text' id='subtotal' value=<?php echo $subtotal; ?> ></td></tr>
<tr><td colspan="5"  style="text-align:right;">Discount Amount(TK):</td><td ><input  type="text" id="discount" <?php echo "onkeyup='setDiscount(this.value,$invoiceNo)' " ?> value=<?php echo $discount; ?>  /></td></tr>

<tr><td colspan="4" style="text-align:right;">Vat(%):</td><td ><input type="text" id="setVat"  <?php echo "onkeyup=\"vatTaxAmount(this.value,'showVat');setVatOrTax($invoiceNo,'vat','showVat')\"" ?> /></td><td style="" id="getVat" ><input readonly type="text" id='showVat'  <?php // echo "onkeyup=\"setVatOrTax($invoiceNo,'vat','showVat')\";";?> value=<?php echo $vat; ?>  /></td></tr>

<tr><td  colspan="4" style="text-align:right;">Tax(%):</td><td style=""> <input type="text"  id="setTax" <?php echo "onkeyup=\"vatTaxAmount(this.value,'showTax');setVatOrTax($invoiceNo,'tax','showTax')\"" ?>/></td><td style=""id="getTax"><input readonly type="text"  id="showTax" <?php // echo "onkeyup=\"setVatOrTax($invoiceNo,'tax','showTax')\""; ?> value=<?php echo $tax; ?>  /></td></tr>

<tr><td  colspan="5" style="text-align:right;font-size:18px;font-weight:bold;" >Grand Total:</td><td style="font-size:18px;font-weight:bold;" id="grandTotal"><?php //grandTotal($invoiceNo) ?>Set vat, Tax, discount </td></tr>
<tr><td style='visibility:hidden' colspan="5"><input type='text' id='invoiceNo' value='<?php echo $invoiceNo; ?>'/></td><td><input type="button" onclick="pdfInvoice();" value="Update & Get PDF"></td></tr>
</table>

</form>

</body>
</html>
