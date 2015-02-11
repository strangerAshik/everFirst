<?php
//connect database
include'php_transaction_output.php';

$today = date("Y-m-d");
 $clicked_on=$_POST['clicked_on'];
if($clicked_on=='deleteClient'){
 $id=$_POST['id'];
 @$query="DELETE FROM `client` WHERE `id`='$id'";
 if($query_run=mysql_query($query)){echo"deleted!";}
 else{mysql_error();}

}
if($clicked_on=='deleteBank'){
 $id=$_POST['id'];
 @$query="DELETE FROM `bank` WHERE `id`='$id'";
 if($query_run=mysql_query($query)){echo"deleted!";}
 else{mysql_error();}

}
if($clicked_on=='deleteSupplier'){
 $id=$_POST['id'];
 @$query="DELETE FROM `supplier` WHERE `id`='$id'";
 if($query_run=mysql_query($query)){echo"deleted!";}
 else{mysql_error();}

}
if($clicked_on=='deleteUser'){
 $id=$_POST['id'];
 @$query="DELETE FROM `users` WHERE `id`='$id'";
 if($query_run=mysql_query($query)){echo"deleted!";}
 else{mysql_error();}

}
if($clicked_on=='deleteIteamFromBufferInvoice'){
 $id=$_POST['id'];
 @$query="DELETE FROM `invoice_surface` WHERE `id`='$id'";
 if($query_run=mysql_query($query)){echo"deleted!";}
 else{mysql_error();}

}
if($clicked_on=='deleteRecentAddedInventory'){
 $id=$_POST['id'];
$query="SELECT * FROM `inventory_surface` WHERE `id`='$id'" ;	
if($query_run=mysql_query($query))
			{
			//Read inventory_surface to get unique item's delete quantity 
			if(mysql_num_rows($query_run)!=NULL){
							
							while($row=mysql_fetch_assoc($query_run))
								{
									$itemName=$row['item_name'];
									$partNo=$row['part_no'];
									$brand=$row['brand'];
									$deletingQuantity=$row['quantity'];
								}
							}
			}
			//Read inventory_core to get total quantity of this unique item
$query="SELECT * FROM `inventory_core` WHERE `item_name`='$itemName' AND `part_no`='$partNo' AND `brand`='$brand'" ; 
if($query_run=mysql_query($query))
			{
			
			if(mysql_num_rows($query_run)!=NULL){
							
							while($row=mysql_fetch_assoc($query_run))
								{
								
								$existingQuantity=$row['quantity'];
								 $updateQuantity=$existingQuantity-$deletingQuantity;
								}
							//Update inventory_core unique item's quantity  
							$query="UPDATE `inventory_core` SET `quantity`='$updateQuantity' WHERE `item_name`='$itemName' AND `part_no`='$partNo' AND `brand`='$brand'";
							if($query_run=mysql_query($query)){echo "<br/>Item field is updated\n";
							}
							else  {echo "<br/>Update Failed";
							mysql_error();}
							
							
							
							}
			else{"<br/>Error: Item Is Not Exist In Inventory Core!!";}
			}
			else{echo "<br/>Failed to get existingQuantity";}
	
		//delete items from inventory_surface
		$query="DELETE FROM `inventory_surface` WHERE `id`='$id'";
		if($query_run=mysql_query($query)){echo"deleted!";}
		else{mysql_error();}						
						
}

