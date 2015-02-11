function popUpShow(popUpDivName){
		document.getElementById(popUpDivName).style.display='block';
		document.getElementById('fade').style.display='block';
		}
function poUpHide(popUpDivName){
		document.getElementById(popUpDivName).style.display='none';
		document.getElementById('fade').style.display='none';
		}
function deletePopUp(popUpDivName,id){

		if(popUpDivName=='DeleteConformationCreditTransaction'){
		//
		var a= document.getElementById("saveIdCreditForDelete");
		a.value = id;
		}
		else if(popUpDivName=='DeleteConformationDebitTransaction'){
		//
		var a= document.getElementById("saveIdForDebitDelete");
		a.value = id;
		}
		else {
		var a= document.getElementById("saveIdForDelete");
		a.value = id;
		}
		document.getElementById(popUpDivName).style.display='block';
		document.getElementById('fade').style.display='block';
		
}
//,item_name,item_part_no,item_brand,item_quantity,item_price
function editPopUp(popUpDivName,id,item_quantity,item_price){
//saveId(id);
	
var a= document.getElementById("saveIdForEdit");a.value = id;

var c= document.getElementById("editItem_quantity");c.value = item_quantity;
var c= document.getElementById("editItem_price");c.value = item_price;
		
  

document.getElementById(popUpDivName).style.display='block';
		document.getElementById('fade').style.display='block';
	
		
}
//====================Drag Enable 
