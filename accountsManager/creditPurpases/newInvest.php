	<div style="display:none;">
	<?php
	 include"../php_internalTransaction.php";
	?>
	</div>
<div id="commonContent" >
<!--Start Source Description-->


	<div class="section fix" id="sourceDescription"  >
	<input style="display:none;" id="voucherNo" value="<?php echo @$in=getVoucherNo();?>"/>
	<table>
		<tr>
		<th>Voucher No</th><td style='color:#E04343;' colspan='2'><?php echo @$voucherNo=getVoucherNo();?></td>
		</tr>
		<tr>
		<th>Date</th><td  style='color:#E04343;' colspan='2'><?php echo $today = date("j F, Y");?></td>
		</tr>
		<tr><th colspan='3'>Work Order</th></tr>
		<tr><td colspan='3'><input id='workOrder' style="width:425px;"type="text"/></td></tr>
		<tr>
			<th>Pay From</th><th>Mobile</th><th>Address</th>
		</tr>
			
		<tr><td><input id='payFrom' type="text"></td><td><input id='mobile' type="text"/></td><td><input id='address' type="text"/></td>
		</tr>
		<tr>
			<th>Amount</th><th colspan='2'>Note</th>
		</tr>
			
		<tr>
		<td><input id='amount' type="text"/></td><td colspan='2'><input id='note' style="width:282px;" type="text"/></td>
		</tr>
	</table>
	</div>
	<!--End Source Description-->
	<!--Start amount-->
	
	<div class="section fix" id="amountAndNote"  >
	<table>
		
	</table>
	<table>
		<tr>
			<td class="noBoder" style="width:500px;visibility:hidden;"></td>
			<td class="noBorder"><input type="button" onclick="keepRecorNewInvestCash();creditVoucher();" value="Generate Voucher"></td> 
		</tr>
	</table>
	</div>
	<div id="massage"></div>
	<!--End  amount-->
</div>