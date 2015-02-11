<?php 
include'../php/php_transaction_output.php';
$today = date("Y-m-d");
$clickedOn=$_POST['clickedOn'];
if($clickedOn=='cashSaleTransaction'){ 
 $invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
 getDueAmountAndCompanyNameUsingInvoice($invoice);
}
if($clickedOn=='bankSaleTransaction'){ 
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$query="SELECT * FROM `invoice_core` where `invoice_no`='$invoice'";
 if($query_run=mysql_query($query)){
 if(mysql_num_rows($query_run)==NULL){
 echo"Invoice is Wrong Or Not Exist In Database";
 }
 else{
		while($query_row=mysql_fetch_assoc($query_run)){
			 $company=$query_row['company'];
			 $company=ucfirst( $company);
			 $grand_total=$query_row['grand_total'];
			 $paid=$query_row['paid'];
			 $dueAmount=$grand_total-$paid;
			}
		echo"
		<!--My Bank Account Details -->
<div id='bankAndAccount' >
		<div class='section fix' id='myBankAccountDetails'  >
		<input style='display:none;' id='voucherNo' value='";?><?php echo @$in=getVoucherNo();?><?php echo"'/>
	<table>
	<tr>
	<th>Voucher No</th><td style='color:#E04343;'>";?><?php echo @$voucherNo=getVoucherNo();?><?php echo"</td>
	</tr>
	<tr>
	<th>Date</th><td  style='color:#E04343;'>";?><?php echo $today = date('j F, Y');?><?php echo"</td>
	</tr>
				<tr>
					<th>Bank Name</th><th>Account No</th>
				</tr>
					
				<tr>
					<td>
					<select id='bankName' onchange='getThisBankAccounts();'>";?>
						<option>--Select Bank--</option>'
							<?php getBankList();?>
					<?php echo"</select>
					</td>
					<td >
					<select id='bankAccount'>
						<option>--Select Account--</option>
						
					</select>
					</td>
				</tr>
			</table>
		</div>
	<!--End My Bank Account Details -->
	<!--Client Transaction Details-->
	<div class='section fix' id='clientTransactionDetails'>
		<table>
			<tr>
				<th>Bank(From)</th><th>Cheque/TT NO</th>
			</tr>
			<tr>
				<td><input id='bankForm' type='text'/></td><td><input id='chequeOrTtNo'type='text'/></td>
			</tr>
		</table>
	</div>
	<!--End Client Transaction Details-->
</div>
		";
		echo"
<!--Start Source Description-->
	<div class='section fix'   >
	<table>
		<tr>
			<th>Company</th><th>Pay From</th><th>Mobile</th><th>Address</th>
		</tr>
			<td>$company</td><td><input id='payFrom' type='text'></td><td><input id='mobile' type='text'/></td><td><input id='address' type='text'/></td>
		<tr>
		</tr>
	</table>
	</div>
<!--End Source Description-->
		";
			
		echo"
<!--Start amount-->	
	<div class='section fix' >
	<table>
		<tr>
			<th>Due Amount</th><th>Amount</th><th>Note</th>
		</tr>
			
		<tr>
			<td>$dueAmount</td><td><input id='amount' type='text'/></td><td><input id='note' type='text'/></td>
			<td ><input type='button' onclick=
			\"keepRecordBankSaleTransaction();creditVoucher()\" value='Generate Voucher'/></td> 
		</tr>
	</table>
	
	</div>
	
	<!--End  amount-->
		";
	}
			
			}
 else echo"Query Failed!!";
 }
if($clickedOn=='getThisBankAccounts'){
 $bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
 $query="SELECT `account_no` FROM `bank` WHERE `bank_name`='$bankName'";
if($query_run=mysql_query($query)){
 echo"<option>--Select Account--</option>";
while($query_row=mysql_fetch_assoc($query_run)){
			 $accountNo=$query_row['account_no'];
			 echo"<option>$accountNo</option>";
			 }
}
else{echo"Query Failed!!";}
	
 } 
 if($clickedOn=='getThisBankAccounts2nd'){
 $bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
 echo $query="SELECT `account_no` FROM `bank` WHERE `bank_name`='$bankName'";
if($query_run=mysql_query($query)){
 echo"<option>--Select Account--</option>";
while($query_row=mysql_fetch_assoc($query_run)){
			 $accountNo=$query_row['account_no'];
			 echo"<option>$accountNo</option>";
			 }
}
else{echo"Query Failed!!";}
	
 }
if($clickedOn=='searchExistness'){
$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
$query="SELECT * FROM `debit_transaction` WHERE `work_order`='$workOrder'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		 newWorkOrderDisplay();
	}
	else{
		
	existingWorkOrderDisplay($query);
			
	
	}
}

 }
if($clickedOn=='searchExistnessForWorkOrderOrInvoice'){
$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$query="SELECT * FROM `debit_transaction` WHERE `work_order`='$workOrder' AND `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		 newWorkOrderDisplay();
	}
