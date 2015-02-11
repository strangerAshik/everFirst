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
			<?php include'../php/php_output.php';?>
			<input style="display:none;" id="invoiceNo" value="<?php echo @$invoice=getInvoiceNo();?>" />
			<table style="float:right;margin-top:20px">
				<tr><th>Invoice No</th><td style="color:#000;"><?php echo @$invoiceNo=getInvoiceNo();?></td></tr>
				<tr><th>Date</th><td><?php echo $today = date("j F, Y");?></td></tr>
				
			</table>
			</div>
			<div class="customerDetails fix">
				<h2></h2>
			
				<table class="Customerdetails">
				<tr ><th colspan='2' style='width:872px'>Customer details</th></tr>
				<tr>
				<th>Select From Existing Client</th>
				<td>
					
						<select id="existingCustomerName" onchange="getExistingCustomerData();">
						<option>--Select From Existing--</option>
							<?php existingCustomer();?>
						</select>
				
				</td>
				</tr>
				</table>
				<div id="myDiv">
				<table class="Customerdetails tableMargin">
				<tr ><th colspan='5' style='width:872px'></th></tr>
				<tr>					
					<th>Company</th>
					<th>Address</th>
					<th>Mobile</th>
					<th>Representative</th>
					<th>Note</th>
				</tr>
				<tr >
					
					<td><input id="company" type="text" /></td>
					<td><input id="address" type="text" /></td>
					<td><input id="mobile" type="text"/></td>
					<td ><input id="representative" type="text"/></td>
					<td><input id="note" type="text"/></td>
				</tr>
				</table>
				</div>
			</div>
			<div class="workOrder fix">
				<table>
					<tr>
						<th style='width:563px'>
						Customer Work Order Number
						</th>
						<td>
						<input id="workOrder" type="text" />
						</td>
					</tr>
					
				</table>
			</div>
			
			<div class="productDetails fix">

			
				<form >
				<table class="">
					<tr ><th colspan='5' style='width:872px'>Products Details</th></tr>
						<tr>
							<th>Brand</th> 
							<th>Item Name</th>	
							<th>Part No.</th>													
							<th>Unit Price</th>
							<th>Quantity</th>
						</tr>
					
						<tr>
						<td>
							<select id="selectBrand" onchange='getItemList()'>
							<option>--Select Brand--</option>
									  <?php 
									  @getBrand();
									  ?>
							</select>	
						</td>
						
						
						<td>
					
							<select id="selectItem" onchange="getPartNo()">
							<option>--Select Brand First--</option>
								<?php 
								//@itemName();
								?>
							</select>
						</td>
						
						<td >
						<select id="selectItemPartNo" onchange="getUnitPrice()" >
							<option>--Select Item First--</option>
								<?php 
								//@getPartNo();
								?>
							</select>
						</td>									
						
						
						<td><input id="unitPrice"  type="text"/></td>
						<td><input id="quantity"  type="text"/></td>
						</tr>
						<tr>
							<td class='noBorder' colspan='4'></td><td>
							<input type="reset" class="submit" onclick="addToCart();" value='Add To Invoice'/></td>
						</tr>
						
					</table>
					</form>
				
				<div id="addToCartMassage"></div>
				
				
			</div>
			<!--Edit Conformation PopUp-->
			 <div id="Edit_Conformation" style="right:32em; border-color:#18C95B!important;" class="white_content ">
			 <input style="display:none;" type="text"  id="saveIdForEdit" />	
			 
			
			 <a href = "javascript:void(0)" onclick = "poUpHide('Edit_Conformation')">Close</a>
			 <table >
					<tr>
						
						
						<th>Quantity</th>
						<th>Unit Price</th>
						
					</tr>
					<tr>
						<td><input  id="editItem_quantity"  type="text" /></td>
						<td><input id="editItem_price"  type="text" id=""/></td>
						
					</tr>
				</table>
				 <input style="float:left;margin-top:5px;cursor:pointer;"type="button" href = "javascript:void(0)" onclick = "poUpHide('Edit_Conformation')" value="cancle"/>
				 <input style="float:right;margin-top:5px;cursor:pointer;"type="button" id="addedItemSave" onclick="YesSave('invoice')" value="Save"/>
				 <div id="editMassage"></div>
				</div>
			 <!--End of Edit Conformation PopUp-->
			<!--Delete Conformation PopUp-->
			
			 <div id="DeleteConformation" style="right:32em; border-color:#E04343!important;" class="white_content ">
				<input style="display:none"type="text" id="saveIdForDelete"/>	
				<a href = "javascript:void(0)" onclick = "poUpHide('DeleteConformation')">Close</a>
				<p>Do You Want To Delete This Item?</p><br/>
				
				<a href = "javascript:void(0)" class="deleteYes" onclick = "deleteIteamFromBufferInvoice()">Yes</a>
				<a href = "javascript:void(0)" class="deleteNo" onclick = "poUpHide('DeleteConformation')">NO</a>
				 <div id="deleteMassage"></div>
			  </div>
			  
            <!--End Delete Conformation PopUp -->
			<div class="addedToCard fix" >
				
				<table class="adderToCartTable tableMargin fix" id="reload">	
					<tr ><th colspan='7' >Added To Invoice</th></tr>			
					<tr>
						<th>SI</th><th>Item Name</th><th>Part No.</th><th>Brand</th><th>Unit Price</th><th>Quantity</th><th >Delete</th>
					</tr>
					
					<?php @addedToCart($invoice);?>
				
					
					<tr><td colspan="6" style="text-align:right;">Subtotal:</td><td colspan="3"> <?php echo @getSubTotal($invoice);?></td></tr>
					
					
				</table>
				<table>
				<tr><td style="width:638px;text-align:right;">Discount Amount(TK):</td><td style="width:231px"><input  type="text" id="discount" onkeyup="totalAmount();moneyInWord()" /></td></tr>
				</table>
				<table class="totalAmount  fix" id="reloadTotal">
				</table>
				<table>
				<tr><td style="width:638px;text-align:right;font-size:18px;font-weight:bold;">Total Amount(TK):</td><td style="width:231px;font-size:18px;font-weight:bold;" id="totalAmount">Set Discount</td></tr>
				</table>
				<table>
				<tr><td  style="text-align:right;width:400px;">Vat(%):</td><td style="width:231px"><input type="text" id="setVat" onkeyup="grandTotal();setVat();"/></td><td style="width:231px" id="getVat" ><input type="text" onkeyup="grandTotal();" /></td></tr>
				<tr><td  style="text-align:right;width:227px;">Tax(%):</td><td style="width:231px"> <input type="text" id="setTax" onkeyup="grandTotal();setTax();"/></td><td style="width:231px"id="getTax"><input type="text" onkeyup="grandTotal();" id="tax"/></td></tr>
				</table>
				<table class="tableMargin fix">
					
				</table >
				<table class=" tableMargin fix" >
				
					<tr><td  style="width:637px;text-align:right;font-size:18px;font-weight:bold;" >Grand Total:</td><td style="width:231px;font-size:18px;font-weight:bold;" id="grandTotal">To See Set Vat/Tax</td></tr>
				</table>
				
				<table class="tableMargin fix">
					<tr><td style="width:637px;text-align:right;font-size:18px;font-weight:bold;display:none;" >Paid Amount(TK):</td><td style="width:231px;font-size:18px;font-weight:bold;display:none;"><input value='0' id="paidAmount"type="text"/></td></tr>
										
				</table class="tableMargin fix">

				<div class="generate" style="clear:both;margin-top:10px;" >
					<table>
					<tr>
						<td style="width:550px" class="noBorder">
						</td>
						
						
						<td class="noBorder">
						<button type="button" onclick='cancelInvoice()' class="submit">Cancel</button>
						</td>
						<td class="noBorder">
						</td>
						<td class="noBorder">
						
<button type="submit" onclick="ajaxInputAddClient();storeInvoiceInfo();pdfInvoice();" id='pdfInvoice' class="submit">Generate Bill</button>
						</td>
						
					</tr>
					</table>
					
					<div id="storeInvoiceInfoMassage"></div>

				</div>		
				
			</div>				
		</section>
		</div>

		
	</body>
</html>