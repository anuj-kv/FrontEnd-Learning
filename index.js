//DOM Manipulation
// getElementbyId()
//const title = document.getElementById("main-heading");
// getElementbyClassName()
// const listItems = document.getElementsByClassName('list-items');
// //const list=document.getElementsByClassName('list-items');
// console.log(listItems);
//  for(i=0; i<listItems.length; i++){
//    console.log(listItems[i])
// }
// getElementbyTagName()
//const item = document.getElementsByTagName('div');
//console.log(item);
// querySelector()
//console.log(document.querySelector('.container'));
// querySelectorAll()
//console.log(document.querySelector('.container'));


// const title = document.getElementById('main-heading');
// //title.style.color = 'red';

// const list = document.querySelectorAll('.list-items');
// for(i=0; i<list.length;i++){
//     list[i].style.color = 'pink';
// }

//Styling Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');
li.innerText = 'Fast and Furious';
ul.append(li);
//li.innerContent
//li.innerHTML


//Modifying attribute 
li.setAttribute('id', 'main-heading');




//li.removeAttribute('id');
