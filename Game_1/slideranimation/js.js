var item=document.querySelectorAll('.item');

function ArrImg(papa){ 
for(var i=1;i<9;i++){
var block=document.createElement('div');
block.className='arr';
block.style.backgroundImage="url(images/"+i+".png)";
papa.append(block)
}

}

function ItemFill(){
	for(var i=0;i<item.length;i++){ 
	var kk=item[i];
	ArrImg(kk);
	console.log(i);
	}
	
}
ItemFill();
var t=0;
var q=0;
start.onclick = function(){
	if (q <1 ) {
		function Animate(){ 
			if(t<-1200){t=0;t=t-150;}
			else{t=t-150;}
			item[0].firstElementChild.style.marginTop=t-150+"px";
			item[1].firstElementChild.style.marginTop=t+0+"px";
			item[2].firstElementChild.style.marginTop=t+300+"px";
		}
		setInterval(Animate,300);
		q++
		}
		else {
		q--
		}
	console.log(q);
}	


