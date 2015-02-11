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

			<section class='section' style='margin-top:50px;'>
			<table>
			<tr><th colspan='3'>Edit Challan </th></tr>
			<tr>
			<td><input type='text' id='challanInvoiceNo' placeholder='Invoice No'/></td>
			<td><input type='text' id='challanNo' placeholder='Challan No'/></td>			
			<td><input type='button' value='Submit' onclick="showEditChallanInfo()"/></td>
			</tr>
			</table>
			<div id='editChallanInfo'></div>
			<div id='massage'></div>
			</section
		</div>
	</body>
</html>