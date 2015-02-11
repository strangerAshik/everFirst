<div class="section fix">
	<table id="test">
	
	<tr><th>Work Order</th>
	<td><input id='workOrder' onkeydown="if (event.keyCode == 13) searchExistnessWorkOrderForRepayAdvancePay();" type="text"/></td>
	<td ><input type="button"  onclick="searchExistnessWorkOrderForRepayAdvancePay();" value="submit"/></td></tr>
	</table>
</div>
<div id="commonContent"></div>
<div class="section fix" id="generateVoucher" style='display:none;'>
		<table>
			<tr>
				<td class="noBorder" style='width:317px' ></td>
				<td class=""><input  class='submit' type="button" onclick="repayAdvanceCash();creditVoucher();" value="Generate Voucher"></td> 
			</tr>
		</table>	
	</div>
<div id='massage'></div>