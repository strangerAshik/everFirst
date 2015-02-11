<div class="section fix" id="workOrder"  >
	<table id="bankInfo">
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
	<td><input onkeydown="if (event.keyCode == 13) searchExistnessOfUtilityTypeAndBillNo();" id='billNo' type="text"/></td>
	<td class='noBorder'><input style='width:100px;float:right' type="button" value="submit" onclick="searchExistnessOfUtilityTypeAndBillNo()" class="submit "></td>
	</tr>
	
	</table>

	<table>
		
	</table>

</div>
<div id="commonContent"></div>
<div class="section fix" id="generateVoucher" style='display:none;'>
		<table>
			<tr>
				<td class="noBorder" style='width:317px' ></td>
				<td class=""><input  class='submit' type="button" onclick="utilityBillCash();debitVoucher();" value="Generate Voucher"></td> 
			</tr>
		</table>	
	</div>
<div id='massage'></div>