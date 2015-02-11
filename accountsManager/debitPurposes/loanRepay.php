<div style="display:none;">
	<?php
	 include"../php_internalTransaction.php";
	?>
</div>

		<div class="section fix" id="loan" >

	<table>
	<tr>
	<th>Loan Transaction Id</th>
	<td><input onkeydown="if (event.keyCode == 13) searchLoanTransaction();" id='loanTransactionId' type="text"/></td>
	<td><input onclick="searchLoanTransaction();" type="button" value="submit"/></td></tr>
	</table>
	</div>




	<div class="section fix" id="commonContent"></div>
	
	<div class=" fix" id="generateVoucher" style='display:none;' >
		
		<table>
			<tr>
				<td class="noBorder" style='width:454px' ></td>
				<td class=""><input class='submit' type="button" onclick="loanRepayCash();debitVoucher();" value="Generate Voucher"></td> 
			</tr>
		</table>	
	</div>
<div id='massageloanRepayCash'></div>