if($clicked_on=='deleteCreditTransaction'){
$voucher=$_POST['id'];
$query="SELECT `id`, `date`, `purpose`, `invoice_no`, `company`, `work_order`, `voucher`, `pay_from`, `mobile`, `address`, `loan_transaction_id`, `store_bank`, `store_account`, `from_bank`, `from_account`, `checque_or_tt`, `amount`, `paid_amount`, `note` FROM `credit_transaction` WHERE `voucher`='$voucher'";
if($query_run=mysql_query($query))
			{			
				if(mysql_num_rows($query_run)!=NULL){							
							while($row=mysql_fetch_assoc($query_run))
								{
									$purpose=$row['purpose'];
									$invoice_no=$row['invoice_no'];
									$work_order=$row['work_order'];
									$voucher=$row['voucher'];
									$mobile=$row['mobile'];
									$loan_transaction_id=$row['loan_transaction_id'];
									$store_bank=$row['store_bank'];
									$store_account=$row['store_account'];
									//$from_bank=$row['from_bank'];
									//$from_account=$row['from_account'];
									echo $amount=$row['amount'];
									$deleteAmount=$row['paid_amount'];	
								}
									
								if($purpose=='repay advance payment'){
								//using whileLoop find out the last row of this $work_order and get the $voucher_no		
								
								//update debit transaction amount value 								
								$query="SELECT * FROM `debit_transaction` WHERE `work_order`='$work_order' ORDER BY `id` DESC LIMIT 1";
								if($query_run=mysql_query($query)){
										while($query_row=mysql_fetch_assoc($query_run)){
											 echo $paid_amount=$query_row['paid_amount'];
											 }
									echo $updatePaidAmount= abs($paid_amount-$amount);
									 $query1="UPDATE `debit_transaction` SET `paid_amount`='$updatePaidAmount' WHERE `work_order`='$work_order' ORDER BY `id` DESC LIMIT 1";
									 if($query_run=mysql_query($query1)){echo'<br/>Amount Restore';}else{echo'<br/>Amount Restore Failed';}
									}
								}
								else if($purpose=='sale transaction'){
								//using whileLoop find out the last row of this $invoice and get the $voucher_no	
								
								//update core invoice paid_amount value								
									$query="SELECT `paid` FROM `invoice_core` WHERE `invoice_no`='$invoice_no' ";
									if($query_run=mysql_query($query)){
										while($query_row=mysql_fetch_assoc($query_run)){
												 $paid=$query_row['paid'];
												 }			
										 }									
									 $updatePaid=$paid-$amount;
									 $query="UPDATE `invoice_core` SET `paid`='$updatePaid' WHERE `invoice_no`='$invoice_no'";
									 mysql_query($query);
								}
								else if($purpose=='bank loan'){
								//using whileLoop find out the last row of this $store_bank and $store_account and get the $voucher_no	
								
								//total loan update from bank table  
								$query="SELECT * FROM `bank` WHERE `bank_name`='$store_bank' AND `account_no`='$store_account'";
								 if($query_run=mysql_query($query)){
									while(@$query_row=mysql_fetch_assoc($query_run)){			
											$loan=$query_row['loan'];
											$updateLoan=$loan-$amount;
											
											$query="UPDATE `bank` SET `loan`='$updateLoan' WHERE `bank_name`='$store_bank' AND `account_no`='$store_account'";
											if($query_run=mysql_query($query)){echo"<br/>Bank Loan Update!!";}else{echo"Bank Loan Update Failed!!";}
											}
								 }else{echo"Bank Account Is Not Found!!";}
								}
								else if($purpose=='new invest'){
								//
								}
								else if($purpose=='credit others'){
								//
								}
								
							//bank update
							if($store_bank!='')
							updateBankBalanceDebit($store_bank,$store_account,$amount);	
							//cash update
							else
							updateHandCashDebit($today,$amount);	
							//row deletion 									
						    $query="DELETE FROM `credit_transaction` WHERE `voucher`='$voucher'";
							if($query_run=mysql_query($query)){echo"deleted!";}
							else{echo '<tr><td>Row Deletion Failed</td></tr>';mysql_error();}
			}
 }
}

