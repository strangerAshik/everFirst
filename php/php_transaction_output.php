<?php 
include'../php/db_connect.php';
function getDueAmountAndCompanyNameUsingInvoice($invoice){
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
		printContentOfCashSaleTransaction($company,$dueAmount);
	}
			
			}
 else echo"Query Failed!!";
 }
function printContentOfCashSaleTransaction($company,$dueAmount){

		echo"
<!--Start Source Description-->
	<div class='section fix'   >
	<input style='display:none;' id='voucherNo' value='";?><?php echo @$in=getVoucherNo();?><?php echo"'/>
	<table>
	<tr>
	<th colspan='2'>Voucher No</th><td style='color:#E04343;' colspan='2'>";?><?php echo @$voucherNo=getVoucherNo();?><?php echo"</td>
	</tr>
	<tr>
	<th colspan='2'>Date</th><td  style='color:#E04343;' colspan='2'>";?><?php echo $today = date('j F, Y');?><?php echo"</td>
	</tr>
			<th>Company</th><th>Pay From</th><th>Mobile</th><th>Address</th>
		</tr>
			<td>$company</td><td><input id='payFrom' type='text'></td><td><input id='mobile' type='text'/></td><td><input id='address' type='text'/></td>
		<tr>
		</tr>

		<tr>
			<th>Due Amount</th><th>Amount</th><th colspan='2'>Note</th>
		</tr>
			
		<tr>
			<td>$dueAmount</td><td><input id='amount' type='text'/></td><td colspan='2'><input id='note' style='width:280px' type='text'/></td>
			
		</tr>
		<tr>
			<td colspan='3' class='noBorder'></td>
			<td ><input type='button' style='width:137px' onclick=\"keepRecordCashSaleTransaction();creditVoucher();\" value='Generate Voucher'/></td> 
		</tr>
	</table>
	
	</div>
	
	<!--End  amount-->
		";
}
function getBankList(){
$query=" SELECT DISTINCT `bank_name` FROM `bank`";
if($query_run=mysql_query($query)){
	while($query_row=mysql_fetch_assoc($query_run)){
			 $bankName=$query_row['bank_name'];
			 echo"<option>$bankName</option>";
			 }
}
else{echo"Query Failed!!";}
	
}
function updateHandCash($today,$amount){
$query="SELECT * FROM `hand_cash` WHERE `date`='$today'";
 if($query_run=mysql_query($query)){
 if(mysql_num_rows($query_run)!=NULL){
	while(@$query_row=mysql_fetch_assoc($query_run)){
			 $handCash=$query_row['amount'];
			 $updateAmount=$handCash+$amount;
			 $query="UPDATE `hand_cash` SET `amount`='$updateAmount' WHERE `date`='$today'";
			 if($query_run=mysql_query($query)){echo"hand cash Updated!!";}
			 else{echo"hand cash Updated Failed";}
			}
 }
 else{
 $query="SELECT * FROM `hand_cash` ORDER BY id DESC LIMIT 1";
 if($query_run=mysql_query($query)){
 while(@$query_row=mysql_fetch_assoc($query_run)){
			 $handCash=$query_row['amount'];
			 $amount=$handCash+$amount;
			 $query="INSERT INTO `hand_cash`(`date`,`amount`) VALUES ('$today','$amount')" ;
			  if($query_run=mysql_query($query)){
					   echo "New date and amount Added!!";
					   }
	           else  mysql_error();
			 }
			}
		
								
		              
		
	}
}
}
function updateHandCashDebit($today,$amount){
$query="SELECT * FROM `hand_cash` WHERE `date`='$today'";
 if($query_run=mysql_query($query)){
 if(mysql_num_rows($query_run)!=NULL){
	while(@$query_row=mysql_fetch_assoc($query_run)){
			 $handCash=$query_row['amount'];
			 $updateAmount=$handCash-$amount;
			 $query="UPDATE `hand_cash` SET `amount`='$updateAmount' WHERE `date`='$today'";
			 if($query_run=mysql_query($query)){echo"hand cash Updated!!";}
			 else{echo"hand cash Updated Failed";}
			}
 }
 else{
 $query="SELECT * FROM `hand_cash` ORDER BY id DESC LIMIT 1";
 if($query_run=mysql_query($query)){
 while(@$query_row=mysql_fetch_assoc($query_run)){
			 $handCash=$query_row['amount'];
			 $amount=$handCash-$amount;
			 $query="INSERT INTO `hand_cash`(`date`,`amount`) VALUES ('$today','$amount')" ;
			  if($query_run=mysql_query($query)){
					   echo "New date and amount Added!!";
					   }
	           else  mysql_error();
			 }
			}
		
								
		              
		
	}
}
}
function updateBankBalance($bankName,$bankAccount,$amount){
 //Update Bank
  $query="SELECT `balance` FROM `bank` WHERE `bank_name`='$bankName' AND `account_no`='$bankAccount'";
 if($query_run=mysql_query($query)){
	while($query_row=mysql_fetch_assoc($query_run)){
			 $balance=$query_row['balance'];
			 }
			
 }
 $updateBalance=$balance+$amount;
 $query="UPDATE `bank` SET `balance`='$updateBalance' WHERE `bank_name`='$bankName' AND `account_no`='$bankAccount'";
 if(mysql_query($query)){echo"bank Balance is update!!";}else{echo"Bank Balance update Failed";}
 }
