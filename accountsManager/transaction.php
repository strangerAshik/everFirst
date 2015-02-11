<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Transaction</title>
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
    <?php //include'../php/php_delete.php'; ?>
    <?php include'../php/php_output.php';?>
		<div class="wrapper fix">		
		<header class="header fix">			
		</header>
		
		<script>	
		$( ".header" ).load( "accountManagerHeader.php" );					
		</script>

<!--======Section for option Container========-->

		<section class="section fix" id="optionContainer" style="margin-top:30px;" >
		
		
			<table id="test">
			<tr>
				<th><input id="creditTransaction" type="button" value="Credit Transaction" onclick="showHide('creditOption','debitOption','cashCreditPurposes','bankCreditPurposes','cashDebitPurposes','result');activeTab('creditTransaction','debitTransaction');"/></th>
				<td class="noBorder">
				</td>
				<td class="noBorder">
				</td>
				
				<th><input id="debitTransaction" type="button" value="Debit Transaction" onclick="showHide('debitOption','creditOption','cashDebitPurposes','cashCreditPurposes','bankCreditPurposes','result');activeTab('debitTransaction','creditTransaction');"/></th>
							
			</tr>
			</table>
		</section>
<!--======End Section for option Container====-->

<!--======Option For credit====-->
<section class="section fix" id="creditOption"  style="display:none;margin-top:20px;">
		
			<table>
			<tr>
<th><input id="creditCash" type="button" value="Credit Cash" onclick="activeTab('creditCash','creditBank');showHide('cashCreditPurposes','bankCreditPurposes','cashDebitPurposes','bankDebitPurposes','result');"/></th>
				<td class="noBorder">
				</td>
				<td class="noBorder">
				</td>
				<td class="noBorder">
				</td>
				<td class="noBorder">
				</td>
				<th><input id="creditBank" type="button" value="Credit Bank" onclick="activeTab('creditBank','creditCash');showHide('bankCreditPurposes','cashCreditPurposes','cashDebitPurposes','bankDebitPurposes','result');"/></th>
							
			</tr>
			</table>
</section>
<!--====== End Option For credit====-->

<!--====== Option For Debit====-->
<section class="section fix" id="debitOption" style="display:none;margin-top:20px;" >
		
			<table>
			<tr>
				<th><input id="debitCash" type="button" value="Debit Cash" onclick="activeTab('debitCash','debitBank');showHide('cashDebitPurposes','bankDebitPurposes','cashCreditPurposes','bankCreditPurposes','result');"/></th>
				<td class="noBorder">
				</td>
				<td class="noBorder">
				</td>
				<td class="noBorder">
				</td>
				<td class="noBorder">
				</td>
				<th><input id="debitBank" type="button" value="Debit Bank" onclick="activeTab('debitBank','debitCash');showHide('bankDebitPurposes','cashDebitPurposes','cashCreditPurposes','bankCreditPurposes','result');"/></th>
							
			</tr>
			</table>
</section>
<!--====== End Option For Debit====-->

<!--Debit Transaction Area-->

	<!--Debit Purposes Area-->
	
		<div class="section fix" id="cashCreditPurposes" style="margin-top:0px; display:none; " >
			<h3 style="margin:0px auto;width:395px;">Cash Credit Purpose</h3>
			<select  id='creditPurposesCash' style="margin:5px auto 8px auto;width:400px;  " >
				<option>--Select Purpose--</option>
				<option id="repayAdvancePayment">Repay Advance Payment</option>
				<option id="saleTransaction">Sale Transaction</option>
				<option	id="bankLoan">Bank Loan</option>
				<option id="newInvest">New Invest</option>				
				<option id="others">Credit Others</option>
			</select>
		</div>
		
		<div class="section fix" id="bankCreditPurposes" style="margin:0px auto; display:none; " >
			<h3 style="margin:0px auto;width:395px;">Bank Credit Purpose</h3>
			<select id='creditPurposesBank' style="margin:5px auto;width:400px;  " >
				<option>--Select Purpose--</option>
				<option id="bankRepayAdvancePayment">Repay Advance Payment</option>
				<option id="bankSaleTransaction">Sale Transaction</option>
				<option	id="bankBankLoan">Bank Loan</option>
				<option id="bankNewInvest">New Invest</option>			
				<option id="bankOthers">Credit Others</option>
			</select>
		</div>
	<!--End Debit Purposes Area-->
	<!--Credit Unique Description-->
	
	


	
	<!--End Credit Unique Description-->
	
	

<!--Debit Transaction Area-->
<!--Debit Transaction Area-->
<div class="section fix" id="cashDebitPurposes" style="margin-top:0px;display:none;" >
<h3 style="margin:0px auto;width:395px;  ">Cash Debit Purpose</h3>
	<select id='debitPurposesCash' style="margin:5px auto;width:400px;  " >
		<option>--Select Purpose--</option>
		<option id="officeRent">Office Rent</option>
		<option id="officeEquipmentPurchase">Office Equipment Purchase</option>
		<option id="officeEquipmentService">Office Equipment Service</option>
		<option id="officeUtilityBill">Office Utility Bill</option>
		<option id="localPurchase">Local Purchase</option>
		<option id="foreignPurchase">Foreign Purchase</option>
		<option id="salary">Salary</option>
		<option id="convinceBill">conveyance Bill</option>
		<option id="CFAgentBill">C And F Agent Bill</option>
		<option id="vehicleMaintenance">Vehicle Maintenance</option>
		<option id="salesCommission">Sales Commission</option>
		<option id="miscellaneous">Miscellaneous</option>
		<option id="advancePayment">Advance Payment</option>
		<option id="loanRepay">Loan Repay</option>
		<option id="cashDebit">Debit Others</option>
	</select>
</div>

<div class="section fix" id="bankDebitPurposes" style="margin-top:0px;display:none;" >
<h3 style="margin:0px auto;width:395px;  ">Bank Debit Purpose</h3>
	<select id='debitPurposesBank' style="margin:5px auto;width:400px;  " >
		<option>--Select Purpose--</option>
		<option id="bankOfficeRent">Office Rent</option>
		<option id="bankOfficeEquipmentPurchase">Office Equipment Purchase</option>
		<option id="bankOfficeEquipmentService">Office Equipment Service</option>
		<option id="bankOfficeUtilityBill">Office Utility Bill</option>
		<option id="bankLocalPurchase">Local Purchase</option>
		<option id="bankForeignPurchase">Foreign Purchase</option>
		<option id="bankSalary">Salary</option>
		<option id="bankConvinceBill">conveyance Bill</option>
		<option id="bankCFAgentBill">C And F Agent Bill</option>
		<option id="bankVehicleMaintenance">Vehicle Maintenance</option>
		<option id="bankSalesCommission">Sales Commission</option>
		<option id="bankMiscellaneous">Miscellaneous</option>
		<option id="bankAdvancePayment">Advance Payment</option>
		<option id="bankLoanRepay">Loan Repay</option>
		<option id="bankCashDebit">Debit Others</option>
	</select>
</div>
<!--End Debit Transaction Area-->
<div id="result"></div>

	</body>
</html>