else{
existingWorkOrderDisplay($query);
}
}
}
if($clickedOn=='searchExistnessOfUtilityTypeAndBillNo'){
$utilityType=htmlentities(addslashes(strtolower(trim($_POST['utilityType']))));
$billNo=htmlentities(addslashes(strtolower(trim($_POST['billNo']))));
$query="SELECT * FROM `debit_transaction` WHERE `utility_type`='$utilityType' AND `utility_bill_no`='$billNo'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		 newWorkOrderDisplay();
	}
	else{
		existingWorkOrderDisplay($query);
	}
}
}
if($clickedOn=='searchExistnessOfInvoice'){
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$query="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		echo"Invoice No: ".$invoice." is Not Exist!!";
	}
	else{
	if($query_run=mysql_query($query)){
	while($query_row=mysql_fetch_assoc($query_run)){
			
			$grandTotal=$query_row['grand_total'];
			
			 }
		
			echo"
	<input style='display:none;' id='voucherNo' value='";?><?php echo @$in=getVoucherNo();?><?php echo  "' />
			<table>
					<tr>
					<th >Voucher No</th><td colspan='3' style='color:#E04343;'>";?><?php echo @$voucherNo=getVoucherNo();?><?php echo"</td>
					</tr>
					<tr>
					<th>Date</th><td colspan='3'  style='color:#E04343;'>";?> <?php echo $today = date('j F, Y');?><?php echo  "</td>
					</tr>
		<tr>
			<th>Pay To</th><th>Mobile</th><th colspan='2'>Address</th>
		</tr>			
		<tr>
		<td><input id='payTo' type='text'></td><td><input id='mobile' type='text'/></td><td colspan='2'><input id='address' style='width:280px' type='text'></td>
		</tr>
		<tr>
			<th>Grand Total</th><th>Commission(%)</th><th>Amount</th><th>Note</th>
		</tr>
			
		<tr>
			<td><input type='text' id='grandTotal' value='";?><?php echo $grandTotal ?><?php echo"' readonly/></td><td><input id='commission' type='text' onkeyup='calculateSaleCommissionAmount(";?><?php echo $grandTotal ?><?php echo");'/></td><td><input id='amount' type='text' /></td><td><input id='note' type='text'/></td>
		</tr>
	</table>
		";
	}
	else echo"Failed";
	}
}
}
if($clickedOn=='searchLoanTransaction'){
$loanTransactionId=htmlentities(addslashes(strtolower(trim($_POST['loanTransactionId']))));
$query="SELECT * FROM `credit_transaction` WHERE `loan_transaction_id`='$loanTransactionId'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		echo"Loan Transaction Id: ".$loanTransactionId." is Not Exist!!";
	}
	else{
	if($query_run=mysql_query($query)){
	while($query_row=mysql_fetch_assoc($query_run)){
			
			$from_bank=$query_row['from_bank'];
			$from_account=$query_row['from_account'];
			$amount=$query_row['amount'];
			$paidAmount=$query_row['paid_amount'];
			$amount=$amount-$paidAmount;
			
			 }
		
		echo"
	<input style='display:none;' id='voucherNo' value='";?><?php echo @$in=getVoucherNo();?><?php echo  "' />
			<table>
					<tr>
					<th >Voucher No</th><td colspan='2' style='color:#E04343;'>";?><?php echo @$voucherNo=getVoucherNo();?><?php echo"</td>
					</tr>
					<tr>
					<th>Date</th><td colspan='2'  style='color:#E04343;'>";?> <?php echo $today = date('j F, Y');?><?php echo  "</td>
					</tr>
		<tr>
			<th>Bank Name</th><th>Account No</th><th>Loan Amount</th>
		</tr>
		<tr>
		<td><input id='storeBank' type='text' value='";?><?php echo strtoupper($from_bank); ?><?php echo"' readonly/></td><td><input id='storeAccount' type='text' value='";?><?php echo strtoupper($from_account); ?><?php echo"' readonly/></td><td><input id='loanAmount' type='text' value='";?><?php echo strtoupper($amount); ?><?php echo"' readonly/></td>
		</tr>
		<tr>
			<th>Paid Amount</th><th colspan='2'>Note</th>
		</tr>
			
		<tr>
		<td><input id='amount' type='text'/></td><td colspan='2'><input type='text' style='width:280px' id='note'></td>
		</tr>
	</table>
		";
	}
	else echo"Failed";
	}
}
}
if($clickedOn=='searchExistnessWorkOrderForRepayAdvancePay'){
$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
 $query="SELECT * FROM `debit_transaction` WHERE `work_order`='$workOrder'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		 echo"ERROR: Work Order : ".$workOrder." is Not Found";//newWorkOrderDisplay();
	}
	else{
		
	existingWorkOrderDisplayCredit($query);
			
	
	}
}

 }
