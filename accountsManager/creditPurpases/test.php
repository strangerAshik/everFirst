

<div class="section fix" id="loan"  >


	<div style="display:none;">
	<?php
	 include"../php_internalTransaction.php";
	?>
	</div>
			
<div id="commonContent" >
<!--Start Source Description--> 
	<div class="section fix" id="sourceDescription" style="margin:10px auto; " >
	<input style="display:none;" id="voucherNo" value="<?php echo @$in=getVoucherNo();?>"/>
	<table>
	<tr>
	<th>Voucher No</th><td style='color:#E04343;'><?php echo @$voucherNo=getVoucherNo();?></td>
	</tr>
	<tr>
	<th>Date</th><td  style='color:#E04343;'><?php echo $today = date("j F, Y");?></td>
	</tr>
	<tr>
	<th>Loan Transaction Id</th><td><input id='loanTransactionId' style='width:168px;' type="text"/></td>
	</tr>
		
		<tr>
			<th>Bank Name</th><th>Account No</th>
		</tr>		
		<tr>
			<td>
			
			<select id='bankName' onchange='getThisBankAccounts();'>
				<option>--Select Bank--</option>
				<?php getBankList();
				?>
			</select>
			</td>
			<td>
			<select id='bankAccount'>
				<option>--Select Bank First--</option>				
			</select>
			</td>		
		</tr>
	
		<tr>
			<th>Amount</th><th>Note</th>
		</tr>
			
		<tr>
		<td><input id='amount' style='width:168px;' type="text"/></td><td><input id="note" style='width:168px;' type="text"/></td>
		</tr>
	</table>
	</div>
	<!--End Source Description-->
	<!--Start amount-->

	<div class="section fix" id="amountAndNote">
	<table>
		
	</table>
	<table>
		<tr>
			<td class="noBoder" style="width:500px;visibility:hidden;"></td>
			<td class="noBorder"><input type="button" onclick="keepRecordBankLoanCash();creditVoucher();" value="Generate Voucher"></td> 
		</tr>
	</table>
	</div>
	<div id='massageLoan'>	</div>
	<!--End  amount-->
</div>