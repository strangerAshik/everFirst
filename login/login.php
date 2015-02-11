<!DOCTYPE html>
<html lang="en">
	<head>
		<title>EverFirst</title>
		<meta charset="utf-8"/>		
		<link rel="stylesheet" href="../css/login.css"/>
		<script type="text/javascript" src="../js/main.js"></script>
<script>		

</script>		
	</head>
	<body>
	
		<div class="wrapper fix">
		<?php
		
	 if( @$_REQUEST['designation']){
session_start();	 
	$desig= $_SESSION['designation']=$_REQUEST['designation'];	 
	
	
				
		
		?>
		
			<div class="content fix">	
				<div style='margin:0 auto;' class="logo_Cname fix">
				<img class="logo"src="../images/service.png"/><span id="cName">EVERFIRST TECHNOLOGY LTD.</span>
				</div>
				<form action="loginAction.php" method="POST">
				<table class="loginTable">
					<tr>
						<td><input type="text" placeholder="User Name" name="userName"></td>
						<input type="text" name="designation" style="display:none;"value=<?php $desig; ?>
					</tr>
					<tr>
						<td><input type="password" placeholder="Password" name="password"></td>
					</tr>
					
					<tr>

						<td>
							
						<input class="loginButton" type="submit" value="Login" >
						</td>
					</tr>
				</table>
				</form>
				<div id="responce" style="color:red;"></div>
				
			</div>
		<?php 
	 } else{echo "Not Parmitted!!";}?>
		</div>		
	</body>
</html>