function updateBankBalanceDebit($bankName,$bankAccount,$amount){
 //Update Bank
  $query="SELECT `balance` FROM `bank` WHERE `bank_name`='$bankName' AND `account_no`='$bankAccount'";
 if($query_run=mysql_query($query)){
	while($query_row=mysql_fetch_assoc($query_run)){
			 $balance=$query_row['balance'];
			 $updateBalance=$balance-$amount;
 $query1="UPDATE `bank` SET `balance`='$updateBalance' WHERE `bank_name`='$bankName' AND `account_no`='$bankAccount'";
 if(mysql_query($query1)){echo"bank Balance is update!!";}else{echo"Bank Balance update Failed";}
			 }
			
 }
 
 }
function updateVoucherNo(){
$query="SELECT * FROM `get_voucher_no` WHERE `id`='1'";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){echo "No row found";}
	else{
	while($query_row=mysql_fetch_assoc($query_run)){
		$current_voucher=$query_row['current_voucher'];
		}
		++$current_voucher;
		echo $query="UPDATE `get_voucher_no` SET `current_voucher`='$current_voucher' WHERE `id`='1'";
		mysql_query($query);
	//echo $invoice;
	}
	}
}
function getVoucherNo(){
	$query="SELECT * FROM `get_voucher_no` WHERE `id`='1'";
	if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){echo "No row found";}
	else{
	while($query_row=mysql_fetch_assoc($query_run)){
		$current_voucher=$query_row['current_voucher'];
		}
	//echo $invoice;
	}
	}
	else mysql_error();