if($clicked_on=='deleteDebitTransaction'){
$voucher=$_POST['id'];
$query="SELECT * FROM `debit_transaction` WHERE `voucher`='$voucher'";
if($query_run=mysql_query($query))
			{
			
			if(mysql_num_rows($query_run)!=NULL){
							
							while($row=mysql_fetch_assoc($query_run))
								{
									$last_paid=$row['last_paid'];
									$from_bank=$row['from_bank'];
									$from_account=$row['from_account'];
									$store_bank=$row['store_bank'];
									$store_account=$row['store_account'];
									$purpose=$row['purpose'];
									$loan_transaction_id=$row['loan_transaction_id'];
								}
								//echo $today;
								if($purpose=='loan repay'){
								//Loan due amount update at credit transaction
								//bank loan update
								bankLoanPayDelete($store_bank,$store_account,$last_paid,$loan_transaction_id);								
								}
								
								if($from_bank==''){
								//update cash								
								updateHandCash($today,$last_paid);								
								}
								else{
								//from bank retrieve
								updateBankBalance($from_bank,$from_account,$last_paid);
								
								
								if($store_bank!=''&&$purpose!='loan repay'){
									//store bank withdraw 
									updateBankBalanceDebit($store_bank,$store_account,$last_paid);
									}
								
								}
							//delete row
						    $query="DELETE FROM `debit_transaction` WHERE `voucher`='$voucher'";
							if($query_run=mysql_query($query)){echo"deleted!";}
							else{echo '<tr><td>Row Deletion Failed</td></tr>';mysql_error();}
								
							}
			}
			else{
			echo"";
			}


}

if($clicked_on=='deleteInvoice'){
$invoice=$_POST['id'];
$query="SELECT `id`, `date`, `invoice_no`, `work_order`, `company`, `mobile`, `brand`, `item_name`, `part_no`, `unit_price`, `quantity`, `delevaed_quantity`, `last_delivered_quantity`, `quantity_price` FROM `invoice_surface` WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query))
			{
			
			if(mysql_num_rows($query_run)!=NULL){
							
							while($row=mysql_fetch_assoc($query_run))
								{
									$brand=$row['brand'];
									$item_name=$row['item_name'];
									$part_no=$row['part_no'];
									$quantity=$row['quantity'];
									
									//read Inventory core to find the provision quantity 
									$query1="SELECT `id`, `part_no`, `item_name`, `brand`, `quantity`, `provision` FROM `inventory_core` WHERE `part_no`='$part_no' AND `item_name`='$item_name' AND `brand`='$brand'";
									if($query_run1=mysql_query($query1))
											{
			
											if(mysql_num_rows($query_run1)!=NULL){
															
															while($row1=mysql_fetch_assoc($query_run1))
																{
																	
																	$provision=$row1['provision'];
																}
																//update provision 
																$updateProvision=$provision-$quantity;
																$query2="UPDATE `inventory_core` SET `provision`='$updateProvision' WHERE `part_no`='$part_no' AND `item_name`='$item_name' AND `brand`='$brand'";
																if(mysql_query($query2)){echo"<br/>Provision Quantity Updated!!";}
																else{echo"<br/>Error: Provision Quantity Not Updated!!";}
															}
											  else{echo"<br/>Error: Brand:$brand Part No:$part_no  Item Name: $item_name Is Not Exist In Inventory Core!!";}
											}
									//delete Surface Row
									$query3="DELETE FROM `invoice_surface`  WHERE `part_no`='$part_no' AND `item_name`='$item_name' AND `brand`='$brand' AND `invoice_no`='$invoice'";
									if(mysql_query($query3)){echo"<br/>Invoice Surface Row Deleted!!";}
									else{echo"<br/>Error:Invoice Surface Row Not Deleted!!";}	
								}
								// Delete Invoice From core Invoice 
								$query4="DELETE FROM `invoice_core` WHERE `invoice_no`='$invoice'";
								if(mysql_query($query4)){echo"<br/>Invoice Deleted From Core Invoice!!";}
									else{echo"<br/>Error:Invoice Is Not Deleted From Core Invoice!!";}	
								}
			else{echo"Error: No Invoice No: $invoice is Found On Invoice Surface!!";}
}
}
 
 ?>