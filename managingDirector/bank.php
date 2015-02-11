<!DOCTYPE html>
<html lang="en">
	<head>
		<title>User Management</title>
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
	
			<div class="AddPeople " id="managementAccountDiv" >
				<h2>Add Bank</h2>
				<table>
					<tr>
						<th>Bank Name</th><th>Account No</th><th>Note</th>
					</tr>
					<tr>
						<td><input id="bankName" type="text"/></td>
						
						<td><input id="accountNo" type="text"/></td>
					
						<td><input id="note" type="text"/></td>
						
					</tr>
					<tr>
					</table>
					<table>
					<td style="width:350px;" class="noBorder">
					</td>
					<td class="noBorder"><input type="button" class="submit" onclick="addBank()"value="Add Account"/></td>
					</tr>
					
				</table>
				<div id="massage"></div>
				
				
<!--Delete Conformation PopUp-->			
			 <div id="DeleteConformation" style="right:32em; border-color:#E04343!important;" class="white_content ">
				<input style='display:none' type="text" id="saveIdForDelete"/>	
				<a href = "javascript:void(0)" onclick = "poUpHide('DeleteConformation')">Close</a>
				<p>Do You Want To Delete This Item?</p><br/>
				
				<a href = "javascript:void(0)" class="deleteYes" onclick = "deleteBank()">Yes</a>
				<a href = "javascript:void(0)" class="deleteNo" onclick = "poUpHide('DeleteConformation')">NO</a>
				 <div id="deleteMassage"></div>
			  </div>
			  
 <!--End Delete Conformation PopUp -->
			
			<div class="allBank">
			
			<h2>All Bank Account</h2>
			
			<div class="addedBank fix"  >
				<table id="reloadAddedBank" >
					<tr>
						<th  >Bank Name</th><th>Account No</th><th>Note</th><th>Delete</th>
					</tr>
					
					<?php 
						include'../php/php_output.php';
						addedBankAccount();
					?>
				</table>
			</div>
			</div>
			</div>
		</section>

		
</body>
</html>