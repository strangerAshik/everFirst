function autoComplete(key,displayId,inputBoxId,fieldName,tableName){


if(key==''){document.getElementById(displayId).style.visibility = "hidden";}

else{
document.getElementById(displayId).style.visibility = "visible";

}
var xmlhttp;
if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	
    test=document.getElementById(displayId);
	test.innerHTML=xmlhttp.responseText;
    }
  }
  params="key="+key+"&displayId="+displayId+"&inputBoxId="+inputBoxId+"&tableName="+tableName+"&fieldName="+fieldName;
  xmlhttp.open("POST","../php/autoComplete.php",true);	
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send(params); 

}
function set(value,displayId,inputBoxId){
document.getElementById(inputBoxId).value=value;
document.getElementById(displayId).style.visibility = "hidden";
}