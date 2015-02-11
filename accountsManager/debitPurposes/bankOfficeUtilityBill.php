<div style="display:none;">
	<?php
	 include"../php_internalTransaction.php";
	?>
</div>
<div class="section fix" id="workOrder"  >
	<table id="differentSeclect">
	<tr><th style='width:175px'>Utility Type:</th>
	<td >
		<select id="utilityType">
			<option>--Select Utility--</option>
			<option>Electricity</option>
			<option>Gas</option>
			<option>Water</option>
			<option>Other</option>
		</select>
	</td></tr>
	<tr><th>Utility Bill No</th>
	<td><input onkeydown="if (event.keyCode == 13) searchExistnessOfUtilityTypeAndBillNoBank();" id='billNo' type="text"/></td>
	<td class='noBorder'><input style='width:100px;float:right' type="button" value="submit" onclick="searchExistnessOfUtilityTypeAndBillNoBank()" class="submit "></td>
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
<div class="section fix" id="generateVoucher" style='display:none;'>
		<table>
			<tr>
				<td class="noBorder" style='width:317px' ></td>
				<td class=""><input  class='submit' type="button" onclick="utilityBillBank();debitVoucher();" value="Generate Voucher"></td> 
			</tr>
		</table>	
	</div>
<div id='massage'></div>