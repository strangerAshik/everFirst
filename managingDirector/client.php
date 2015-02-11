<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Client</title>
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
				<h2>Add Client</h2>
				<table class="Customerdetails tableMargin" id="myDiv">
				<tr>					
					<th>Company</th>
					<th>Address</th>
					<th>Mobile</th>
					<th>Representative</th>
					<th>Note</th>
				</tr>
				<tr >
					
					<td><input id="company" type="text" /></td>
					<td><input id="address" type="text" /></td>
					<td><input id="mobile" type="text"/></td>
					<td ><input id="representative" type="text"/></td>
					<td><input id="note" type="text"/></td>
				</tr>
				</table>
				<table>
				<tr>
				<td class="noBorder" style="width:806px">
				</td >
				
				<td class="noBorder">
<input class="submit" type="button" onclick="ajaxInputAddClient();" value="Add Client">
</td>
</tr>
				

				</table>
			
				<div id="addNewClientMassage"></div>
			</div>
			
			<div class="all_people">
			<!--Delete Conformation PopUp-->			
			 <div id="DeleteConformation" style="right:32em; border-color:#E04343!important;" class="white_content ">
				<input style='display:none' type="text" id="saveIdForDelete"/>	
				<a href = "javascript:void(0)" onclick = "poUpHide('DeleteConformation')">Close</a>
				<p>Do You Want To Delete This Item?</p><br/>
				
				<a href = "javascript:void(0)" class="deleteYes" onclick = "deleteClient()">Yes</a>
				<a href = "javascript:void(0)" class="deleteNo" onclick = "poUpHide('DeleteConformation')">NO</a>
				 <div id="deleteMassage"></div>
			  </div>
			  
 <!--End Delete Conformation PopUp -->
 

			<h2>All Clients</h2>
			
			
			<div class="AddedClient fix" >
				<table id="AddedClient" >
				
					<tr>
						<th>Company</th><th>Address</th><th>Mobile</th><th>Representative</th><th>Note</th><th>Delete</th>
					</tr>
					
					<?php 
					include'../php/php_output.php';							
					AddedClient();					
					?>
					
				</table>
			</div>
			</div>
			<!--Delete Conformation PopUp-->
			
			 <div id="DeleteConformation" style="left: 176px;top:480px ; border-color:#E04343!important;" class="white_content ">
				<p>Do you Want to delete invoice 122343243?</p><br/>
				<div style="display:none;"><input  id="getId" type="text"></div>
				<a href = "javascript:void(0)" style="float:left;margin:10px 0px 0px 78px" onclick = "alert(document.getElementById('getId').value)">Yes</a>
				<a href = "javascript:void(0)" style="float:right;margin:10px 78px 0px 0px;color:green"onclick = "poUpHide('DeleteConformation')">NO</a>			
			  </div>
			  
			 <!--Delete Conformation PopUp End-->
			 <!--Edit Conformation PopUp-->
			 <div id="Edit_Conformation" style="left: 176px;top:480px ; border-color:#18C95B!important;" class="white_content ">
			 <a href = "javascript:void(0)" onclick = "poUpHide('Edit_Conformation')">Close</a>
			 <table >
					<tr>
						
						<th>Item Name</th>
						<th>Part No.</th>
						<th>Brand</th>
						<th>Quantity</th>
						<th>Item Price</th>
						
					</tr>
					<tr>
						<td><input  size="10" type="text" id=""/></td><td><input size="10" type="text" id=""/></td><td><input type="text" size="10" id=""/></td><td><input size="10" type="text" id=""/></td><td><input size="10" type="text" id=""/></td>
					</tr>
				</table>
				 <button type="button" href = "javascript:void(0)" onclick = "poUpHide('Edit_Conformation')">Cancle</button>
				 <button type="button" id="addedItemSave">Save</button>
				</div>
			 <!--End of Edit Conformation PopUp-->
			
		</section>
		</div>
	</body>
</html>