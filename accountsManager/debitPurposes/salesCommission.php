
<div class="section fix" id="workOrderInvoice" >
	<table>
	<tr><th>Invoice</th></tr>
	<tr><td><input onkeydown="if (event.keyCode == 13) searchExistnessOfInvoice();" id='invoice' type="text"/></td><td class="noBorder">
	<input onclick="searchExistnessOfInvoice()" type="button" value="submit"/>
	</td></tr>
	</table>
	
</div>

<!--Start Source Description-->
	<div class="section fix" id="commonContent">

	</div>
	<!--End Source Description-->
	<!--Start amount-->
	
<div class=" fix" id="generateVoucher" style='display:none;' >
		
		<table>
			<tr>
				<td class="noBorder" style='width:454px' ></td>
				<td class=""><input class='submit' type="button" onclick="saleCommissionCash();debitVoucher();" value="Generate Voucher"></td> 
			</tr>
		</table>	
	</div>
<div id='massage'></div>