<div style="display:none;">
	<?php
	 include"../php_internalTransaction.php";
	?>
</div>
<div class="section fix">
	<table id="test">
	<tr><th>Work Order</th>
	<td><input id='workOrder' onkeydown="if (event.keyCode == 13) searchExistnessWorkOrderForRepayAdvancePayBank();" type="text"/></td>
	<td ><input type="button"  onclick="searchExistnessWorkOrderForRepayAdvancePayBank();" value="submit"/></td></tr>
	</table>
</div>
<div id="commonContent"></div>
<div class=" fix" id='bankInfo' style='display:none'>
<table >
		<tr>
			<th>Bank Name</th><th>Account No</th><th>Cheque Number</th>
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
			<td>
				<input type="text" placeholder="Cheque Number"/>
			</td>
		
		</tr>
	</table>
</div>
<div class=" fix" id="generateVoucher" style='display:none;'>
		
		<table>
			<tr>
				<td class="noBorder" style='width:317px' ></td>
				<td class=""><input  class='submit' type="button" onclick="repayAdvanceCashBank();creditVoucher();" value="Generate Voucher"></td> 
			</tr>
		</table>	
	</div>
<div id='massage'></div>
