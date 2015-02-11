<div class="section fix">
	<table id="test">
	<tr>
		<th>Work Order</th><th>Invoice</th>
	</tr>
	<tr>
	<td><input onkeydown="if (event.keyCode == 13) searchExistnessForWorkOrderOrInvoice();" id='workOrder' type="text"/></td>
	<td><input onkeydown="if (event.keyCode == 13) searchExistnessForWorkOrderOrInvoice();" id='invoice' type="text"/></td>
	<td ><input type="button"  onclick="searchExistnessForWorkOrderOrInvoice();" value="submit"/></td>
	</tr>
	</table>
</div>
<div id="commonContent"></div>
<div class="section fix" id="generateVoucher" style='display:none;'>
		<table>
			<tr>
				<td class="noBorder" style='width:317px' ></td>
				<td class=""><input  class='submit' type="button" onclick="debitInfoWithWorkOrderAndInvoiceCash();debitVoucher();" value="Generate Voucher"></td> 
			</tr>
		</table>	
	</div>
<div id='massage'></div>