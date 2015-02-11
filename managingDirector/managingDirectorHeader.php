			<div class="companyLogo fix">
				<p><span><img src="../images/service.png"/></span><span>EVERFIRST</span></p>
			</div>


			<div class="loginInfo ">
				<?php session_start();@$userName=$_SESSION['userName'];@$desig=$_SESSION['desig'];?>
		<p><span style="">User Name:</span><?php echo @ucwords($userName);?></p>
		<p><span style="font-style:italic;font-weight:bold;">Designation:</span><?php echo @strtoupper($desig);?></p>
				<div id="UserOption" onclick="userOption()">User Option</div>
				<div id="options">
					<ul>
						<li  href = "javascript:void(0)" onclick = "popUpShow('changePassword')">
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
			<nav class="nav">
				<ul>
					<li><a href="managingDirectorHomePage.php">Home</a></li>
					<li><a href="client.php">Add Client</a></li>
					<li><a href="supplier.php">Add Supplier</a></li>
					<li><a href="userManagement.php">System User</a></li>
					<li><a href="bank.php">Bank</a></li>
					<li><a href="reconsideration.php">Reconsideration</a></li>
					<li><a href="../accountsManager/accountsManagerHomepage.php">Account Manager</a></li>
					<li><a href="../storeManager/storeManagerHomepage.php">Store Manager</a></li>
					<li><a href="report.php">Report</a></li>
				</ul>
			</nav>
			