<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Accounts Manager Homepage :</title>
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

				<section>
				<?php include'../php/php_output.php';?>
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
					<!--<div class="">
							
							<form action="" method="">
							<table class="">
									<tr ><th colspan='6' style='width:700px'>Stored Product With Provision </th></tr>
									<tr>
											<th>SL NO.</th>
											<th>Brand</th>
											<th>Part No.</th>											
											<th>Item Name</th>		
											<th>stock</th>
											<th>provision</th>
																		
									</tr>
								
								
									<?php 
									//inventoryStatusWithProvision();
									?>									
								
							</table>
							</form>
						</div>-->
					
						<div class="">
			<!--Delete Conformation PopUp-->			
			 <div id="DeleteConformation" style="right:32em; border-color:#E04343!important;" class="white_content ">
				<input  type="text" id="saveIdForDelete"/>	
				<a href = "javascript:void(0)" onclick = "poUpHide('DeleteConformation')">Close</a>
				<p>Do You Want To Delete This Invoice?</p><br/>
				
				<a href = "javascript:void(0)" class="deleteYes" onclick = "deleteInvoice()">Yes</a>
				<a href = "javascript:void(0)" class="deleteNo" onclick = "poUpHide('DeleteConformation')">NO</a>
				 <div id="deleteMassage"></div>
			  </div>
			  
 <!--End Delete Conformation PopUp -->
							<table class="">
								<tr ><th colspan='6' style='width:700px'>Recent Invoice</th></tr>
									<tr>
										
										<th>SL</th>
										<th>Invoice</th>
										<th>Company</th>										
										<th>Mobile</th>										
										<th>Grand Total</th>	
										<!--<th>Delete</th>		-->								
																												
									</tr>
								
									<?php recentInvoice();?>	
								
																	
								
							</table>
							
						</div>
						<div class="">
							
							<table class="">
								<tr ><th colspan='9' style='width:700px'>Advance Info.</th></tr>
									<tr>
										
										<th>SL</th>
										<th>Date</th>
										<th>Voucher</th>
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
						<div class="">
			<!--Delete Conformation PopUp-->			
			 <div id="DeleteConformationDebitTransaction" style="right:32em; border-color:#E04343!important;" class="white_content ">
				<input style='' type="text" id="saveIdForDebitDelete"/>	
				<a href = "javascript:void(0)" onclick = "poUpHide('DeleteConformationDebitTransaction')">Close</a>
				<p>Do You Want To Delete This Item?</p><br/>
				
				<a href = "javascript:void(0)" class="deleteYes" onclick = "deleteDebitTransaction()">Yes</a>
				<a href = "javascript:void(0)" class="deleteNo" onclick = "poUpHide('DeleteConformationDebitTransaction')">NO</a>
				 <div id="debitDeleteMassage"></div>
			  </div>
			  
			<!--End Delete Conformation PopUp -->
							<table class="">
								<tr ><th colspan='8' style='width:700px'>Today's Debit Transaction</th></tr>
									<tr>
										
										<th>SL</th>
										<th>Work Order</th>
										<th>Voucher No.</th>
										<th>Purpose</th>
										<th>Pay To</th>
										<th>Mobile</th>																	
										<th>Amount</th>																	
										<th>Note</th>										
											<!--<th>Delete</th>		-->								
																												
									</tr>
								
									<?php todaysDebitTransaction();?>	
								
																	
								
							</table>
							
						</div>
						<div class="">
			<!--Delete Conformation PopUp-->			
			 <div id="DeleteConformationCreditTransaction" style="right:32em; border-color:#E04343!important;" class="white_content ">
				<input style='' type="text" id="saveIdCreditForDelete"/>	
				<a href = "javascript:void(0)" onclick = "poUpHide('DeleteConformationCreditTransaction')">Close</a>
				<p>Do You Want To Delete This Item?</p><br/>
				
				<a href = "javascript:void(0)" class="deleteYes" onclick = "deleteCreditTransaction()">Yes</a>
				<a href = "javascript:void(0)" class="deleteNo" onclick = "poUpHide('DeleteConformationCreditTransaction')">NO</a>
				 <div id="CreditDeleteMassage"></div>
			  </div>
			  
			<!--End Delete Conformation PopUp -->
							<table class="">
								<tr ><th colspan='8' style='width:700px'>Today's Credit Transaction</th></tr>
									<tr>
										
										<th>SL</th>
										<th>Work Order</th>
										<th>Voucher No.</th>
										<th>Purpose</th>
										<th>Pay To</th>
										<th>Mobile</th>																	
										<th>Amount</th>																	
										<th>Note</th>										
											<!--<th>Delete</th>		-->									
																												
									</tr>
								
									<?php todaysCreditTransaction();?>	
								
																	
								
							</table>
							
						</div>
						
				</section>
	
		</div>
				<?php 

		?>
</body>