<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Supplier</title>
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
		$( ".header" ).load( "managingDirectorHeader.php" );		
		</script>

		<section class="section">
			<div class="AddPeople ">
				<h2>Add Supplier</h2>
				<table class="Customerdetails tableMargin" id="myDiv">
				<tr>					
					
					<th>Company</th>
					<th>Address</th>
					<th>Mobile</th>
					<th>Representative</th>
					<th>Note</th>
				</tr>
				<tr>
					
					<td><input id="company" type="text" /></td>
					<td><input id="address" type="text" /></td>
					<td><input id="mobile" type="text"/></td>
					<td ><input id="representative" type="text"/></td>
					<td><input id="note" type="text"/></td>
				</tr>
				</table>
				<table>
				<tr>
				<td class="noBorder" style="width:796px">
				</td >
				
				<td class="noBorder">
				<input class="submit" type="button" onclick="ajaxInputAddSupplier();" value="Add Supplier">
				</td>
				</tr>
				

				</table>
				
				<div id="addNewSupplierMassage"></div>
			</div>
			
			<div class="all_people">
			
			<h2>All Suppliers</h2>
			<!--Delete Conformation PopUp-->			
			 <div id="DeleteConformation" style="right:32em; border-color:#E04343!important;" class="white_content ">
				<input style='display:none' type="text" id="saveIdForDelete"/>	
				<a href = "javascript:void(0)" onclick = "poUpHide('DeleteConformation')">Close</a>
				<p>Do You Want To Delete This Item?</p><br/>
				
				<a href = "javascript:void(0)" class="deleteYes" onclick = "deleteSupplier()">Yes</a>
				<a href = "javascript:void(0)" class="deleteNo" onclick = "poUpHide('DeleteConformation')">NO</a>
				 <div id="deleteMassage"></div>
			  </div>
			  
 <!--End Delete Conformation PopUp -->
			<div class="addedSupplier fix" >
				<table id="reload">
					<tr>
						<th>Company</th><th>Address</th><th>Mobile</th><th>Representative</th><th>Note</th><th>Delete</th>
					</tr>
					
					<?php 
					include'../php/php_output.php';
					AddedSupplier();
					?>
					
				</table>
			</div>
			</div>
			
			
		</section>
		</div>
	</body>
</html>