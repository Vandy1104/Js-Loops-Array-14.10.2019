console.log('Hello Arrays');

var names = ['Lucy','Peter','Antony','Yuli','Julie','Chelsea','Candy','Mohammed','Ali'];

// document.getElementById('result').innerHTML = '<br>' + names[3];
//
// document.getElementById('result').innerHTML += '<br>' + names[1];
//
// document.getElementById('result').innerHTML += '<br>' + names[2];
//
// document.getElementById('result').innerHTML += '<br>' + names[0];
//
// document.getElementById('result').innerHTML += '<br>' + names;


// for (var i = 0; i < 4; i++) {
//
//   document.getElementById('result').innerHTML += '<br>' + names[i];
//
// }

//Searching for Peter in the list.
// for (var i = 0; i < 4; i++) {
//   if (names[i] === 'Peter') {
//     document.getElementById('result').innerHTML = '<br> Yes ' + names[i] + ' is found in the list';
//     break;
//   } else {
//     document.getElementById('result').innerHTML = '<br> Sorry ' + 'Peter' + ' is not found in the list';
//   }
// }

// Find Highest age in the list.
// var age = [30,49,22,43,45,79,12,120,58];
//   var highestAge = 0;
// for (var i = 0; i < 9; i++) {
//   if (highestAge < age[i]) {
//     highestAge = age[i];
//     //alert (i);
//     console.log(i);
//     var listIndex = i;
//   }
// }

// Using for instead switch.

// document.getElementById('result').innerHTML += '<br> The Highest Age is ' + highestAge ;
//
// for (var j = 0; j<9; j++){
//   if (j === listIndex) {
//     document.getElementById('result').innerHTML += '<br>' +  names[j] + ' is the eldest ' ;
//   }
// }

// Use of unshift to add element in the array list in the beginning.
// var fruits = ['Banana', 'Apple'];
// document.getElementById('result').innerHTML = fruits;
//
// function myFunction(){
//   fruits.unshift('Avacodo');
//   document.getElementById('result').innerHTML = fruits.join("*");
// }

// function myFunction(){
//   fruits.pop();
//   document.getElementById('result').innerHTML = fruits;
// }


//Merge age with related names.
// switch (listIndex) {
//   case 0:
//   console.log(i);
//   document.getElementById('result').innerHTML += '<br>' + 'Lucy is the eldest' ;
//   break;
//
//   case 1:
//   document.getElementById('result').innerHTML += '<br>' + 'Peter is the eldest' ;
//   break;
//
//   case 2:
//   document.getElementById('result').innerHTML += '<br>' + 'Antony is the eldest' ;
//   break;
//
//   case 3:
//   document.getElementById('result').innerHTML += '<br>' + 'Yuli is the eldest' ;
//   break;
// }


var e1p1 = prompt('Employee 1, Please Enter project1 number');
var e1p2 = prompt('Employee 1, Please Enter project2 number');
var e1p3 = prompt('Employee 1, Please Enter project3 number');
e1Total = e1p1 + e1p2 + e1p3;


var e2p1 = prompt('Employee 2, Please Enter project1 number');
var e2p2 = prompt('Employee 2, Please Enter project2 number');
var e2p3 = prompt('Employee 2, Please Enter project3 number');
e2Total = e2p1 + e2p2 + e2p3;

var project1 = e1p1 + e2p1;
var project2 = e1p2 + e2p2;
var project3 = e1p3 + e2p3;
