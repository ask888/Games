var numRand = [];
var number = '';

var cart = 0;
var flag = 0;
var d = '';

var wrap = document.getElementById('wrap');

/* Генеруємо рандомний масив чисел */
	for (var a=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], i = a.length; i--; ) {
    	var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    	numRand.push(random);
	}

/* Створюємо блоки */
var h = 140,
	w = 100,
	margin = 5;
for (var i=0; i<5; i++) {
	for (var j=0; j<4; j++) {
		var block = document.createElement('div');
		block.classList.add('cards');
		block.style.top = j * h + j * margin + 'px';
		block.style.left = i * w + i * margin + 'px';
		wrap.appendChild(block);

		var fig2 = document.createElement('figure');
		fig2.classList.add('frontHolder');
		block.appendChild(fig2);
	}
}

var n = document.getElementsByClassName('cards');

/* Запихуємо в блоки зображення */    
    for (i=0;i<numRand.length;i++){
        
        // getElementById(''+i+'');
        n[i].style.backgroundImage = 'url("images/'+numRand[i]+'.png")';
    }


/* Розбираємо блоки та клікаємо */ 
for(var i = 0; i < n.length; i++) {
	n[i].onclick = onClick;
}

function onClick (e) {
		this.classList.toggle('card');
		var  m = e.target.style.backgroundImage;
		console.log(e)
		if (d === ''){
        d = m;
        e.target.style.borderColor = 'red';
        e.target.onclick = null;
      } else if (d===m) {
        d = '';
        e.target.style.borderColor = 'red';
        e.target.onclick = null;

        console.log('OK');
      } else {
        console.log('WRONG');
    }

}


