<div class="companyLogo fix">
		<p><span><img src="../images/service.png"/></span><span>EVERFIRST TECHNOLOGY LTD.</span></p>
</div>
	<div class="loginInfo ">
	<?php @session_start();@$userName=$_SESSION['userName'];@$desig=$_SESSION['desig'];
	
	?>
	
		<p><span><?php if(@$desig=='md'){echo"<a style='color:red;' href='../managingDirector/managingDirectorHomePage.php'> Go Back </a>";} ?></span><span style="font-style:italic;font-weight:bold;">User Name:</span><?php echo @ucwords($userName);?></p>
		<p><span style="font-style:italic;font-weight:bold;">Designation:</span><?php echo strtoupper(@$desig);?></p>
		<div id="UserOption" onclick="userOption()">User Option</div>
		<div id="options">
			<ul>
				<li href = "javascript:void(0)" onclick = "popUpShow('changePassword')">
					Change Password
					</li>
					<li>
					<a href="../login/logout.php">Logout</a>
				</li>
			</ul>
		</div>
	</div>
	<!--Change Password-->
<div id="changePassword" class="white_content">
	<a href = "javascript:void(0)" onclick = "poUpHide('changePassword')">Close</a>
		<div>
		
			<table>
				<tr>
					<td>Old Password</td><td><input id='oldPass' type="password" /></td>
				</tr>
				<tr>
					<td>New password</td><td><input  id='newPass' type="password" /></td>
				</tr>
				<tr>
					<td>Conform new password</td><td><input id='confNewPass' type="password" /></td>
				</tr>
				<tr>
					<td class='noBorder'></td><td   class='noBorder'><input style='float:right;' type='button' value='Submit' onclick='changePass();'/></td>
				</tr>
			</table>
			<div id='massage'></div>
		</div>
	</div>
	<!--Change Password-->
			
	<nav class="nav  ">
		<ul>			
				<li><a id="Invetory" href="accountsManagerHomepage.php">Home</a></li>
				
				
				<li><a id="Transaction" href="transaction.php">Transaction</a></li>
				<li><a id="Transaction" href="reconsideration.php">Reconsideration</a></li>
				<li><a id="Report"  href="report.php">Report</a></li>
		</ul>
				
	</nav>
			
