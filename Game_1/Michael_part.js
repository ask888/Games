



var arr = [];
function run(){
	for (var a=[8,7,3,4,5,6,7,8,8,7,6,5,4,3,2,1,5,6,7,8,4,3,2,8,1,2,3,4,5,6,7,8], i = a.length; i--; ) {
    	var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    	arr.push(random);
	}
}
run();
console.log(arr);

// var arr = [];
//    function rand( min, max ) { // Generate a random integer
//        if( max ) {
//            return Math.floor(Math.random() * (max - min + 1)) + min;
//        } else {

//            return Math.floor(Math.random() * (min + 1));
//        }
//    }

//    function rek(array, x){
//        if(x>0){
//            array [x-1] = rand(1,8);
//            rek(array, x-1);
//        }
//        return array;


//    }

//    console.log(rek(arr, 3));
//    console.log