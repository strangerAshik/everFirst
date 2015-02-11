<?php 
//connect database
include'php_output.php';
$note=$_POST['note'];
if($note=='proformaInvoice'){
$rowId=$_POST['rowId'];
$editItem_quantity=$_POST['editItem_quantity'];
$editItem_price=$_POST['editItem_price'];
//read existing value
$query="SELECT * FROM `proforma_invoice` WHERE `id`='$rowId'";
if($query_run=mysql_query($query))
			{
					if(mysql_num_rows($query_run)!=NULL)
						{
						
								while($row=mysql_fetch_assoc($query_run))
									{
										$item_name=$row['item_name'];
										$item_part_no=$row['item_part_no'];
										$item_brand=$row['item_brand'];
										$proforman_item_price=$row['item_price'];
										$proforman_item_quantity=$row['item_quantity'];
									}
									
						}
					else{
							echo "No row faund";
						}
			}
 else  mysql_error();
//calculate difference between old and new data
$ItemPriceDifference=$proforman_item_price-$editItem_price;
$ItemQuantityDifference=$proforman_item_quantity-$editItem_quantity;

 @$query="SELECT * FROM `enventory_stock` WHERE `item_name`='$item_name' AND `item_part_no`='$item_part_no' AND `item_brand`='$item_brand'";
  if($query_run=mysql_query($query))
			{
					if(mysql_num_rows($query_run)!=NULL)
						{
						
								while($row=mysql_fetch_assoc($query_run))
									{
									 $id=$row['itemId'];
									 $total_item_price=$row['item_price'];
									 $total_item_quantity=$row['item_quantity'];
									}
									
						}
					else{
							echo "No row faund";
						}
			}
 else  mysql_error();
//update enventory_stock row
$NewItemPrice=$total_item_price-$ItemPriceDifference;
$NewItemQuantity=$total_item_quantity-$ItemQuantityDifference;

@$query="UPDATE `enventory_stock` SET `item_price`='$NewItemPrice',`item_quantity`='$NewItemQuantity' Where `itemId`='$id'";
 if($query_run=mysql_query($query))
			{//echo"Updated now deleting";
			}
 else  mysql_error();
//updateproforma_invoice row
@$query="UPDATE `proforma_invoice` SET `item_price`='$editItem_price',`item_quantity`='$editItem_quantity' Where `id`='$rowId'";
 if($query_run=mysql_query($query))
			{
			echo"SuccessFully Updated";
			}
 else  mysql_error();

}
if($note=='invoice'){
$rowId=$_POST['rowId'];
$quantity=$_POST['editItem_quantity'];
$price=$_POST['editItem_price'];
//read existing value
@$query="UPDATE `invoice_product_detail` SET `unitPrice`='$price',`quantity`='$quantity' Where `id`='$rowId'";
 if($query_run=mysql_query($query))
			{
			echo"SuccessFully Updated";
			}
 else  mysql_error();
}
if($note=='updateInventory'){
updateInventoryStoreAfterSell();
updateInvoiceNo();
}
if($note=='InvoiceCancle'){

updateInvoiceNo();
echo "Invoic Cancle";
}
if($note=='changePass'){

session_start();
$userName=$_SESSION['userName'];
$desig=$_SESSION['desig'];
$oldPass=htmlentities(addslashes(strtolower(trim($_POST['oldPass']))));
$oldPass=md5($oldPass);
$newPass=htmlentities(addslashes(strtolower(trim($_POST['newPass']))));
$newPass=md5($newPass);
$query="SELECT * FROM `users` WHERE `userName`='$userName' AND `desig`='$desig' AND `password`='$oldPass'";
if($query_run=mysql_query($query))
						{
								if(mysql_num_rows($query_run)!=NULL){
									$query1="UPDATE `users` SET `password`='$newPass' WHERE `userName`='$userName' AND `desig`='$desig'";
									if(mysql_query($query1)){
									echo"Success Fully Changed!!";
									}
									else{echo"ERROR: During Changing Some Error Occurred!!";}
								}
								else{echo"ERROR: Old And New Password Do not Match!!";}
								
							}
}
if($note=='editInvoice'){
$invoiceNo=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$query1="SELECT * FROM `invoice_surface` WHERE `invoice_no`='$invoiceNo' ORDER BY `id` DESC";
if($query_run=mysql_query($query1)){

	if(mysql_num_rows($query_run)==NULL){echo "<tr><td >No Item Added Yet!!</td></tr>";}
	else{
	
	$sl=0;
	echo"<form action='invoiceEdit.php' method='POST'>";
	echo "<table>";
	while($query_row=mysql_fetch_assoc($query_run)){
		++$sl;
		$id=$query_row['id'];
		$itemName=$query_row['item_name'];
		$partNo=$query_row['part_no'];
		$brand=$query_row['brand'];
		$unitPrice=$query_row['unit_price'];
		$quantity=$query_row['quantity'];
		
		echo"<tr>
			    <td>$sl</td><td>$itemName</td><td>$partNo</td><td>$brand</td><td><input type='text' name='unitPrice[]' value=$unitPrice /></td><td><input type='text'  name='quantity[]' value=$quantity /></td><td><input type='text' name='id[]' value=$id />	</td><td><input type='text' name='invoice' value=$invoiceNo />	</td>	
			</tr>";
		
		}
		
		echo"<tr><td class='noBorder'></td><td class='noBorder'><td/><td class='noBorder'><td/><td><input type='submit' value='Submit'></td></tr>";
		echo "</table>";
		echo"</form>";
	
	}
	}
	else {echo "Query is not Runed";};
}
if($note=='updateUnitPrice'){
$id=htmlentities(addslashes(strtolower(trim($_POST['id']))));
$unitPrice=htmlentities(addslashes(strtolower(trim($_POST['unitPrice']))));
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$query="UPDATE `invoice_surface` SET `unit_price`='$unitPrice' WHERE `id`='$id' ";
if($query_run=mysql_query($query)){}
else{echo"<tr><td>Update failed!!</td></tr>";}
$query="SELECT `unit_price`, `quantity` FROM `invoice_surface` WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){
		$subTotal=0;
		while($query_row=mysql_fetch_assoc($query_run)){
		$unit_price=$query_row['unit_price'];
		$quantity=$query_row['quantity'];
		$subTotal+=$unit_price*$quantity;
		}
		}
		