// Start credit transaction php option 
 if($clickedOn=='keepRecorNewInvest'){
 $purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
 $voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
 $workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
 $payFrom=htmlentities(addslashes(strtolower(trim($_POST['payFrom']))));
 $mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
 $address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
 $amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
 $note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
 $query="INSERT INTO `credit_transaction` (`date`,`purpose`,`work_order`,`pay_from`,`mobile`,`address`,`amount`,`note`,`voucher`) VALUES ('$today','$purpose','$workOrder','$payFrom','$mobile','$address','$amount','$note','$voucherNo')";
if($query_run=mysql_query($query)){echo"<br/> Record Stored!";}else{echo "br/> Record Storing Failed";}
 updateHandCash($today,$amount);
 updateVoucherNo();
 }
 if($clickedOn=='keepRecorNewInvestBank'){
 $purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
 $voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
 $workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
 $payFrom=htmlentities(addslashes(strtolower(trim($_POST['payFrom']))));
 $mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
 $address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
 $amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
 $note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
 $bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
 $bankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));
 $query="INSERT INTO `credit_transaction` (`date`,`purpose`,`work_order`,`pay_from`,`mobile`,`address`,`amount`,`note`,`store_bank`,`store_account`,`voucher`) VALUES ('$today','$purpose','$workOrder','$payFrom','$mobile','$address','$amount','$note','$bankName','$bankAccount','$voucherNo')";
if($query_run=mysql_query($query)){echo"<br/> Record Stored!";}else{echo "br/> Record Storing Failed";}
updateBankBalance($bankName,$bankAccount,$amount);
updateVoucherNo();
 }
 if($clickedOn=='keepRecordBankLoanCash'){
 $purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
 $voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
 $loanTransactionId=htmlentities(addslashes(strtolower(trim($_POST['loanTransactionId']))));
 $bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
 $bankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));
 $amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
 $note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
 $query="INSERT INTO `credit_transaction` (`date`,`purpose`,`loan_transaction_id`,`from_bank`,`from_account`,`amount`,`note`,`voucher`) VALUES ('$today','$purpose','$loanTransactionId','$bankName','$bankAccount','$amount','$note','$voucherNo')";
 if($query_run=mysql_query($query)){echo"<br/>Record Stored!";}else{echo "<br/>Record Storing Failed";}
 
 bankLoanUpdate($bankName,$bankAccount,$amount);
 
 updateHandCash($today,$amount);
 updateVoucherNo();
 } 
 if($clickedOn=='keepRecordBankLoanBank'){
 $purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
 $loanTransactionId=htmlentities(addslashes(strtolower(trim($_POST['loanTransactionId']))));
 $fromBankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
 $fromBankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));
 $amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
 $note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
 $toBankName=htmlentities(addslashes(strtolower(trim($_POST['toBankName']))));
 $toBankAccount=htmlentities(addslashes(strtolower(trim($_POST['toBankAccount']))));
 $query="INSERT INTO `credit_transaction` (`date`,`purpose`,`loan_transaction_id`,`from_bank`,`from_account`,`amount`,`note`,`store_bank`,`store_account`,`voucher`) VALUES ('$today','$purpose','$loanTransactionId','$fromBankName','$fromBankAccount','$amount','$note','$toBankName','$toBankAccount','$voucherNo')";
if($query_run=mysql_query($query)){echo"<br/>Record Stored!";}else{echo "<br/>Record Storing Failed";}
 bankLoanUpdate($fromBankName,$fromBankAccount,$amount);
 updateBankBalance($toBankName,$toBankAccount,$amount);
 updateVoucherNo();
 } 
if($clickedOn=='keepRecordCashSaleTransaction'){ 
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
 $payFrom=htmlentities(addslashes(strtolower(trim($_POST['payFrom']))));
 $mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
 $amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
 $note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
 //to get company name because of database update
  $query="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoice'";
 if($query_run=mysql_query($query)){
	while($query_row=mysql_fetch_assoc($query_run)){
			 $company=$query_row['company'];
			 }
			
 }
//insert at credit_transaction_sale_cash table
 $query="INSERT INTO `credit_transaction` (`date`,`purpose`,`invoice_no`,`pay_from`,`mobile`,`address`,`amount`,`note`,`voucher`,`company`)
								VALUES ('$today','$purpose','$invoice','$payFrom','$mobile','$address','$amount','$note','$voucherNo','$company')";
if($query_run=mysql_query($query)){echo"<br>Record Stored!!";}else{echo "Record Storing Failed";}

//Update Paid amount at invoice_core table
 $query="SELECT `paid` FROM `invoice_core` WHERE `invoice_no`='$invoice'";
 if($query_run=mysql_query($query)){
	while($query_row=mysql_fetch_assoc($query_run)){
			 $paid=$query_row['paid'];
			 }
			
 }
 $updatePaid=$paid+$amount;
 $query="UPDATE `invoice_core` SET `paid`='$updatePaid' WHERE `invoice_no`='$invoice'";
 mysql_query($query);
 //update hand_cash
 updateHandCash($today,$amount);
 updateVoucherNo();
}
 if($clickedOn=='keepRecordBankSaleTransaction'){
 $purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
 $voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
 $invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
 $payFrom=htmlentities(addslashes(strtolower(trim($_POST['payFrom']))));
 $mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
 $address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
 $amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
 $note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
 $bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
 $bankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));
 $chequeOrTtNo=htmlentities(addslashes(strtolower(trim($_POST['chequeOrTtNo']))));
 $bankForm=htmlentities(addslashes(strtolower(trim($_POST['bankForm']))));

 //to get company name because of database update
  $query="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoice'";
 if($query_run=mysql_query($query)){
	while($query_row=mysql_fetch_assoc($query_run)){
			 $company=$query_row['company'];
			 }
			
 }
