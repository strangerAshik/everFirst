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
	  
	 <!--End Login Sequacity-->
		<div class="wrapper fix">
		<header class="header fix">
		</header>

		<script>	
		$( ".header" ).load( "accountManagerHeader.php" );		
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

		</div>
	</body>
</html>