function sumar(){
	if(localStorage.getItem("total")===null){
		localStorage.setItem('total',1);
	}else{
		localStorage.setItem('total',parseInt(localStorage.getItem('total'))+1);
	}
	document.getElementById("total").innerHTML=localStorage.getItem("total");
}
window.onload=function(){
	if(localStorage.getItem("total")===null){
		document.getElementById("total").innerHTML=0;
	}else{
		document.getElementById("total").innerHTML=localStorage.getItem("total");
	}
}