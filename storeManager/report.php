<html lang="en">
	<head>
		<title>Transaction Report</title>
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
			<header class="header fix"></header>
			<script>	
			$( ".header" ).load( "storeHeader.php" );	
			</script>
			<section class="section" id="optionContainer"  >
					<select>
						<option id="reportName" onclick="hideDiv('storeProductWithProvision','item','part','brand');">--Select Report Type--</option>
						
						<option onclick="showHide('storeProductWithProvision','part','brand','item');" id="itemInventoryReport">Stored Product with provision </option>
						<!--<option onclick="showHide('item','part','brand','storeProductWithProvision');" id="itemInventoryReport">Item Wise Current Inventory </option>
						<option onclick="showHide('part','item','brand','storeProductWithProvision');" id="partInventoryReport">Part Wise Current Inventory </option>
						<option onclick="showHide('brand','part','item','storeProductWithProvision');" id="brandInventoryReport">Brand Wise Current Inventory </option>	-->			
					</select>
			</section>

<!-- #################################################################################################################################### -->
			<section class="section fix">
				
<!-- #################################################################################################################################### -->
<div id="storeProductWithProvision" style="display:none;">
<div class="challanTable">
<?php include'../php/php_output.php';?>
							<h2>
								Stored Product with provision 
							</h2>
							<form action="" method="">
							<table class="challanTable">
								<thead>
									<tr>
										<th>SL NO.</th>
											<th>Brand</th>
											<th>Part No.</th>											
											<th>Item Name</th>		
											<th>stock</th>
											<th>provision</th>
																		
									</tr>
								</thead>
								<tbody>
									<?php inventoryStatusWithProvision();?>		
										<tr>
										<td class='noBorder'></td>
										<td class='noBorder'></td>
										<td class='noBorder'></td>
										<td class='noBorder'></td>
										<td class='noBorder'></td>
											
											<td class='noBorder'><input style="float:right;" type='button' value='Get PDF' onclick='storedProductWithProvision();'></td>
																		
									</tr>									
								</tbody>
							</table>
							</form>
						</div>
</div>
<!-- #################################################################################################################################### -->
			
<!-- #################################################################################################################################### -->

<!-- #################################################################################################################################### -->
				
<!-- #################################################################################################################################### -->

<!-- #################################################################################################################################### -->

				
<!-- #################################################################################################################################### -->
		</section>				
	</div>

		<div id="result"></div>
		<table>
			<tr>
			<td><input type='text' id='challanInvoiceNo' placeholder='Invoice No'/></td>
			<td><input type='text' id='challanNo' placeholder='Challan No'/></td>			
			<td><input type='button' value='Submit' onclick="pdfChallan()"/></td>
			
			</tr>
			<tr>
			<td><input type='text' id='invoiceNo' placeholder='Invoice No'/></td><td><input type='button' value='Submit' onclick="pdfInvoice()"/></td>
			
	</tr>
		</table>
	</body>
</html>