<div style="display:none;">
	<?php
	 include"../php_internalTransaction.php";
	?>
	</div>
<div class="section fix">
	<table id="test">
	<tr>
		<th>Work Order</th><th>Invoice</th>
	</tr>
	<tr>
	<td><input onkeydown="if (event.keyCode == 13) searchExistnessForWorkOrderOrInvoiceBank();"id='workOrder' type="text"/></td>
	<td><input onkeydown="if (event.keyCode == 13) searchExistnessForWorkOrderOrInvoiceBank();" id='invoice' type="text"/></td>
	<td ><input type="button"  onclick="searchExistnessForWorkOrderOrInvoiceBank();" value="submit"/></td>
	</tr>
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
				<input id='chequeNumber' type="text" placeholder="Cheque Number"/>
			</td>
		
		</tr>
	</table>
</div>
<div class=" fix" id="generateVoucher" style='display:none;'>
		
		<table>
			<tr>
				<td class="noBorder" style='width:317px' ></td>
				<td class=""><input  class='submit' type="button" onclick="debitInfoWithWorkOrderAndInvoiceBank();debitVoucher();" value="Generate Voucher"></td> 
			</tr>
		</table>	
	</div>
<div id='massage'></div>