$query="UPDATE `invoice_core` SET `subtotal`='$subTotal' WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){}
else{echo"<tr><td>Subtotal Update failed!!</td></tr>";}

echo $subTotal;
}
if($note=='updateQuantity'){
$id=htmlentities(addslashes(strtolower(trim($_POST['id']))));
$qantity=htmlentities(addslashes(strtolower(trim($_POST['qantity']))));
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$query="UPDATE `invoice_surface` SET `quantity`='$qantity' WHERE `id`='$id' ";
if($query_run=mysql_query($query)){}
else{echo"<tr><td>Update failed!!</td></tr>";}
$query="SELECT `unit_price`, `quantity` FROM `invoice_surface` WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){
		$subTotal=0;
		while($query_row=mysql_fetch_assoc($query_run)){
		$unit_price=$query_row['unit_price'];
		$quantity=$query_row['quantity'];
		$subTotal+=$unit_price*$quantity;
		}
		}

$query="UPDATE `invoice_core` SET `subtotal`='$subTotal' WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){}
else{echo"<tr><td>Subtotal Update failed!!</td></tr>";}

echo $subTotal;
}
if($note=='setDiscount'){
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$discount=htmlentities(addslashes(strtolower(trim($_POST['discount']))));
$query="UPDATE `invoice_core` SET `discount`='$discount' WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){}
else{}

$grandTotal=grandTotal($invoice);
$query="UPDATE `invoice_core` SET `grand_total`='$grandTotal' WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){}
else{}


echo $grandTotal;
}
if($note=='setVatOrTax'){
//"invoice="+invoice+"&idValue="+idValue+"&option="+option+
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$idValue=htmlentities(addslashes(strtolower(trim($_POST['idValue']))));
$option=$_POST['option'];

if($option=='vat'){
$query="UPDATE `invoice_core` SET `vat`='$idValue' WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){}
else{}
}

else if($option=='tax'){
$query="UPDATE `invoice_core` SET `tax`='$idValue' WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){}
else{}
}
$grandTotal=grandTotal($invoice);
$query="UPDATE `invoice_core` SET `grand_total`='$grandTotal' WHERE `invoice_no`='$invoice'";

if($query_run=mysql_query($query)){}
else{}

echo $grandTotal;
}

?>