<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Reconsideration</title>
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
	 <?php include'../php/php_output.php';?>
	 <!--End Login Sequacity-->
		<div class="wrapper fix">
		<header class="header fix">
		</header>

		<script>	
		$( ".header" ).load( "managingDirectorHeader.php" );		
		</script>

		<section class="section">
			
			<table style="margin:20px auto 0px auto;">
			<tr><th colspan='2' >Add Bad Draft To An Invoice Amount</th></tr>
					<tr>
						<td><input type='text' id='invoiceNo' placeholder='Invoice No' /></td><td><input onclick='badDraftIssue();' type='button' value='Submit'/></td>
					</tr>
			</table>	
			<div id='invoiceDetail'></div>	
			<div id='badDraftmassage'></div>
		</section>
					
		<section class="section">
			
			<table style="margin:20px auto 0px auto;">
			<tr><th colspan='2' >Delete Debit Voucher</th></tr>
					<tr>
						<td><input type='text' id='saveIdForDebitDelete' placeholder='Debit Voucher No'/></td><td><input onclick='deleteDebitTransaction();' type='button' value=' Delete'/></td>
					</tr>
			</table>	
					
			<div id="debitDeleteMassage"></div>		
		</section>
		<section class="section">
			
			<table style="margin:20px auto 0px auto;">
				<tr><th colspan='2' >Delete Credit Voucher</th></tr>
					<tr>
						<td><input type='text' id='saveIdCreditForDelete' placeholder='Debit Voucher No'/></td><td><input onclick='deleteCreditTransaction();' type='button' value='Delete'/></td>
					</tr>
			</table>	
			<div id="CreditDeleteMassage"></div>
		</section>
		<section class="section">
			
			<table style="margin:20px auto 0px auto;">
				<tr><th colspan='2' >Delete Invoice</th></tr>
					<tr>
						<td><input type='text' id='saveIdForDelete' placeholder='Invoice No'/></td><td><input onclick='deleteInvoice();' type='button' value='Delete'/></td>
					</tr>
			</table>	
			<div id="deleteMassage"></div>
		</section>
		<section class="section">
			<form action="invoiceEdit.php" method="POST">
			<table style="margin:20px auto 0px auto;">
				<tr><th colspan='2' >Edit Invoice</th></tr>
					<tr>
						<td><input type='text' name='editInvoice' placeholder='Invoice No'/></td>
						<td><input  type='Submit' value='Edit'/></td>
					</tr>
			</table>	
			</form>
			<div id="editMassage"></div>
		</section>
		<section class='section'>
		<div class="productDetails fix">		
				
				<table class="">
					<tr ><th colspan='5' style='width:872px'>Update Sale/purchase Price</th></tr>
						<tr>
							<th>Brand</th> 
							<th>Item Name</th>	
							<th>Part No.</th>													
							<th>Sale Unit Price</th>
							<th>Purchase Unit Price</th>
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
						<select id="selectItemPartNo" onchange="getUnitPrice();getPurchasePrice()" >
							<option>--Select Item First--</option>
								<?php 
								//@getPartNo();
								?>
							</select>
						</td>									
						
						
						<td><input id="unitPrice"  type="text"/></td>
						<td><input id="purchaseUnitPrice"  type="text"/></td>
						</tr>
						<tr>
							<td class='noBorder' colspan='4'></td><td><input type="button" class="submit" value="Update" onclick="updatePrice();"/></td>
						</tr>
						
					</table>
				
				<div id="addToCartMassage"></div>
				
				
			</div>
			</section>
		</div>
	</body>
</html>