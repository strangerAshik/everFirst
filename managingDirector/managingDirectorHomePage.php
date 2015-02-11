<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Managing Director Home Page:</title>
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


		<section>
		<?php include'../php/php_output.php';?>
			<div class='currentAsset'>
			<h2>Current Asset</h2>
			
				<table>
					<tr>
						
						<th style="width:521px">Current Cash in Hand</th><th style="width:173px"><?php echo currentCashInHand(); ?></th>
					</tr>
				</table>
				
			<div class="currentBankBalance fix"  >
			
				<table id="currentBankBalance" >
					<tr>
						<th colspan='4' style='width:700px'>Current Bank Balance</th>
					</tr>
					<tr>
						<th  >Bank Name</th><th>Account No</th><th>Balance</th><th>Note</th>
					</tr>
					
					<?php 
						
						addedBankBalance();
					?>
				</table>
			</div>
			<div class='storedProductWithProvision'>
			<table >
					<tr>
						<th colspan='8' style='width:700px'>Stored Product With Provision</th>
					</tr>
								
									<tr>
										<th>SL NO.</th>
											<th>Brand</th>
											<th>Part No.</th>											
											<th>Item Name</th>		
											<th>stock</th>
											<th>provision</th>
											<th>Selling Price</th>
											<th>Purchase Price</th>
																		
									</tr>
								
									<?php inventoryStatusWithProvisionAndPrice();?>		
																		
								
							</table>
			
			</div>
			<div class='storedProductWithProvision'>
			<table >
					<tr>
						<th colspan='8' style='width:700px'>Owing To Other</th>
					</tr>
							
									<tr>
										<th>SL NO.</th>
											<th>Date</th>
											<th>Invoice</th>											
											<th>Company</th>		
											<th>Mobile</th>
											<th>Grand Total</th>
											<th>Due Amount</th>
																		
									</tr>
								
									<?php owingMoney();?>		
																		
								
							</table>
			
			</div>
			<div class="">
							
							<table class="">
								<tr ><th colspan='9' style='width:700px'>Advance Info.</th></tr>
									<tr>
										
										<th>SL</th>
										<th>Date</th>
										<th>Voucher Noo.</th>
										<th>Work Order</th>
										<th>Name</th>										
										<th>Mobile</th>										
										<th>T. Amount</th>										
										<th>Due</th>										
										<th>Note</th>										
																												
									</tr>
								
									<?php advanceInfo();?>	
								
																	
								
							</table>
							
						</div>
					
				<!--	<table>
					<tr>
						<td>Current Stored Product Value</td><th></th>
					</tr>
					<tr>
						<th>Non-arrival LC Value</th><th></th>
					</tr>
					
					</table>-->
						<h2>Current Liability</h2>
					<table>
					<tr>
						<th colspan='6' style='width:700px'>Loan Against Bank Account</th>
					</tr>
					<tr>
						<th>Sl</th><th>Date</th><th>Bank Name</th><th>Account No.</th><th>Loan Transaction Id</th><th>Current Loan Amount</th>
					</tr>
						<?php currentBankLoanStatus();?>
					
					</table>
					<table>
					<tr>
						<th colspan='9'>Unpaid Issues</th>
					</tr>
					<tr>
					
						<th>Sl</th><th>Purpose</th><th>Company</th><th>Mobile</th><th>Address</th><th>Total Amount</th><th>Due Amount</th><th>Work Order </th><th>Invoice </th>
					</tr>
						<?php currentUnpaidIssues();?>
					
					</table>
			


			</div>
		</section>
	</body>
</html>