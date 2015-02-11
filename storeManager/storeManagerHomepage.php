<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Home </title>
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
		<header class="header fix"></header>

		<script>	
		$( ".header" ).load( "storeHeader.php" );		
		</script>

		<section class="section fix">					
						<div id="" >
						<div class="customerDetails fix">
						
							
							<table class="">
								<tr ><th colspan='3' style='width:700px'>Waiting Challan</th></tr>
									<tr>
										
										<th>Invoice</th>
										<th>Company</th>										
										<th>Mobile</th>
										
																										
									</tr>
								
									<?php include'../php/php_output.php';waitingChallan();?>								
								
																	
								
							</table>
							
						
						</div>
						</div>							
					<!--
						<div id="challanDetailes" >
						<div class="customerDetails fix">
						<h2>Partial Challan</h2><hr>
							<table class="challanTable">
								<tr>
									<th>Invoice</th><th>Challan</th><th>Work Order No.</th><th>Buyer Name</th><th>Address</th><th>Contact Number</th>
								</tr>
								<tr><td>4324324</td><td>078</td><td>12323435</td><td>Mr.x </td><td>Sadar,ac lane</td><td>014354545</td></tr>
								<tr><td>4324325</td><td>079</td><td>12323437</td><td>Mr.y </td><td>ghat,dc lane</td><td>01464654545</td></tr>
								<tr><td>4324326</td><td>080</td><td>12323439</td><td>Mr.z </td><td>Sadarghat,ac lane</td><td>0164654545</td></tr>
								<tr><td>4324327</td><td>081</td><td>12323440</td><td>Mr.Ad </td><td>Sadarghat,ac lane</td><td>018964545</td></tr>								
							</table>
						</div>
						</div> -->

						<div class="">
						
							<form action="" method="">
							<table class="">
								<thead>
								
								<tr ><th colspan='7' style='width:700px'>Stored Product With Provision </th></tr>
									<tr>
											<th>SL NO.</th>
											<th>Brand</th>
											<th>Part No.</th>											
											<th>Item Name</th>		
											<th>stock</th>
											<th>provision</th>
											<th>Selling Unit Price</th>
																		
									</tr>
								</thead>
								<tbody>
									<?php inventoryStatusWithProvision();?>									
								</tbody>
							</table>
							</form>
						</div>
		</section>
</body>
</html>