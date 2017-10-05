var col1=document.getElementById('col-1');
var col2=document.getElementById('col-2');
var col3=document.getElementById('col-3');

function ArrImg(papa) {
	var array = misha();
	for (var i = 1; i < 32; i++) {
		var block = document.createElement('div');
		block.className = 'arr';
		block.style.backgroundImage = "url(images/" + array[i] + ".png)";
		papa.append(block);
	}
}

function ItemFill(mama){
		var kk=mama;
 	  ArrImg(kk);
}

function misha(){
	for (var a=[8,7,3,4,5,6,7,8,8,7,6,5,4,3,2,1,5,6,7,8,4,3,2,8,1,2,3,4,5,6,7,8], i = a.length; i--; ) {
		var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
		arr.push(random);
		return random;
	}
}

ItemFill(col1);
ItemFill(col2);
ItemFill(col3);




// var item=document.querySelectorAll('.item-ex');
// var start = document.getElementById('start');
//
// function ArrImg(item){
// for(var i=1;i<9;i++){
// var block=document.createElement('div');
// block.className='arr';
// block.style.backgroundImage="url(images/"+i+".png)";
// item.append(block);
// }
//
// }
//
// function ItemFill(){
// 	for(var i=0;i<item.length;i++){
// 	var kk=item[i];
// 	ArrImg(kk);
// 	console.log(i);
// 	}
//
// }
//
// ItemFill();
// var t=0;
//
// // function Animate(){
// // if(t<-1200){t=0;t=t-150;}
// // else{t=t-150;}
// // item[0].firstElementChild.style.marginTop=t+"px";
// //
// //
// // }
// //
// // 	setInterval(Animate,300);
//
//
//
//
