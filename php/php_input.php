<?php
//connect database
//include'db_connect.php';
include'php_output.php';
//global variables
$today = date("Y-m-d");

//grab which single function is called 
$clicked_on=$_POST['clicked_on'];

if($clicked_on=='addBank'){
$bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
$accountNo=htmlentities(addslashes(strtolower(trim($_POST['accountNo']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));

$query="SELECT * FROM `bank` WHERE `bank_name`='$bankName' AND `account_no`='$accountNo'";
			 if($query_run=mysql_query($query))
						{
								if(mysql_num_rows($query_run)!=NULL){
								//existing company
								echo"Existing Bank Account";
								}
								else{					
			$query="INSERT INTO `everfirst_db`.`bank`(`bank_name`,`account_no`,`note`)
											VALUES ('$bankName','$accountNo','$note')";
											
			if($query_run=mysql_query($query)){echo "New Bank Account Added!!";}
		    else  mysql_error();
								
								}
								
						}
}
if($clicked_on=='updatePrice'){
$itemName=htmlentities(addslashes(strtolower(trim($_POST['itemName']))));
$brand=htmlentities(addslashes(strtolower(trim($_POST['brand']))));
$itemPartNo=htmlentities(addslashes(strtolower(trim($_POST['partNo']))));
$saleUnitPrice=htmlentities(addslashes(strtolower(trim($_POST['saleUnitPrice']))));
$purchaseUnitPrice=htmlentities(addslashes(strtolower(trim($_POST['purchaseUnitPrice']))));

 $query="UPDATE `inventory_core` SET `purchaseUnitPrice`='$purchaseUnitPrice',`saleUnitPrice`='$saleUnitPrice' WHERE `part_no`='$itemPartNo' AND`item_name`='$itemName' AND`brand`='$brand'";
	if(mysql_query($query))echo"Price Successfully Updated!!";
	else{echo "Error: Update Failed!!";}
	
}
if($clicked_on=='updateQuantity'){
$itemName=htmlentities(addslashes(strtolower(trim($_POST['itemName']))));
$brand=htmlentities(addslashes(strtolower(trim($_POST['brand']))));
$itemPartNo=htmlentities(addslashes(strtolower(trim($_POST['partNo']))));
$quantity=htmlentities(addslashes(strtolower(trim($_POST['quantity']))));
$provision=htmlentities(addslashes(strtolower(trim($_POST['provision']))));
//$purchaseUnitPrice=htmlentities(addslashes(strtolower(trim($_POST['purchaseUnitPrice']))));

 echo $query="UPDATE `inventory_core` SET `quantity`='$quantity',`provision`='$provision' WHERE `part_no`='$itemPartNo' AND`item_name`='$itemName' AND`brand`='$brand'";
	if(mysql_query($query))echo"Quantity Successfully Updated!!";
	else{echo "Error: Update Failed!!";}
	
}
if($clicked_on=='getUnitPrice'){

$itemName=htmlentities(addslashes(strtolower(trim($_POST['itemName']))));
$brand=htmlentities(addslashes(strtolower(trim($_POST['brand']))));
$itemPartNo=htmlentities(addslashes(strtolower(trim($_POST['itemPartNo']))));
getUnitPrice($brand,$itemName,$itemPartNo);
}
if($clicked_on=='getQuantity'){

$itemName=htmlentities(addslashes(strtolower(trim($_POST['itemName']))));
$brand=htmlentities(addslashes(strtolower(trim($_POST['brand']))));
$itemPartNo=htmlentities(addslashes(strtolower(trim($_POST['itemPartNo']))));
getQuantity($brand,$itemName,$itemPartNo);
}
if($clicked_on=='getProvision'){

$itemName=htmlentities(addslashes(strtolower(trim($_POST['itemName']))));
$brand=htmlentities(addslashes(strtolower(trim($_POST['brand']))));
$itemPartNo=htmlentities(addslashes(strtolower(trim($_POST['itemPartNo']))));
getProvision($brand,$itemName,$itemPartNo);
}
if($clicked_on=='getPurchasePrice'){

$itemName=htmlentities(addslashes(strtolower(trim($_POST['itemName']))));
$brand=htmlentities(addslashes(strtolower(trim($_POST['brand']))));
$itemPartNo=htmlentities(addslashes(strtolower(trim($_POST['itemPartNo']))));
getPurchasePrice($brand,$itemName,$itemPartNo);
}
if($clicked_on=='getPartNo'){
$itemName=htmlentities(addslashes(strtolower(trim($_POST['itemName']))));
$brand=htmlentities(addslashes(strtolower(trim($_POST['brand']))));
getPartNo($itemName,$brand);
}
if($clicked_on=='getBrand'){
$itemName=htmlentities(addslashes(strtolower(trim($_POST['itemName']))));
getBrand($itemName);
}
if($clicked_on=='getItemList'){
$brand=htmlentities(addslashes(strtolower(trim($_POST['brand']))));
getItemList($brand);
}

if($clicked_on=='moneyInWord'){

$discount=htmlentities(addslashes(strtolower(trim($_POST['discount']))));
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$subTotal=getSubTotal($invoice);
$vat=getVat();
$tax=getTax();
$grandTotal=$subTotal+$vat+$tax-$discount;
echo @convert_number_to_words($grandTotal) ;

}

if($clicked_on=='grandTotal'){
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
 $subTotal=getSubTotal($invoice);
 
 $discount=htmlentities(addslashes(strtolower(trim($_POST['discount']))));
 $vat=htmlentities(addslashes(strtolower(trim($_POST['vat']))));
 $tax=htmlentities(addslashes(strtolower(trim($_POST['tax']))));
 $vat=($subTotal-$discount)*($vat/100);
 $tax=($subTotal-$discount)*($tax/100);
 echo $grandTotal=$subTotal+$vat+$tax-$discount;
}
if($clicked_on=='setVat'){
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
 $subTotal=getSubTotal($invoice);
 $discount=htmlentities(addslashes(strtolower(trim($_POST['discount']))));
 $vat=htmlentities(addslashes(strtolower(trim($_POST['vat']))));
echo $vat=($subTotal-$discount)*($vat/100);
}
if($clicked_on=='setTax'){
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
 $subTotal=getSubTotal($invoice);
 $discount=htmlentities(addslashes(strtolower(trim($_POST['discount']))));
 $tax=htmlentities(addslashes(strtolower(trim($_POST['tax']))));
echo $tax=($subTotal-$discount)*($tax/100);
}
if($clicked_on=='discount'){//this function for calculate GRAND TOTAL
$discount=htmlentities(addslashes(strtolower(trim($_POST['discount']))));
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$subTotal=getSubTotal($invoice);
$grandTotal=$subTotal-$discount;
echo @$grandTotal;

}
if($clicked_on=='storeInvoiceInfo'){

$invoiceNo=htmlentities(addslashes(strtolower(trim($_POST['invoiceNo']))));
$company=htmlentities(addslashes(strtolower(trim($_POST['company']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
$vat=htmlentities(addslashes(strtolower(trim($_POST['vat']))));
$tax=htmlentities(addslashes(strtolower(trim($_POST['tax']))));
$discount=htmlentities(addslashes(strtolower(trim($_POST['discount']))));
$paidAmount=htmlentities(addslashes(strtolower(trim($_POST['paidAmount']))));

$invoiceNo=getInvoiceNo();
$subTotal=getSubTotal($invoiceNo);
$vat=($subTotal-$discount)*($vat/100);
$tax=($subTotal-$discount)*($tax/100);
$grandTotal=$subTotal+$vat+$tax-$discount;


$query="INSERT INTO `invoice_core`(`date`,`invoice_no`,`work_order`,`company`,`mobile`,`subtotal`,`discount`,`vat`,`tax`,`grand_total`,`paid`)
											VALUES ('$today','$invoiceNo','$workOrder','$company','$mobile','$subTotal','$discount','$vat','$tax','$grandTotal','$paidAmount')";
											
			if($query_run=mysql_query($query)){updateInvoiceNo();echo "Invoice Generated!!";}
		    else  mysql_error();
//updating Core Inventory Provision
 $query="SELECT * FROM `invoice_surface` WHERE `invoice_no`='$invoiceNo'"; 
	if($query_run=mysql_query($query)){
		while($query_row=mysql_fetch_assoc($query_run)){
			echo $brand=$query_row['brand'];
			echo $item_name=$query_row['item_name'];
			echo $part_no=$query_row['part_no'];
			$quantity=$query_row['quantity'];
		
		$query1="SELECT * FROM `inventory_core` WHERE `part_no` LIKE '$part_no%' AND `item_name` LIKE '$item_name%' AND `brand` LIKE '$brand%'"; 
			if($query_run1=mysql_query($query1)){
			while($query_row1=mysql_fetch_assoc($query_run1)){
				$provision=$query_row1['provision'];
				$currentProvision=$provision+$quantity;
				echo  $query2="UPDATE `inventory_core` SET `provision`='$currentProvision' WHERE `part_no` LIKE '$part_no%' AND `item_name` LIKE '$item_name%' AND `brand` LIKE '$brand%'"; 
				mysql_query($query2);
			}
			}else{echo"Failed To provision Extracting";}
			
			 
			
	}
   //update InvoiceNO
  // updateInvoiceNo();
 //header("Location: pdf/pdfInvoice.php/");
	}
//End updating Core Inventory Provision

//redirect to pdf 
//header("Location:pdf/pdfInvoice.php?".$invoiceNo);


}

if($clicked_on=='addUser'){
$userName=htmlentities(addslashes(strtolower(trim($_POST['userName']))));
$password=md5($_POST['userPassword']);
$desig=htmlentities(addslashes(strtolower(trim($_POST['desig']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
if($userName==null || $password==null|| $desig=='#' || $mobile==null){echo"Invalid Input";}
else{
			//$password=md5($password);
			$query="SELECT * FROM `users` WHERE `userName`='$userName' AND `mobile`='$mobile'";
			 if($query_run=mysql_query($query))
						{
								if(mysql_num_rows($query_run)!=NULL){
								//existing company
								echo"Existing User";
								}
								else{					
			$query="INSERT INTO `everFirst_db`.`users`(`userName`,`password`,`desig`,`mobile`)
											VALUES ('$userName','$password','$desig','$mobile')";
											
			if($query_run=mysql_query($query)){echo "New User Added!!";}
		    else  mysql_error();
								
								}
								
						}
			}


}
if($clicked_on=='addSupplier'){

$company=htmlentities(addslashes(strtolower(trim($_POST['company']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$representative=htmlentities(addslashes(strtolower(trim($_POST['representative']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
addSupplier($company,$address,$mobile,$representative,$note);


}
if($clicked_on=='addclient'){
$company=htmlentities(addslashes(strtolower(trim($_POST['company']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$representative=htmlentities(addslashes(strtolower(trim($_POST['representative']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));

$query="SELECT * FROM `client` WHERE `company`='$company' or `mobile`='$mobile'";
 if($query_run=mysql_query($query))
			{
					if(mysql_num_rows($query_run)!=NULL){
					//existing company
					echo"Existing Client";
					}
					else{
					
						$query="INSERT INTO `everFirst_db`.`client`(`company`,`address`,`mobile`,`representative`,`note`)
								VALUES ('$company','$address','$mobile','$representative','$note')";
								
		               if($query_run=mysql_query($query)){echo "New Client Added!!";}
	                   else  mysql_error();
					
					}
					
			}

}

//function for Inventory_Entry_Add_Item
if($clicked_on=='InventoryEntryAddItem'){

//company info
 $company=htmlentities(addslashes(strtolower(trim($_POST['company']))));
 $address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
 $mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
 $representative=htmlentities(addslashes(strtolower(trim($_POST['representative']))));
 $note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
 
 addSupplier($company,$address,$mobile,$representative,$note);
 //Purchase Invoice Information 
 $workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
 $purchaseInvoice=htmlentities(addslashes(strtolower(trim($_POST['purchaseInvoice']))));
 $supplierChallan=htmlentities(addslashes(strtolower(trim($_POST['supplierChallan']))));
 //Item info
  $itemName=htmlentities(addslashes(strtolower(trim($_POST['itemName']))));
  $partNo=htmlentities(addslashes(strtolower(trim($_POST['partNo']))));
  $brand=htmlentities(addslashes(strtolower(trim($_POST['brand']))));
  $quantity=htmlentities(addslashes(strtolower(trim($_POST['quantity']))));
  $unitPrice=htmlentities(addslashes(strtolower(trim($_POST['unitPrice']))));
  $saleUnitPrice=htmlentities(addslashes(strtolower(trim($_POST['saleUnitPrice']))));


//***Inventory-surface insertion
echo $query="INSERT INTO `inventory_surface` (`date`,`company`,`work_order`,`purchase_invoice`,`challan`,`part_no`,`item_name`,`brand`,`quantity`,`purchaseUnitPrice`,`saleUnitPrice`) VALUES ('$today','$company','$workOrder','$purchaseInvoice','$supplierChallan','$partNo','$itemName','$brand','$quantity','$unitPrice','$saleUnitPrice')";
 if($query_run=mysql_query($query)){//echo "New item added at Inventory_surface";
	}
	else {//echo"Inventory_surface insertion failed!!";
	mysql_error();}
 
 

//***Inventory-core insert and update	
echo $query="SELECT * FROM `inventory_core` WHERE `item_name`='$itemName' AND `part_no`='$partNo' AND `brand`='$brand'" ;	
if($query_run=mysql_query($query))
			{
			//update rows price and quantity
			if(mysql_num_rows($query_run)!=NULL){
							//quantity update
							while($row=mysql_fetch_assoc($query_run))
								{
									$existing_quantity=$row['quantity'];
									$existing_purchaseUnitPrice=$row['purchaseUnitPrice'];
								}
								//saleUnitPrice
								$new_quantity=$existing_quantity+$quantity;
								//purchase Unit Price update
								$new_unitPrice=($existing_purchaseUnitPrice+$unitPrice)/2;
							 $query="UPDATE `inventory_core` SET `quantity`='$new_quantity',`purchaseUnitPrice`='$new_unitPrice',`saleUnitPrice`='$saleUnitPrice' WHERE `item_name`='$itemName' AND `part_no`='$partNo' AND `brand`='$brand'";
							if($query_run=mysql_query($query)){echo "Item field is updated\n";}
							else  {echo "Update Failed";mysql_error();}
							
							
						}
			else{

					$query="INSERT INTO `inventory_core`(`part_no`,`item_name`,`brand`,`quantity`,`purchaseUnitPrice`,`saleUnitPrice`) VALUES ('$partNo','$itemName','$brand','$quantity','$unitPrice','$saleUnitPrice')";
					 if(mysql_query($query)){echo "New Item is added\n";	 }
	                   else  mysql_error();
					}

}

}
if($clicked_on=='existingCustomerName'){

$name=htmlentities(addslashes(strtolower(trim($_POST['name']))));
if($name){
showClientInfo($name);
}
}

if($clicked_on=='existingSupplierCompany'){
//echo"";
$name=htmlentities(addslashes(strtolower(trim($_POST['name']))));
if($name){
if($name=='--reset--'||$name=='--select from existing--')
					{
						   echo "
					<tr ><th colspan='5' style='width:872px'></th></tr>
					<tr>	
						<th>Company</th>
						<th>Address</th>
						<th>Mobile</th>
						<th>Representative</th>
						<th>Note</th>
					</tr>
					<tr>
					  <td><input  id='company' type='text' /></td>
					  <td><input id='address' type='text' /></td>
					  <td><input id='mobile' type='text' /></td>
					  <td ><input id='representative' type='text' /></td>
					  <td><input id='note' type='text' /></td>
					</tr>"
					  ;		
					}
$query=" SELECT * FROM `supplier` WHERE `company`='$name' ";			
if($query_run=mysql_query($query)){
		if(mysql_num_rows($query_run)==NULL){
				//echo"There is no Client yet";
				}
		else{		
				
			//else{				
						
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$company=$query_row['company'];				
					$address=$query_row['address'];				
					$mobile=$query_row['mobile'];				
					$representative=$query_row['representative'];				
					$note=$query_row['note'];		
                    
					
                   echo "
				   <tr ><th colspan='5' style='width:872px'></th></tr>
			    <tr>	
					<th>Company</th>
					<th>Address</th>
					<th>Mobile</th>
					<th>Representative</th>
					<th>Note</th>
				</tr>
				<tr>
				  <td><input  id='company' type='text' value='$company' readonly/></td>
				  <td><input id='address' type='text' value='$address' readonly/></td>
				  <td><input id='mobile' type='text' value='$mobile'readonly/></td>
				  <td ><input id='representative' type='text' value='$representative' readonly/></td>
				  <td><input id='note' type='text' value='$note' readonly/></td>
				</tr>"
				  ;		
				  break;
				}
				
				//	}
					
			}
}
}
}

if($clicked_on=='addToCard'){

$invoiceNo=htmlentities(addslashes(strtolower(trim($_POST['invoiceNo']))));
$company=htmlentities(addslashes(strtolower(trim($_POST['company']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$representative=htmlentities(addslashes(strtolower(trim($_POST['representative']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));

$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));

$selectBrand=htmlentities(addslashes(strtolower(trim($_POST['selectBrand']))));
$selectItemPartNo=htmlentities(addslashes(strtolower(trim($_POST['selectItemPartNo']))));
$selectItem=htmlentities(addslashes(strtolower(trim($_POST['selectItem']))));
$unitPrice=htmlentities(addslashes(strtolower(trim($_POST['unitPrice']))));
$quantity=htmlentities(addslashes(strtolower(trim($_POST['quantity']))));

$quantity_price=$unitPrice*$quantity;
if($unitPrice!=null&& $quantity!=null&& $selectItem!="﻿--select item--"&&$selectItemPartNo!="--select part no--" && $selectBrand!="--select brand--"){
 $query="INSERT INTO `invoice_surface`(`date`,`invoice_no`,`work_order`,`company`,`mobile`,`brand`,`item_name`,`part_no`,`unit_price`,`quantity`,`quantity_price`) 
VALUES ('$today','$invoiceNo','$workOrder','$company','$mobile','$selectBrand','$selectItem','$selectItemPartNo','$unitPrice','$quantity','$quantity_price')";
if($query_run=mysql_query($query)){echo "New item added  to cart";}//{ echo $massage;}
	else  mysql_error();
}
else{echo "Make Sure All the field is Filled-up!!";}
}
if($clicked_on=='showChallanInfo'){
$invoiceNo=htmlentities(addslashes(strtolower(trim($_POST['invoiceNo']))));
$query="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoiceNo'";
if($query_run=mysql_query($query)){
		if(mysql_num_rows($query_run)==NULL){
				echo"Invalid Invoice No";
				}
		else{		
								
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$challan=$query_row['challan_no'];	
					$work_order=$query_row['work_order'];	
					$company=$query_row['company'];	
					$mobile=$query_row['mobile'];
					showChallanAndWorkOrder($challan,$work_order);				
					showClientInfo($company);
					showInvoiceProductDetails($invoiceNo);
					
				}
			}
}
}

if($clicked_on=='cancelInvoice'){
updateInvoiceNo();
}
if($clicked_on=='updateSurfaceInvoiceInfoAfterChallan'){
//print_r($_POST);
 $number=$_POST['number'];
 $invoiceNo=htmlentities(addslashes(strtolower(trim($_POST['invoiceNo']))));

	//get Last challan no of this invoiceNo
	$query="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoiceNo'";
	if($query_run0=mysql_query($query))		
		 {
			while($query_row0=mysql_fetch_assoc($query_run0))
							{	
								 $lasChallanNo=$query_row0['challan_no'];
							}
						$newChallanNo=$lasChallanNo;
		}
	//End get Last challan no of this invoiceNo
	 $sl='1';	
	 $sucess=0;
	echo  $query="SELECT brand,item_name,part_no,quantity  FROM `invoice_surface` WHERE `invoice_no`='$invoiceNo'";
	if($query_run=mysql_query($query))		
		 {
	
		while($query_row=mysql_fetch_array($query_run))
							{	
						echo $brand=$query_row['brand'];
								echo $item_name=$query_row['item_name'];
								$NewDelevaedQuantity=htmlentities(addslashes(strtolower(trim($_POST[$sl]))));							
								
								$part_no=$query_row['part_no'];
								$quantity=$query_row['quantity'];
								
								//getting the total delevared quantity 
								$delevaedQuantity=0;
								 $query2="SELECT  `delivered_quantity` FROM `challan` WHERE `invoice_no`='$invoiceNo' AND `item`='$item_name' AND `brand`='$brand' AND `part`='$part_no'";
								if($query_run2=mysql_query($query2)){
									while($query_row2=mysql_fetch_assoc($query_run2))
										{		
											$delevaedQuantity+=$query_row2['delivered_quantity'];
										}
									
								}
								
							//	$delevaedQuantity=$query_row['delevaed_quantity'];
								
							
								
								$dueQuantity=$quantity-$delevaedQuantity;												
								
								if($NewDelevaedQuantity>$dueQuantity){echo"<br>Delivered quantity is greater than due Quantity at SL:  ".$sl;}
								else{
								//Insert information In challan Table							
								echo $query1="INSERT INTO `challan` (`date`,`invoice_no`,`item`,`part`,`brand`,`delivered_quantity`,`challan_no`) VALUES ('$today','$invoiceNo','$item_name','$part_no','$brand','$NewDelevaedQuantity','$newChallanNo')";
								if(mysql_query($query1)){echo"<br/>Challan Inserted At Challan Table";}else{echo"<br/>Challan table Update Failed ";}
								
								//update provision and quantity
								updateProvisionAndQuantity($part_no,$item_name,$brand,$NewDelevaedQuantity);								
								$updateDelevaedQuantity=$delevaedQuantity+$NewDelevaedQuantity;
								 $query2="UPDATE `invoice_surface` SET `delevaed_quantity`='$updateDelevaedQuantity',`last_delivered_quantity`= '$NewDelevaedQuantity' WHERE `item_name` LIKE '$item_name%' AND `part_no` LIKE '$part_no%' AND `brand` LIKE '$brand%' AND `invoice_no`='$invoiceNo'";							
								if(mysql_query($query2)){$sucess=1;}else{echo"<br/>Failed ";}
								}
								++$sl;
							}
							if($sucess==1){echo"<br/>Successfully Challan Updated!!";}
						}
						
					//update Challan number
						updateChallan($invoiceNo);
}
if($clicked_on=='editChallan'){
//print_r($_POST);
 $number=$_POST['number'];
 $invoiceNo=htmlentities(addslashes(strtolower(trim($_POST['invoiceNo']))));
 $challanNo=htmlentities(addslashes(strtolower(trim($_POST['challanNo']))));

	 $sl='1';	
	 $sucess=0;
	 $query="SELECT  `item`, `part`, `brand`, `delivered_quantity` FROM `challan` WHERE `invoice_no`='$invoiceNo' AND `challan_no`='$challanNo';";
	if($query_run=mysql_query($query))		
		 {
	
		while($query_row=mysql_fetch_assoc($query_run))
							{	
								$NewDelevaedQuantity=htmlentities(addslashes(strtolower(trim($_POST[$sl]))));							
								$brand=$query_row['brand'];
								$item_name=$query_row['item'];
								$part_no=$query_row['part'];
								$delivered_quantity=$query_row['delivered_quantity'];
								$query1="UPDATE `challan` SET `delivered_quantity`='$NewDelevaedQuantity' WHERE `invoice_no`='$invoiceNo' AND `challan_no`='$challanNo' AND `brand`='$brand' AND `part`='$part_no' AND `item`='$item_name'";
								if(mysql_query($query1)){
								$NewDelevaedQuantity=$NewDelevaedQuantity-$delivered_quantity;
								//update provision and quantity
								updateProvisionAndQuantity($part_no,$item_name,$brand,$NewDelevaedQuantity);
								
									
								}
								++$sl;
							}
								
								
}
}

if($clicked_on=='badDraftIssue'){
$invoiceNo=htmlentities(addslashes(strtolower(trim($_POST['invoiceNo']))));	
$query="SELECT * FROM `invoice_surface` WHERE `invoice_no`='$invoiceNo'";
if($query_run=mysql_query($query))
		{
			if(mysql_num_rows($query_run)!=NULL){
		$sl=0;
		echo"<table>
		<th>SL</th><th>Brand</th><th>Part No</th><th>Item Name</th><th>Unit Price</th><th>Quantity</th><th> Delivered Quantity</th>
		";
		while($query_row=mysql_fetch_assoc($query_run))
							{	++$sl;
								$brand=$query_row['brand'];
								$item_name=$query_row['item_name'];
								$part_no=$query_row['part_no'];
								$unit_price=$query_row['unit_price'];
								$quantity=$query_row['quantity'];
								$delevaed_quantity=$query_row['delevaed_quantity'];
								echo"<tr><td>$sl</td><td>$brand</td><td>$part_no</td><td>$item_name</td><td>$unit_price</td><td>$quantity</td><td>$delevaed_quantity</td></tr>";
							}
				echo"</table>";
				$query1="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoiceNo'";
				$query_run=mysql_query($query1);
				echo"<table>
				<th>Company</th><th>Mobile</th><th>Vat</th><th>Tax</th><th>Grand Total</th><th>Due Amount</th><th>Bad Draft</th>
				";
				
				while($query_row=mysql_fetch_assoc($query_run))
							{	
								$company=$query_row['company'];
								$mobile=$query_row['mobile'];
								$discount=$query_row['discount'];
								$vat=$query_row['vat'];
								$tax=$query_row['tax'];
								$grand_total=$query_row['grand_total'];
								$paid=$query_row['paid'];
								$due=$grand_total-$paid;
								echo"<tr><td>$company</td><td>$mobile</td><td>$vat</td><td>$tax</td><td>$grand_total</td>
								<td ><input id='dueAmount' type='text' value=$due readonly/></td>
								<td><input type='text' id='badDraft' /></td></tr>";
							}
							
				echo"
				<tr><td class='noBorder'></td><td class='noBorder'></td><td class='noBorder'></td><td class='noBorder'></td><td class='noBorder'></td><td class='noBorder'></td><td class='noBorder'><input style='float:right;width:100px;' type='button' class='submit' value='Submit' onclick='badDraftAction()' /></td></tr>
				</table>"; 
				}
				else echo"<tr><td>Wrong Invoice Is Entered!!</td></tr>";
		}
}
if($clicked_on=='badDraftAction'){
 $invoiceNo=htmlentities(addslashes(strtolower(trim($_POST['invoiceNo']))));	
 $badDraftAmount=htmlentities(addslashes(strtolower(trim($_POST['badDraftAmount']))));	

 $query="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoiceNo'";
if($query_run=mysql_query($query))
		{
			while(@$query_row=mysql_fetch_assoc($query_run))
							{	
								$grand_total=$query_row['grand_total'];
								//$paid=$query_row['paid'];
								$bad_draft=$query_row['bad_draft'];
								$bad_draft=$bad_draft+$badDraftAmount;
								$updateGrand_total=$grand_total-$badDraftAmount;
								$query="UPDATE `invoice_core` SET `bad_draft`='$bad_draft',`grand_total`='$updateGrand_total' WHERE `invoice_no`='$invoiceNo'";
								if($query_run=mysql_query($query)){echo"<br/>Bad Draft Amount Successfully Added!";} else{echo"<br/>Bad Draft Adding Failed!";}
							}
		}
}
if($clicked_on=='showEditChallanInfo'){
 $invoiceNo=htmlentities(addslashes(strtolower(trim($_POST['invoiceNo']))));	
 $challanNo=htmlentities(addslashes(strtolower(trim($_POST['challanNo']))));	
 $query1="SELECT * FROM `challan` WHERE `invoice_no`='$invoiceNo' AND `challan_no`='$challanNo'"; 
 if($query_run=mysql_query($query1)){
					$sl=0;
echo"
						<div class='productDetails fix'>
						
							
							
							<table class='customerDetails fix'>
								
								<tr ><th colspan='7' style='width:872px'>Product Details</th></tr>
									<tr>
										<th>SL</th>
										<th>Item Name</th>
										<th>Part No.</th>
										<th>Brand</th>
										<th>Quantity</th>
										
										
									
																				
									</tr>
								
					
					";
						while($query_row=mysql_fetch_assoc($query_run))
							{						
								++$sl;
								
								$brand=$query_row['brand'];
								$item_name=$query_row['item'];
								$part_no=$query_row['part'];
								$quantity=$query_row['delivered_quantity'];
								
							
								echo"<tr>
										<td>$sl</td>
										<td>$item_name</td>
										<td>$part_no</td>
										<td>$brand</td>
										<td><input type='text' value='$quantity' id='$sl'/></td>											
									</tr>	";								
								
							}
							echo"
							</tbody>
							</table>

							
							<table>
						
								<tr>
								
								
								<td class='noBorder' style='width:722px;'>
								</td>
								
								<td class='noBorder'>
								<input type='button' value='Cancel' onclick='window.location.reload(true);' class='submit' /> 
								</td>
								<td class='noBorder'>
								<input type='button' value='Generate Challan' onclick=\"editChallan($sl);pdfChallan()\"  class='submit'/>
								</td>
							
							</tr>
							</table>
						
						</div>
							";
}
}
?>