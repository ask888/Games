var numRand = [];
var number = '';
var a = document.getElementsByClassName('numHolder');
var d = '';


/* Генеруємо рандомний масив чисел */
	for (let a=[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12], i = a.length; i--; ) {
    	var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    	numRand.push(random);
	}

/* Створюємо блоки */
    for(i=0;i<numRand.length;i++){
    		number += '<div id="'+i+'" class="numHolder">'; // добавила еще и класс, чтобы мне в коде легче было цеплять
    	// событие
    		number += '</div>';
    }
    document.getElementById('wrap').innerHTML = number;

/* Запихуємо в блоки зображення */    
    for (i=0;i<numRand.length;i++){
        var z = document.getElementById(''+i+'');
        z.style.backgroundImage += 'url("images/'+numRand[i]+'.png")';
    }


/* Розбираємо блоки та клікаємо */ 
    for(let i = 0; i < a.length; i++) {
        a[i].onclick = onClick;
    }
    function onClick(e) {
      var  m = e.target.style.backgroundImage;
        console.log(m)
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


