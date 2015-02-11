<!DOCTYPE html>
<html lang="en">
	<head>
		<title>EverFirst Technology Ltd</title>
		<meta charset="utf-8"/>		
		<link rel="stylesheet" href="css/login.css"/>
	</head>
	<body>

	
	<div class="wrapper fix">
	
			<div class="content fix">	
			<?php 
	if(@$_REQUEST['massage']){
	echo"<div style='color:red;text-align:center;text-shadow:1px 2px 11px #fff;'>";
	echo "Wrong Designation Or User Name Or Password";		
	echo"</div>";	
	}	
	?>
				<div style='margin:0 auto;' class="logo_Cname fix">
				<img class="logo"src="images/service.png"/><span id="cName">EVERFIRST TECHNOLOGY LTD.</span>
				</div>
				<table class="designition">
					<tr>
					
						<td>
						<a href="login/login.php?designation=md">
							Managing Director
						</a>
						</td>
					
					</tr>
					<tr>
						<td>
						<a href="login/login.php?designation=am">
							Account Manager
						</a>
						</td>
					</tr>
					<tr>
						<td>
						<a href="login/login.php?designation=sm">
							Store Manager
						</a>
						</td>
					</tr>
					
				</table>
			</div>
			
		</div>
		
		
	</body>
</html>