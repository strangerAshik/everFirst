<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Challan</title>
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
			<script>$( ".header" ).load( "storeHeader.php" );</script>
			<section class="section fix">
							<div class=" promoteInvoiceNo ">
								<p>Enter Inovoice No:</p>
								
									<input type="text" onkeydown="if (event.keyCode == 13) showChallanInfo();" id="challanInvoiceNo"/><img  onclick="showChallanInfo();" src="../images/next.png"/>
								
							</div>
			
				<div id="challanDetailes">	</div>	
			
			<div id="updateInfo">	</div>						
			</section>
		</div>		
	</body>
</html>