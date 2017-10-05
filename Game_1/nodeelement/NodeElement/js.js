var item=document.querySelectorAll('.item');

function RandPosition(){ 

for(i=0;i< item.length;i++){ 
item[i].innerHTML=rand();

}

}




function rand(){
	return Math.floor(Math.random()*8);
	
	
}
	
	
	start.onclick=RandPosition;
	
	
	
	
	
	
	
	
	
	
	
	
	