return $current_voucher;
}
function newWorkOrderDisplay(){
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
						<th>Pay To</th> <th>Mobile</th> <th>Address</th>
					</tr>
					<tr>
						<td><input id='payTo' type='text'></td><td><input id='mobile' type='text'/></td><td><input id='address' type='text'/></td>
					</tr>
					<tr>		
						<th>Due Amount</th><th>Amount</th><th>Note</th>
					</tr>
						
					<tr>
						<td class='dueAmount'id=''><input id='dueAmount' type='text' /></td><td><input id='amount' type='text'/></td><td><input id='note' type='text'/></td>
					</tr> 
					
			</table>
			";	
}
function existingWorkOrderDisplay($query){

if($query_run=mysql_query($query)){
		while($query_row=mysql_fetch_assoc($query_run)){
			 $amount=$query_row['amount'];
			 $paid_amount=$query_row['paid_amount'];
			 $dueAmount=$amount-$paid_amount;
			 }
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
						<th>Pay To</th> <th>Mobile</th> <th>Address</th>
					</tr>
					<tr>
						<td><input id='payTo' type='text'></td><td><input id='mobile' type='text'/></td><td><input id='address' type='text'/></td>
					</tr>
					<tr>		
						<th>Due Amount</th><th>Amount</th><th>Note</th>
					</tr>
						
					<tr>
						<td class='dueAmount'><input id='dueAmount' type='text' value=\"$dueAmount\" readonly/></td><td><input id='amount' type='text'/></td><td><input id='note' type='text'/></td>
					</tr> 
					
			</table>
			";
			}
function existingWorkOrderDisplayCredit($query){

if($query_run=mysql_query($query)){
//echo $query;
		while($query_row=mysql_fetch_assoc($query_run)){
			 $amount=$query_row['amount'];
			 $paid_amount=$query_row['paid_amount'];
			//echo  $dueAmount=$amount-$paid_amount;
			$dueAmount=$amount-$paid_amount;
			 }
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
						<th>Pay From</th> <th>Mobile</th> <th>Address</th>
					</tr>
					<tr>
						<td><input id='payFrom' type='text'></td><td><input id='mobile' type='text'/></td><td><input id='address' type='text'/></td>
					</tr>
					<tr>		
						<th>Due Amount</th><th>Amount</th><th>Note</th>
					</tr>
						
					<tr>
						<td class='dueAmount'><input id='dueAmount' type='text' value=\"$dueAmount\" readonly/></td><td><input id='amount' type='text'/></td><td><input id='note' type='text'/></td>
					</tr> 
					
			</table>
			";
			}
function bankLoanUpdate($bankName,$bankAccount,$amount){
$query="SELECT * FROM `bank` WHERE `bank_name`='$bankName' AND `account_no`='$bankAccount'";
 if($query_run=mysql_query($query)){
	while(@$query_row=mysql_fetch_assoc($query_run)){			
			$loan=$query_row['loan'];
			$updateLoan=$loan+$amount;
			
			$query="UPDATE `bank` SET `loan`='$updateLoan' WHERE `bank_name`='$bankName' AND `account_no`='$bankAccount'";
			if($query_run=mysql_query($query)){echo"<br/>Bank Loan Update!!";}else{echo"Bank Loan Update Failed!!";}
			}
 }else{echo"Bank Account Is Not Found!!";}
 }
 function bankLoanPayUpdate($bankName,$bankAccount,$amount,$loanTransactionId){
 //Loan due amount update at credit transaction
 $query="SELECT `id`, `date`, `purpose`, `invoice_no`, `company`, `work_order`, `voucher`, `pay_from`, `mobile`, `address`, `loan_transaction_id`, `store_bank`, `store_account`, `from_bank`, `from_account`, `checque_or_tt`, `amount`, `paid_amount`, `note` FROM `credit_transaction` WHERE `loan_transaction_id`='$loanTransactionId'";
 if($query_run=mysql_query($query)){
	while(@$query_row=mysql_fetch_assoc($query_run)){			
			$paid_amount=$query_row['paid_amount'];
			$updatePaidAmount=$paid_amount+$amount;			
			$query="UPDATE `credit_transaction` SET `paid_amount`='$updatePaidAmount'  WHERE `loan_transaction_id`='$loanTransactionId'";
			if($query_run=mysql_query($query)){echo"<br/>Bank Loan Repay Update!!";}else{echo"Bank Loan Update Failed!!";}
			}
 }else{echo"Bank Account Is Not Found!!";}
 
 //bank loan update
$query="SELECT * FROM `bank` WHERE `bank_name`='$bankName' AND `account_no`='$bankAccount'";
 if($query_run=mysql_query($query)){
	while(@$query_row=mysql_fetch_assoc($query_run)){			
			$loan=$query_row['loan'];
			$updateLoan=$loan-$amount;			
			$query="UPDATE `bank` SET `loan`='$updateLoan' WHERE `bank_name`='$bankName' AND `account_no`='$bankAccount'";
			if($query_run=mysql_query($query)){echo"<br/>Bank Loan Repay Update!!";}else{echo"Bank Loan Update Failed!!";}
			}
 }else{echo"Bank Account Is Not Found!!";}
 }
 function bankLoanPayDelete($bankName,$bankAccount,$amount,$loanTransactionId){
 //Loan due amount update at credit transaction
 $query="SELECT `id`, `date`, `purpose`, `invoice_no`, `company`, `work_order`, `voucher`, `pay_from`, `mobile`, `address`, `loan_transaction_id`, `store_bank`, `store_account`, `from_bank`, `from_account`, `checque_or_tt`, `amount`, `paid_amount`, `note` FROM `credit_transaction` WHERE `loan_transaction_id`='$loanTransactionId'";
 if($query_run=mysql_query($query)){
	while(@$query_row=mysql_fetch_assoc($query_run)){			
			$paid_amount=$query_row['paid_amount'];
			$updatePaidAmount=$paid_amount-$amount;			
			$query="UPDATE `credit_transaction` SET `paid_amount`='$updatePaidAmount'  WHERE `loan_transaction_id`='$loanTransactionId'";
			if($query_run=mysql_query($query)){echo"<br/>Bank Loan Repay Update!!";}else{echo"Bank Loan Update Failed!!";}
			}
 }else{echo"Bank Account Is Not Found!!";}
 
 //bank loan update
$query="SELECT * FROM `bank` WHERE `bank_name`='$bankName' AND `account_no`='$bankAccount'";
 if($query_run=mysql_query($query)){
	while(@$query_row=mysql_fetch_assoc($query_run)){			
			$loan=$query_row['loan'];
			$updateLoan=$loan+$amount;			
			$query="UPDATE `bank` SET `loan`='$updateLoan' WHERE `bank_name`='$bankName' AND `account_no`='$bankAccount'";
			if($query_run=mysql_query($query)){echo"<br/>Bank Loan Repay Update!!";}else{echo"Bank Loan Update Failed!!";}
			}
 }else{echo"Bank Account Is Not Found!!";}
 }
?>