//insert at credit_transaction table
 $query="INSERT INTO `credit_transaction` (`date`,`purpose`,`invoice_no`,`pay_from`,`mobile`,`address`,`amount`,`note`,`store_bank`,`store_account`,`from_bank`,`checque_or_tt`,`voucher`,`company`)
								VALUES ('$today','$purpose','$invoice','$payFrom','$mobile','$address','$amount','$note','$bankName','$bankAccount','$bankForm','$chequeOrTtNo','$voucherNo','$company')";
if($query_run=mysql_query($query)){echo"<br/> Record Stored!";}else{echo "br/> Record Storing Failed";}

//Update Paid amount at invoice_core table
 $query="SELECT `paid` FROM `invoice_core` WHERE `invoice_no`='$invoice'";
 if($query_run=mysql_query($query)){
	while($query_row=mysql_fetch_assoc($query_run)){
			 $paid=$query_row['paid'];
			 }
			
 }
 $updatePaid=$paid+$amount;
 $query="UPDATE `invoice_core` SET `paid`='$updatePaid' WHERE `invoice_no`='$invoice'";
 mysql_query($query);
//Update Bank 
updateBankBalance($bankName,$bankAccount,$amount);
//update voucher No
updateVoucherNo();
  
 }
 
if($clickedOn=='repayAdvanceCash'){

$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payFrom=htmlentities(addslashes(strtolower(trim($_POST['payFrom']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$dueAmount=htmlentities(addslashes(strtolower(trim($_POST['dueAmount']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
//inserting data to credit_transaction
$query="INSERT INTO `credit_transaction` (`date`,`purpose`,`work_order`,`voucher`,`pay_from`,`mobile`,`address`,`amount`,`note`) VALUES ('$today','$purpose','$workOrder','$voucherNo','$payFrom','$mobile','$address','$amount','$note')";
if($query_run=mysql_query($query)){echo'<br/>Record Stored . ';}else{echo'<br/>Record Stored Failed. ';}
//update data at debit_transaction
$query="SELECT * FROM `debit_transaction` WHERE `work_order`='$workOrder'";
if($query_run=mysql_query($query)){
		while($query_row=mysql_fetch_assoc($query_run)){
			 $paid_amount=$query_row['paid_amount'];
			 }
	 $updatePaidAmount=$paid_amount+$amount;
	 $query1="UPDATE `debit_transaction` SET `paid_amount`='$updatePaidAmount' WHERE `work_order`='$workOrder'";
	 if($query_run=mysql_query($query1)){echo'<br/>Paid Amount Update. ';}else{echo'<br/>Paid Amount Update Failed.';}
	}
//Update cash Hub
updateHandCash($today,$amount);
updateVoucherNo();
}
if($clickedOn=='repayAdvanceCashBank'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payFrom=htmlentities(addslashes(strtolower(trim($_POST['payFrom']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$dueAmount=htmlentities(addslashes(strtolower(trim($_POST['dueAmount']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
$bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
$bankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));
//inserting data to credit_transaction
$query="INSERT INTO `credit_transaction` (`date`,`purpose`,`work_order`,`voucher`,`pay_from`,`mobile`,`address`,`amount`,`note`,`store_bank`,`store_account`) VALUES ('$today','$purpose','$workOrder','$voucherNo','$payFrom','$mobile','$address','$amount','$note','$bankName','$bankAccount')";
if($query_run=mysql_query($query)){echo'<br/>Record Stored . ';}else{echo'<br/>Record Stored Failed. ';}
//update data at debit_transaction
$query="SELECT * FROM `debit_transaction` WHERE `work_order`='$workOrder'";
if($query_run=mysql_query($query)){
		while($query_row=mysql_fetch_assoc($query_run)){
			 $paid_amount=$query_row['paid_amount'];
			 }
	 $updatePaidAmount=abs($paid_amount+$amount);
	 $query1="UPDATE `debit_transaction` SET `paid_amount`='$updatePaidAmount' WHERE `work_order`='$workOrder'";
	 if($query_run=mysql_query($query1)){echo'<br/>Paid Amount Update. ';}else{echo'<br/>Paid Amount Update Failed.';}
	}
//Update Bank 
updateBankBalance($bankName,$bankAccount,$amount);
updateVoucherNo();
}

if($clickedOn=='creditOtherCash'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payFrom=htmlentities(addslashes(strtolower(trim($_POST['payFrom']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));

//inserting data to credit_transaction
$query="INSERT INTO `credit_transaction` (`date`,`purpose`,`work_order`,`voucher`,`pay_from`,`mobile`,`address`,`amount`,`note`) VALUES ('$today','$purpose','$workOrder','$voucherNo','$payFrom','$mobile','$address','$amount','$note')";
if($query_run=mysql_query($query)){echo'<br/>Record Stored . ';
 //Update cash Hub
updateHandCash($today,$amount);updateVoucherNo();}else{echo'<br/>Record Stored Failed. ';}

}
if($clickedOn=='creditOtherCashBank'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payFrom=htmlentities(addslashes(strtolower(trim($_POST['payFrom']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
$bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
$bankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));

//inserting data to credit_transaction
$query="INSERT INTO `credit_transaction` (`date`,`purpose`,`work_order`,`voucher`,`pay_from`,`mobile`,`address`,`amount`,`note`,`store_bank`,`store_account`) VALUES ('$today','$purpose','$workOrder','$voucherNo','$payFrom','$mobile','$address','$amount','$note','$bankName','$bankAccount')";
if($query_run=mysql_query($query)){echo'<br/>Record Stored . ';
 //Update cash Hub
updateBankBalance($bankName,$bankAccount,$amount);updateVoucherNo();}else{echo'<br/>Record Stored Failed. ';}

}
// End credit transaction php option 
if($clickedOn=='debitInfoWithWorkOrderCash'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payTo=htmlentities(addslashes(strtolower(trim($_POST['payTo']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$dueAmount=htmlentities(addslashes(strtolower(trim($_POST['dueAmount']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));

$query="SELECT * FROM `debit_transaction` WHERE `work_order`='$workOrder'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		if($purpose=='advance payment'){
		$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`work_order`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`last_paid`,`note`) VALUES ('$today','$purpose','$workOrder','$voucherNo','$payTo','$mobile','$address','$dueAmount','0','0','$note')";
		}
		else{
		$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`work_order`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`last_paid`,`note`) VALUES ('$today','$purpose','$workOrder','$voucherNo','$payTo','$mobile','$address','$dueAmount','$amount','$amount','$note')";}
		if($query_run=mysql_query($query1)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	}
	else{
		if($query_run=mysql_query($query)){
		while($query_row=mysql_fetch_assoc($query_run)){
			 $paid_amount=$query_row['paid_amount'];
			 $dueAmount=$query_row['amount'];																			
			 }
			 $update_paid_amount=$paid_amount+$amount;
			$query2="INSERT INTO `debit_transaction` (`date`,`purpose`,`work_order`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`last_paid`,`note`) VALUES ('$today','$purpose','$workOrder','$voucherNo','$payTo','$mobile','$address','$dueAmount','$update_paid_amount','$amount','$note')";
		if($query_run=mysql_query($query2)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	
	}
	
}
//update Hand Cash
	updateHandCashDebit($today,$amount);
	//update Voucher no
	updateVoucherNo();
}
}
if($clickedOn=='debitInfoWithWorkOrderAndInvoiceCash'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
echo $invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payTo=htmlentities(addslashes(strtolower(trim($_POST['payTo']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$dueAmount=htmlentities(addslashes(strtolower(trim($_POST['dueAmount']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));

$query="SELECT * FROM `debit_transaction` WHERE `work_order`='$workOrder' AND `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`work_order`,`invoice_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`last_paid`,`note`) VALUES ('$today','$purpose','$workOrder','$invoice','$voucherNo','$payTo','$mobile','$address','$dueAmount','$amount','$amount','$note')";
		if($query_run=mysql_query($query1)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	}
	else{
		if($query_run=mysql_query($query)){
		while($query_row=mysql_fetch_assoc($query_run)){
			 $paid_amount=$query_row['paid_amount'];
			 $dueAmount=$query_row['amount'];																			
			 }
			 $update_paid_amount=$paid_amount+$amount;
			$query2="INSERT INTO `debit_transaction` (`date`,`purpose`,`work_order`,`invoice_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`last_paid`,`note`) VALUES ('$today','$purpose','$workOrder','$invoice','$voucherNo','$payTo','$mobile','$address','$dueAmount','$update_paid_amount','$amount','$note')";
		if($query_run=mysql_query($query2)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	
	}
	
}
//update Hand Cash
	updateHandCashDebit($today,$amount);
	//update Voucher no
	updateVoucherNo();
}

}
if($clickedOn=='debitInfoWithWorkOrderBank'){

$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
 $workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payTo=htmlentities(addslashes(strtolower(trim($_POST['payTo']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$dueAmount=htmlentities(addslashes(strtolower(trim($_POST['dueAmount']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
$bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
$bankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));
$chequeNumber=htmlentities(addslashes(strtolower(trim($_POST['chequeNumber']))));

$query="SELECT * FROM `debit_transaction` WHERE `work_order`='$workOrder'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`work_order`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`note`,`from_bank`,`from_account`,`cheque_no`,`last_paid`) VALUES ('$today','$purpose','$workOrder','$voucherNo','$payTo','$mobile','$address','$amount','$note','$bankName','$bankAccount','$chequeNumber','$amount')";
		if($query_run=mysql_query($query1)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	}
	else{
		if($query_run=mysql_query($query)){
		while($query_row=mysql_fetch_assoc($query_run)){
			 $paid_amount=$query_row['paid_amount'];
			 $dueAmount=$query_row['amount'];																			
			 }
			 $update_paid_amount=$paid_amount+$amount;
			$query2="INSERT INTO `debit_transaction` (`date`,`purpose`,`work_order`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`note`,`from_bank`,`from_account`,`cheque_no`,`last_paid`) VALUES ('$today','$purpose','$workOrder','$voucherNo','$payTo','$mobile','$address','$dueAmount','$update_paid_amount','$note','$bankName','$bankAccount','$chequeNumber','$amount')";
		if($query_run=mysql_query($query2)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	
	}
	
}
//update Bank balance
	updateBankBalanceDebit($bankName,$bankAccount,$amount);
//update Voucher no
	updateVoucherNo();
}

}
if($clickedOn=='debitInfoWithWorkOrderAndInvoiceBank'){

echo $purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
 $workOrder=htmlentities(addslashes(strtolower(trim($_POST['workOrder']))));
 echo $invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payTo=htmlentities(addslashes(strtolower(trim($_POST['payTo']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$dueAmount=htmlentities(addslashes(strtolower(trim($_POST['dueAmount']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
$bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
$bankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));
$chequeNumber=htmlentities(addslashes(strtolower(trim($_POST['chequeNumber']))));

$query="SELECT * FROM `debit_transaction` WHERE `work_order`='$workOrder' AND `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`work_order`,`invoice_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`note`,`from_bank`,`from_account`,`cheque_no`,`last_paid`) VALUES ('$today','$purpose','$workOrder','$invoice','$voucherNo','$payTo','$mobile','$address','$dueAmount','$amount','$note','$bankName','$bankAccount','$chequeNumber','$amount')";
		if($query_run=mysql_query($query1)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	}
	else{
		if($query_run=mysql_query($query)){
		while($query_row=mysql_fetch_assoc($query_run)){
			 $paid_amount=$query_row['paid_amount'];
			 $dueAmount=$query_row['amount'];																			
			 }
			 $update_paid_amount=$paid_amount+$amount;
			$query2="INSERT INTO `debit_transaction` (`date`,`purpose`,`work_order`,`invoice_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`note`,`from_bank`,`from_account`,`cheque_no`,`last_paid`) VALUES ('$today','$purpose','$workOrder','$invoice','$voucherNo','$payTo','$mobile','$address','$dueAmount','$update_paid_amount','$note','$bankName','$bankAccount','$chequeNumber','$amount')";
		if($query_run=mysql_query($query2)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	
	}
	
}
//update Bank balance
	updateBankBalanceDebit($bankName,$bankAccount,$amount);
//update Voucher no
	updateVoucherNo();
}
}

if($clickedOn=='utilityBillCash'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$utilityType=htmlentities(addslashes(strtolower(trim($_POST['utilityType']))));
$billNo=htmlentities(addslashes(strtolower(trim($_POST['billNo']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payTo=htmlentities(addslashes(strtolower(trim($_POST['payTo']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$dueAmount=htmlentities(addslashes(strtolower(trim($_POST['dueAmount']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));

$query="SELECT * FROM `debit_transaction` WHERE `utility_type`='$utilityType' AND `utility_bill_no`='$billNo'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`utility_type`,`utility_bill_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`note`,`last_paid`) VALUES ('$today','$purpose','$utilityType','$billNo','$voucherNo','$payTo','$mobile','$address','$dueAmount','$amount','$note','$amount')";
		if($query_run=mysql_query($query1)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	}
	else{
		if($query_run=mysql_query($query)){
		while($query_row=mysql_fetch_assoc($query_run)){
			 $paid_amount=$query_row['paid_amount'];
			 $dueAmount=$query_row['amount'];																			
			 }
			 $update_paid_amount=$paid_amount+$amount;
			$query2="INSERT INTO `debit_transaction` (`date`,`purpose`,`utility_type`,`utility_bill_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`note`,`last_paid`) VALUES ('$today','$purpose','$utilityType','$billNo','$voucherNo','$payTo','$mobile','$address','$dueAmount','$update_paid_amount','$note','$amount')";
		if($query_run=mysql_query($query2)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	
	}
	
}
//update Hand Cash
	updateHandCashDebit($today,$amount);
//update Voucher no
	updateVoucherNo();
}

}
if($clickedOn=='utilityBillBank'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$utilityType=htmlentities(addslashes(strtolower(trim($_POST['utilityType']))));
$billNo=htmlentities(addslashes(strtolower(trim($_POST['billNo']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payTo=htmlentities(addslashes(strtolower(trim($_POST['payTo']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$dueAmount=htmlentities(addslashes(strtolower(trim($_POST['dueAmount']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
$bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
$bankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));
$chequeNumber=htmlentities(addslashes(strtolower(trim($_POST['chequeNumber']))));

$query="SELECT * FROM `debit_transaction` WHERE `utility_type`='$utilityType' AND `utility_bill_no`='$billNo'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){
		$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`utility_type`,`utility_bill_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`note`,`from_bank`,`from_account`,`cheque_no`,`last_paid`) VALUES ('$today','$purpose','$utilityType','$billNo','$voucherNo','$payTo','$mobile','$address','$dueAmount','$amount','$note','$bankName','$bankAccount','$chequeNumber','$amount')";
		if($query_run=mysql_query($query1)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	}
	else{
		if($query_run=mysql_query($query)){
		while($query_row=mysql_fetch_assoc($query_run)){
			 $paid_amount=$query_row['paid_amount'];
			 $dueAmount=$query_row['amount'];																			
			 }
			 $update_paid_amount=$paid_amount+$amount;
			$query2="INSERT INTO `debit_transaction` (`date`,`purpose`,`utility_type`,`utility_bill_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`note`,`from_bank`,`from_account`,`cheque_no`,`last_paid`) VALUES ('$today','$purpose','$utilityType','$billNo','$voucherNo','$payTo','$mobile','$address','$dueAmount','$update_paid_amount','$note','$bankName','$bankAccount','$chequeNumber','$amount')";
		if($query_run=mysql_query($query2)){echo "<br>Record Stored!";}else{echo "<br>Record Storing Failed!";}
	
	}
	
}
//update Bank balance
	updateBankBalanceDebit($bankName,$bankAccount,$amount);
//update Voucher no
	updateVoucherNo();
}

}
if($clickedOn=='vehicleMaintenanceCash'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$vehicleNumber=htmlentities(addslashes(strtolower(trim($_POST['vehicleNumber']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payTo=htmlentities(addslashes(strtolower(trim($_POST['payTo']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$reason=htmlentities(addslashes(strtolower(trim($_POST['reason']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`vehicle_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`note`,`last_paid`) VALUES ('$today','$purpose','$vehicleNumber','$voucherNo','$payTo','$mobile','$address','$amount','$amount','$note','$amount')";
if($query_run=mysql_query($query1)){echo "<br>Record Stored!";
//update Hand Cash
	updateHandCashDebit($today,$amount);
//update Voucher no
	updateVoucherNo();

}else{echo "<br>Record Storing Failed!";}
}
if($clickedOn=='vehicleMaintenanceBank'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$vehicleNumber=htmlentities(addslashes(strtolower(trim($_POST['vehicleNumber']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payTo=htmlentities(addslashes(strtolower(trim($_POST['payTo']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$reason=htmlentities(addslashes(strtolower(trim($_POST['reason']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
$bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
$bankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));
$chequeNumber=htmlentities(addslashes(strtolower(trim($_POST['chequeNumber']))));

$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`vehicle_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`paid_amount`,`note`,`from_bank`,`from_account`,`cheque_no`,`last_paid`,`vehicle_cost_type`) VALUES ('$today','$purpose','$vehicleNumber','$voucherNo','$payTo','$mobile','$address','$amount','$amount','$note','$bankName','$bankAccount','$chequeNumber','$amount','$reason')";
if($query_run=mysql_query($query1)){echo "<br>Record Stored!";
//update Bank balance
	updateBankBalanceDebit($bankName,$bankAccount,$amount);
//update Voucher no
	updateVoucherNo();
}else{echo "<br>Record Storing Failed!";}

}
if($clickedOn=='saleCommissionCash'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payTo=htmlentities(addslashes(strtolower(trim($_POST['payTo']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$grandTotal=htmlentities(addslashes(strtolower(trim($_POST['grandTotal']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
$commission=htmlentities(addslashes(strtolower(trim($_POST['commission']))));



$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`invoice_no`,`voucher`,`pay_to`,`mobile`,`address`,`amount`,`sale_commision_percentage`,`paid_amount`,`note`,`last_paid`) VALUES ('$today','$purpose','$invoice','$voucherNo','$payTo','$mobile','$address','$amount','$commission','$amount','$note','$amount')";
if($query_run=mysql_query($query1)){echo "<br>Record Stored!";
//update Hand Cash
	updateHandCashDebit($today,$amount);
//update Voucher no
	updateVoucherNo();
}else{echo "<br>Record Storing Failed!";}

}
if($clickedOn=='saleCommissionBank'){
$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$invoice=htmlentities(addslashes(strtolower(trim($_POST['invoice']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$payTo=htmlentities(addslashes(strtolower(trim($_POST['payTo']))));
$mobile=htmlentities(addslashes(strtolower(trim($_POST['mobile']))));
$address=htmlentities(addslashes(strtolower(trim($_POST['address']))));
$grandTotal=htmlentities(addslashes(strtolower(trim($_POST['grandTotal']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));
$commission=htmlentities(addslashes(strtolower(trim($_POST['commission']))));

$bankName=htmlentities(addslashes(strtolower(trim($_POST['bankName']))));
$bankAccount=htmlentities(addslashes(strtolower(trim($_POST['bankAccount']))));
$chequeNumber=htmlentities(addslashes(strtolower(trim($_POST['chequeNumber']))));

$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`invoice_no`,`voucher`,`pay_to`,`mobile`,`address`,`grand_total`,`sale_commision_percentage`,`paid_amount`,`amount`,`note`,`from_bank`,`from_account`,`cheque_no`,`last_paid`) VALUES ('$today','$purpose','$invoice','$voucherNo','$payTo','$mobile','$address','$grandTotal','$commission','$amount','$amount','$note','$bankName','$bankAccount','$chequeNumber','$amount')";
if($query_run=mysql_query($query1)){echo "<br>Record Stored!";
//update Bank balance
	updateBankBalanceDebit($bankName,$bankAccount,$amount);
//update Voucher no
	updateVoucherNo();
}else{echo "<br>Record Storing Failed!";}
}
if($clickedOn=='loanRepayCash'){

$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$loanTransactionId=htmlentities(addslashes(strtolower(trim($_POST['loanTransactionId']))));
$storeBank=htmlentities(addslashes(strtolower(trim($_POST['storeBank']))));
$storeAccount=htmlentities(addslashes(strtolower(trim($_POST['storeAccount']))));
$loanAmount=htmlentities(addslashes(strtolower(trim($_POST['loanAmount']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));


$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`voucher`,`loan_transaction_id`,`store_bank`,`store_account`,`amount`,`paid_amount`,`note`,`last_paid`,`pay_to`) VALUES ('$today','$purpose','$voucherNo','$loanTransactionId','$storeBank','$storeAccount','$amount','$amount','$note','$amount','$storeBank')";
if($query_run=mysql_query($query1)){echo "<br>Record Stored!";
//Update bank account 
bankLoanPayUpdate($storeBank,$storeAccount,$amount,$loanTransactionId);
//update Hand Cash
	updateHandCashDebit($today,$amount);
//update Voucher no
	updateVoucherNo();
}else{echo "<br>Record Storing Failed!";}
/* bank loan paid at credit transaction table

$query2="SELECT * FROM `credit_transaction` WHERE `loan_transaction_id`='$loanTransactionId'"; 
 if($query_run=mysql_query($query2)){
	while($query_row=mysql_fetch_assoc($query_run)){
			 $currentPaidAmount=$query_row['paid_amount'];
			 $updatePaidAmount=$amount+ $currentPaidAmount;
 $query1="UPDATE `credit_transaction` SET `paid_amount`='$updatePaidAmount' WHERE `loan_transaction_id`='$loanTransactionId'";
 if(mysql_query($query1)){echo"<br>Bank Loan is update!!";} else{echo"<br>Bank Loan is update update Failed";}
			 }*/


}
if($clickedOn=='loanRepayBank'){

$purpose=htmlentities(addslashes(strtolower(trim($_POST['purpose']))));
$voucherNo=htmlentities(addslashes(strtolower(trim($_POST['voucherNo']))));
$loanTransactionId=htmlentities(addslashes(strtolower(trim($_POST['loanTransactionId']))));
$storeBank=htmlentities(addslashes(strtolower(trim($_POST['storeBank']))));
$storeAccount=htmlentities(addslashes(strtolower(trim($_POST['storeAccount']))));
$loanAmount=htmlentities(addslashes(strtolower(trim($_POST['loanAmount']))));
$amount=htmlentities(addslashes(strtolower(trim($_POST['amount']))));
$note=htmlentities(addslashes(strtolower(trim($_POST['note']))));


$fromBank=htmlentities(addslashes(strtolower(trim($_POST['fromBank']))));
$fromAccount=htmlentities(addslashes(strtolower(trim($_POST['fromAccount']))));
$chequeNumber=htmlentities(addslashes(strtolower(trim($_POST['chequeNumber']))));

$query1="INSERT INTO `debit_transaction` (`date`,`purpose`,`voucher`,`loan_transaction_id`,`store_bank`,`store_account`,`amount`,`paid_amount`,`note`,`from_bank`,`from_account`,`cheque_no`,`last_paid`,`pay_to`) VALUES ('$today','$purpose','$voucherNo','$loanTransactionId','$storeBank','$storeAccount','$amount','$amount','$note','$fromBank','$fromAccount','$chequeNumber','$amount','$storeBank')";
if($query_run=mysql_query($query1)){echo "<br>Record Stored!";
//Update bank account 
bankLoanPayUpdate($storeBank,$storeAccount,$amount);
//update Bank balance
	updateBankBalanceDebit($fromBank,$fromAccount,$amount);
//update Voucher no
	updateVoucherNo();
}else{echo "<br>Record Storing Failed!";}

// bank loan paid at credit transaction table
$query2="SELECT * FROM `credit_transaction` WHERE `loan_transaction_id`='$loanTransactionId'"; 
 if($query_run=mysql_query($query2)){
	while($query_row=mysql_fetch_assoc($query_run)){
			 $currentAmount=$query_row['amount'];
			 $updateAmount=$currentAmount-$amount;
 $query1="UPDATE `credit_transaction` SET `amount`='$updateAmount' WHERE `loan_transaction_id`='$loanTransactionId'";
 if(mysql_query($query1)){echo"<br>Bank Loan is update!!";}else{echo"<br>Bank Loan is update update Failed";}
			 }

}
}

 ?>