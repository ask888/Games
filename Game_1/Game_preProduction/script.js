/* Однорукий код */

var col1=document.getElementById('col-1');
var col2=document.getElementById('col-2');
var col3=document.getElementById('col-3');

var rateInp = document.getElementById('rate');
var wrap = document.getElementsByClassName('wrap');
var button = document.getElementById('start');
var wallet = 2000;

/* ВВод имени-суперкода */
var code1 = 'Batman';
var code = prompt('Введите Имя');

/* Проверка кода */
    if(code === code1){
        var array1 = run_misha_run1();
        var array2 = run_misha_run1();
        var array3 = run_misha_run1();   
    } else {
        var array1 = run_misha_run();
        var array2 = run_misha_run();
        var array3 = run_misha_run();
    }
/* Конец проверки кода */

var rate = 100;
rateInp.oninput = function() {
	rate = rateInp.value;
}
max_creating(col1, array1);
max_creating(col2, array2);
max_creating(col3, array3);


/* При клике */

button.onclick = function () {
    wallet = wallet - rate;
    document.clear();

    var index1 = dima_random();
    var index2 = dima_random();
    var index3 = dima_random();

    max_counts(array1, array2, array3, index1, index2, index3);
    
    var inp = document.getElementById('wallet');
    inp.value = Math.floor(wallet);
		var mon = document.getElementById('money');
		mon.value = Math.floor(wallet);
		
    if (wallet < 0) {
        var red = document.createElement('div');
        red.className = 'red';
        red.innerHTML = "GAME OVER!";
        red.style.color = 'red';
        document.body.appendChild(red);
    }
	

    Animate(index1, col1);
    Animate(index2, col2);
    Animate(index3, col3);
}

function Animate(index, col){
    var t = 0;
    if(t<-2240) {
        t=0;
        t=index*(-70);
    }
    else
        t=index*(-70);
    col.firstElementChild.style.marginTop=t+"px";
	
}

setTimeout(Animate, 1000);

/* Фича Макса, честно спионереная из фичи Владимира*/

function max_creating(papa, array) {

    for (var i = 0; i < 32; i++) {
        var block = document.createElement('div');
        block.className = 'arr';
        block.style.backgroundImage = "url(images/" + array[i] + ".png)";
        papa.appendChild(block);

    }
}

/* Конец фичи Макса */

/* Фича Мишы, которую за него писали индусы с кодом*/

function run_misha_run1(){
    var arr = [];
    for (var a=[1,1,1,2,2,2,1,1,1,2,2,2,4,3,2,1,5,6,4,3,4,3,2,3,1,2,3,4,5,6,4,3], i = a.length; i--;) {
        var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        arr.push(random);
    }
    console.log(arr);
    return arr;
}

/* Фича Мишы, которую за него писали индусы без кода*/

function run_misha_run(){
    var arr = [];
    for (var a=[8,7,3,4,5,6,7,8,8,7,6,5,4,3,2,1,5,6,7,8,4,3,2,8,1,2,3,4,5,6,7,8], i = a.length; i--;) {
        var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        arr.push(random);
    }
    console.log(arr);
    return arr;
}
/* Конец фичи от Миши */

/* Ключевая фича Димы */

function dima_random() {
    var a = Math.floor(Math.random()*29/*(29-8+1)+8*/);
    console.log(a);
    return a;
}

/* Конец фичи Димы */

/* Очень заковыристая фича Майи */

function comparing_with_maya(a, b, c) {
    if((a==b) && (a==c))
        return true;
    else
        return false;
}

/* Конец фичи Майи */

/* Еще фичи Макса */

function max_counts(ar1, ar2, ar3, i1, i2, i3) {

    var a1 = ar1[i1];   var a2 = ar2[i2];   var a3 = ar3[i3];

    var b1 = ar1[i1+1]; var b2 = ar2[i2+1]; var b3 = ar3[i3+1];

    var c1 = ar1[i1+2]; var c2 = ar2[i2+2]; var c3 = ar3[i3+2];

    if (comparing_with_maya(a1, a2, a3))
        wallet = wallet + max_score(a1);
    if (comparing_with_maya(b1, b2, b3))
        wallet = wallet + max_score(b1);
    if (comparing_with_maya(c1, c2, c3))
        wallet = wallet + max_score(c1);
    if (comparing_with_maya(a1, b2, c3))
        wallet = wallet + max_score(a1);
    if (comparing_with_maya(c1, b2, a3))
        wallet = wallet + max_score(c1);
    if ((a1 == a2) && (a3!=a1))
        wallet = wallet + max_score_small(a1);
    if ((a2 == a3) && (a1!=a2))
        wallet = wallet + max_score_small(a2);
    if ((b1 == b2) && (b3!=b1))
        wallet = wallet + max_score_small(b1);
    if ((b2 == b3) && (b1!=b2))
        wallet = wallet + max_score_small(b2);
    if ((c1 == c2) && (c3!=c1))
        wallet = wallet + max_score_small(c1);
    if ((c2 == c3) && (c1!=c3))
        wallet = wallet + max_score_small(c2);
    if ((c1 == b2) && (b2!=a3))
        wallet = wallet + max_score_small(c1);
    if ((b2 == a3) && (c1!=a3))
        wallet = wallet + max_score_small(b2);
    if ((a1 == b2) && (b2!=c3))
        wallet = wallet + max_score_small(a1);
    if ((b2 == c3) && (b2!=a1))
        wallet = wallet + max_score_small(b2);
    if (b1 == a2)
        wallet = wallet + max_score_small(b1);
    if (a2 == b3)
        wallet = wallet + max_score_small(a2);
    if (b3 == c2)
        wallet = wallet + max_score_small(b3);
    if (c2 == b1)
        wallet = wallet + max_score_small(c2);
}

function max_score(num) {
    var value = 0;
    switch(num) {
        case 1:
            value = 30*rate;
            break;
        case 2:
            value = 15*rate;
            break;
        case 3:
            value = 10*rate;
            break;
        case 4:
            value = 8*rate;
            break;
        case 5:
            value = 7*rate;
            break;
        case 6:
            value = 5*rate;
            break;
        case 7:
            value = 3*rate;
            break;
        case 8:
            value = 2*rate;
            break;
    }
    return value;
}
function max_score_small(num) {
    var value = 0;
    switch(num) {
        case 1:
            value = rate*0.5;
            break;
        case 2:
            value = rate*0.4;
            break;
        case 3:
            value = rate*0.3;
            break;
        case 4:
            value = rate*0.2;
            break;
        case 5:
            value = rate*0.1;
            break;
        case 6:
            value = rate*0.08;
            break;
        case 7:
            value = rate*0.05;
            break;
        case 8:
            value = rate*0.03;
            break;
    }
    return value;
}

// // начать повторы с интервалом 2 сек
// var timerId = setInterval(function() {
// }, 1000);
//
// // через 5 сек остановить повторы
// setTimeout(function() {
// 	clearInterval(timerId);
// 	alert( 'стоп' );
// }, 5000);

/* Конец фич Макса */

/* Фича Владимира, которую он отдал нам добровольно и без комиссионных */

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
