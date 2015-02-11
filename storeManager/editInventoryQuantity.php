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
		$( ".header" ).load( "storeHeader.php" );		
		</script>

					<section class='section'>
		<div class="productDetails fix">		
				
				<table class="">
					<tr ><th colspan='5' style='width:872px'>Update Sale/purchase Price</th></tr>
						<tr>
							<th>Brand</th> 
							<th>Item Name</th>	
							<th>Part No.</th>													
							<th>Quantity</th>
							<th>Provision</th>
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
						<select id="selectItemPartNo" onchange="getQuantity();getProvision()" >
							<option>--Select Item First--</option>
								<?php 
								//@getPartNo();
								?>
							</select>
						</td>									
						
						
						<td><input id="quantity"  type="text"/></td>
						<td><input id="provision"  type="text"/></td>
						
						</tr>
						<tr>
							<td class='noBorder' colspan='4'></td><td><input type="button" class="submit" value="Update Quantity" onclick="updateStock()"/></td>
						</tr>
						
					</table>
				
				<div id="addToCartMassage"></div>
				
				
			</div>
			</section
		</div>
	</body>
</html>