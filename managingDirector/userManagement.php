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
				<h2>Add User</h2>
				<!--Delete Conformation PopUp-->			
			 <div id="DeleteConformation" style="margin:177px 255px; border-color:#E04343!important;" class="white_content ">
				<input style='display:none' type="text" id="saveIdForDelete"/>	
				<a href = "javascript:void(0)" onclick = "poUpHide('DeleteConformation')">Close</a>
				<p>Do You Want To Delete This Item?</p><br/>
				
				<a href = "javascript:void(0)" class="deleteYes" onclick = "deleteUser()">Yes</a>
				<a href = "javascript:void(0)" class="deleteNo" onclick = "poUpHide('DeleteConformation')">NO</a>
				 <div id="deleteMassage"></div>
			  </div>
			  
 <!--End Delete Conformation PopUp -->
				<table>
					<tr>
						<th>User Name</th><th>Passwords</th><th>Designation</th><th>Mobole</th>
					</tr>
					<tr>
						<td><input id="userName" type="text"/></td>
						
						<td><input id="userPassword" type="password"/></td>
						<td>
							<select id="desig">
								<option value="#">--Select--</option>
								<option value="md">Managment</option>
								<option value="am">Account Manager</option>
								<option value="sm">Store Manager</option>						
							</select>
						</td>
						<td><input id="mobile" type="text"/></td>
					</tr>
					
				</table>
				<table>
					<tr>
						<td class="noBorder"style="width:516px;"></td>
						<td><input type="button" class="submit" onclick="ajaxInputAddUser()"value="Add Account"/></td>
					</tr>
				</table>
				
				
			<div id="addNewUserMassage"></div>
			
			<div class="all_people">
			
			<h2>All Users</h2>
			<div class="addedUser fix"  >
				<table id="reload" >
					<tr>
						<th>Name</th><th>Designation</th><th>Mobile</th><th>Delete</th>
					</tr>
					
					<?php 
						include'../php/php_output.php';
						AddedUser();
					?>
				</table>
			</div>
			</div>
			</div>
		</section>

		
</body>
</html>