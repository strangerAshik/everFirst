<div style="display:none;">
	<?php
	 include"../php_internalTransaction.php";
	?>
</div>
<div id="commonContent" >
	<div class="section fix" id="sourceDescription" >
	<input style="display:none;" id="voucherNo" value="<?php echo @$in=getVoucherNo();?>"/>
	<table>
	<tr>
	<th>Voucher No</th><td style='color:#E04343;'><?php echo @$voucherNo=getVoucherNo();?></td>
	</tr>
	<tr>
	<th>Date</th><td  style='color:#E04343;'><?php echo $today = date("j F, Y");?></td>
	</tr>
		<tr>
			<th>Vehicle Number</th><th ><input id='vehicleNumber'  onkeyup="autoComplete($('#vehicleNumber').val(),'existingVehicleNumber','vehicleNumber','vehicle_no',' debit_transaction' );" type="text"/></th>
		</tr>
		<tr>
			<td class='noBorder'></td><td class="autoCompBoxPositioning noBorder"   id='existingVehicleNumber'></td>
		</tr>
		<tr>
			<th>Pay To</th><th>Mobile</th><th>Address</th>
		</tr>
			
		<tr>
		<td><input id='payTo'type="text"></td><td><input id='mobile' type="text"/></td><td><input id='address' type="text"/></td>
		</tr>
		<tr>
			<th>Reason</th><th>Amount</th><th>Note</th>
		</tr>
			
		<tr>
		<td id='differentSeclect'>
			<select id='reason'>
				<option>--Select Reason--</option>
				<option>Gas</option>
				<option>Oil</option>
				<option>Repair</option>
				<option>Other</option>
			</select>
		</td>
		<td><input id='amount' type="text"/></td><td><input id='note' type="text"/></td>
		</tr>
		<tr>
			<td class="noBorder"></td>	<td class="noBorder"></td>
			<td class="noBorder"><input style='float:right;' onclick="vehicleMaintenanceCash();debitVoucher();" type="button" value="Generate Voucher"></td> 
		</tr>
	</table>
	</div>
<div id='massage'></div>
</div>