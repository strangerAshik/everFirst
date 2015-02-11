<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Inventory</title>
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
	<?php include'../php/php_output.php';?>
		<div class="wrapper fix">		
		<header class="header fix">	</header>
		
		<script>	
		$( ".header" ).load( "storeHeader.php" );	
		//activeMenu('Invetory');		
		</script>
<div class="customerDetails fix">
				
				
			
				<table class="Customerdetails">
				<tr ><th colspan='5' style='width:872px'>Supplier Information</th></tr>
				<tr>
				<th>Select From Existing Supplier</th>
				<td>
					
						<select id="existingCompanyName" onchange="getExistingSupplierData();">
							<option>--Select From Existing--</option>							
							<?php existingSupplierList();?>
							<option>--Reset--</option>
						</select>
				
				</td>
				</tr>
				</table>
				<table class="Customerdetails tableMargin" id="myDiv">
				<tr ><th colspan='5' style='width:872px'></th></tr>
				<tr>	
					<th>Company</th>
					<th>Address</th>
					<th>Mobile</th>
					<th>Representative</th>
					<th>Note</th>
				</tr>
				<tr >
					
					<td><input id="company"  type="text" /></td>
					<td><input id="address" type="text" /></td>
					<td><input id="mobile"  type="text"/></td>
					<td ><input id="representative"  type="text"/></td>
					<td><input id="note"  type="text"/></td>
				</tr>

				</table>
			</div>
			<div class="Customerdetails">
							
							<form action="" method="">
							<table class="challanTable">
								<tr ><th colspan='5' style='width:872px'>Purchase Invoice Information</th></tr>
									<tr>
										
										<th>Work Order</th>
										<th>Purchase Invoice</th>
										<th>Supplier Challan</th>										
										
																			
									</tr>
								
									<tr class='invoiceInfotdWidth'>
										
										<td> <input    id="workOrder" type="text"/></td>
										<td> <input   id="purchaseInvoice" type="text"/></td>
										<td> <input   id="supplierChallan"type="text"/></td>																						
										
									
									</tr>									
								
																
																
								
							</table>
							</form>
						</div>
		<div class="addNewItem fix">
				<form style="padding-top: 20px;" action="" method="" >
				   
					
				<table >
				<tr ><th colspan='6' style='width:30px!important'>Add New Item</th></tr>
					<tr class="widthFixing">
						<th>Item Name</th>
						<th>Part No.</th>
						<th>Brand</th>
						<th>Quantity</th>
						<th>Purchase Unit Price</th>
						<th>Sale Unit Price</th>
						
					</tr>
				
					<tr class='addNewItemtdInputWidth'>
																		<!--autoComplete(InputBoxCurrentValue,'DisplayBoxId','InputBoxId','DbFieldName','DbTableName' ) -->
						<td class="noBorder"><input type="text" onkeyup="autoComplete($('#item_name').val(),'autoCompItemName','item_name','item_name',' inventory_core' );" id="item_name"/></td>
						<td class="noBorder"><input type="text" onkeyup="autoComplete($('#item_part_no').val(),'autoCompItemPartNo','item_part_no','part_no',' inventory_core');" id="item_part_no"/></td>
						<td class="noBorder"><input type="text" onkeyup="autoComplete($('#item_brand').val(),'autoCompItemBrand','item_brand','brand',' inventory_core');"id="item_brand"/></td>
						<td class="noBorder"><input type="text" id="item_quantity"/></td>
						<td class="noBorder"><input type="text" id="unitPrice"/></td>
						<td class="noBorder"><input type="text" id="saleUnitPrice"/></td>
						
					</tr>
					<tr>
						<td class="autoCompTd"><div class="autoCompBoxPositioning"id="autoCompItemName" ></div></td>
						<td  class="autoCompTd" ><div class="autoCompBoxPositioning" id="autoCompItemPartNo" ></div></td>
						<td  class="autoCompTd" ><div class="autoCompBoxPositioning" id="autoCompItemBrand" ></div></td>
						<td  class="autoCompTd" ><div class="" id="" ></div></td>
						<td  class="autoCompTd" ><div class="" id="" ></div></td>
						<td class="noBorder">
						<input style='float:right;' type="button" class="submit" id="clearBox" onclick="Ajax_Input_InventoryEntryAddItem();";  value="Add To Inventory"/></td>
					</tr>
					
				</table>
			
			 <div id="myDiv"></div>
			
		
			<!--Delete Conformation PopUp-->
			
			 <div id="DeleteConformation" style="right:32em; border-color:#E04343!important;" class="white_content ">
				<input type="text"style="display:none;" id="saveIdForDelete"/>	
				<a href = "javascript:void(0)" onclick = "poUpHide('DeleteConformation')">Close</a>
				<p>Do You Want To Delete This Item?</p><br/>
				
				<a href = "javascript:void(0)" class="deleteYes" onclick = "deleteRecentAddedInventory()">Yes</a>
				<a href = "javascript:void(0)" class="deleteNo" onclick = "poUpHide('DeleteConformation')">NO</a>
				 <div id="deleteMassage"></div>
			  </div>
			  
			 <!--End Delete Conformation PopUp -->
			 <!--Edit Conformation PopUp--->
			 <div id="Edit_Conformation" style="right:32em; border-color:#18C95B!important;" class="white_content ">
			 <input style="display:none;" type="text"  id="saveIdForEdit" />	
			 
			
			 <a href = "javascript:void(0)" onclick = "poUpHide('Edit_Conformation')">Close</a>
			 <table >
					<tr>
						
						
						<th>Quantity</th>
						
						
					</tr>
					<tr>
						<td><input  id="editItem_quantity" size="12" type="text" /></td>
						<td><input id="editItem_price"size="12" type="text" id=""/></td>
						
					</tr>
				</table>
				 <input style="float:left;margin-top:5px;cursor:pointer;"type="button" href = "javascript:void(0)" onclick = "poUpHide('Edit_Conformation')" value="cancle"/>
				 <input style="float:right;margin-top:5px;cursor:pointer;"type="button" id="addedItemSave" onclick="YesSave('proformaInvoice')" value="Save"/>
				 <div id="editMassage"></div>
				</div>
				<div id="inventory"></div>
			 <!--End of Edit Conformation PopUp--->
			<div id='massage'></div>
			<h2>Recent Added Item</h2>
			<div class=''>
			
			<table id='' >

					<tr>
						<th>SL</th>
						<th>Date</th>
						<th>Item Name</th>
						<th>Part No.</th>
						<th>Brand</th>
						<th>Quantity</th>
						<th>Delete</th>
					</tr>
					
					<?php recentAddedInventory();?>
					
		 </table>
			
		</div>
		</section>
		</div>
	
	</body>
</html>