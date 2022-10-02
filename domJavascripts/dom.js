
        //EXAMINE DOCUMENT OBJECTS
        // // console.dir(document);
        // console .log(document.domain);
        // console .log(document.URL);
        // console .log(document.title);
        // // document.title = 123;
        // console.log(document.doctype);
        // console .log(document.head);
        // console .log(document.body);
        // console .log(document.all);
        // console .log(document. all[13]);
        //  document.all[13].textContent ='hii';
        // console.log(document.forms)
        // console.log(document.links) 
        // console.log(document.images)

        //GETELEMENTBYID//

        // console.log(document.getElementById('header-title'));
        // var headerTitle = document.getElementById('header-title');  
        // var header = document.getElementById('main-header');   
        //   console.log(headerTitle);
        //  headerTitle.textContent = 'hello';
        //  headerTitle.innerText = 'goodbye';
        // console.log(headerTitle.innerText);
        // headerTitle.innerHTML = '<h3>hello</h3>';
        // headerTitle.style.borderBottom = 'solid 3px red';

        //GETELEMENTBYCLASSNAME//

        // var items = document.getElementsByClassName('list-group-items');
        // console.log(items);
        // console.log(items[1]);
        // items[1].textContent ='hello 2';
        // items[1].style.backgroundColor ='steelBlue';


        // //Gives error//
        // // items.style.backgroundColor ='yellow';

        // for(var i = 0; i < items.length; i++){
        //         items[i].style.backgroundColor ='grey';
        // }
         //GETELEMENTBYTAGNAME//
         

        // var li = document.getElementsByTagName('list-group-items');
        // console.log(li);
        // console.log(li[1]);
        // li[1].textContent ='hello 2';
        // li[1].style.backgroundColor ='steelBlue';


        // //Gives error//
        // // items.style.backgroundColor ='yellow';

        // for(var i = 0; i < li.length; i++){
        //         li[i].style.backgroundColor ='grey';
        // }

     //QUERYSELECTOR//

//       var header = document.querySelector('#main-header');
//      header.style.borderBottom = 'solid 4px #ccc';

//      var input = document.querySelector('input')
//      input.value = 'hello world'

//      var submit = document.querySelector('input[type="submit"]');
// //      console.log(submit)
// submit.value="SEND"
// var item = document.querySelector('.list-group-items');
// item.style.color = 'red';
// var lastItems = document.querySelector('.list-group-items:last-child');
// lastItems.style.color = 'blue';

// var secondItems = document.querySelector('.list-group-items:nth-child(2)');
// secondItems.style.color = 'coral';

// //QUERY SELECTORALL//
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'hello';

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even =document.querySelectorAll('li:nth-child(even)')

// for(var i = 0; i < odd.length; i++){
//  odd[i].style.backgroundColor = '#f4f4f4';
// }

// for(var i = 0; i < even.length; i++){
//         even[i].style.backgroundColor = '#ccc';
//        }

//TRVERSING THE DOM//

  // var listItems = document.querySelector('#items');

 //parentNode//

//  console.log(listItems.parentNode.parentNode);

// listItems.parentNode.parentNode.parentNode.style.background = 'steelBlue'

          //PARENTELEMENT//
          
//   var listItems = document.querySelector('#items');
//   console.log(listItems.parentNode.parentNode.parentNode);
// //  listItems.parentElement.parentElement.parentElement.style.background = 'steelBlue'

//childNode//
// console.log(listItems.childNodes);

// console.log(listItems.children);
// console.log(listItems.children[2]);
// listItems.children[2].style. background = 'yellow';

// //Firstchild//

// console.log(listItems.firstChild);
// // listItems.firstChild.style.background ="steelBlue";

// //firstElementChild//

// console.log(listItems.firstElementChild);
// listItems.firstElementChild.textContent ='hello 1';


// //Lastchild//

// console.log(listItems.firstChild);
// // listItems.firstChild.style.background ="steelBlue";

// //LastElementChild//

// console.log(listItems.lastElementChild);
// listItems.lastElementChild.textContent ='hello 1';

//NEXTSIBLING//

// console.log(listItems.nextSibling);

// listItems.nextElementSibling.style.background ='black';

// console.log(listItems.nextElementSibling)

//PREVIOUSSIBLING//

//previousSibling//

// console.log(listItems.previousSibling)
//previousElementSibling//
// console.log(listItems.previousElementSibling)

// //creatElement//

// //create a div

// var newDiv = document.createElement('div');
// //add class
// newDiv.className = 'hello';

// //add id
// newDiv.id = 'hello';

// //add attribute

// newDiv.setAttribute('title', 'hello Div')

// //create text node
// var newDivText = document.createTextNode('hello world'); 

// //add text to div//
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container') ;

// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv,h1)
// newDiv.style.fontSize = '30px '
// console.log(newDiv);

//EVENTS//

//  var button = document.getElementById('button').addEventListener('click',buttonClick);

//  function buttonClick (e){
  // //  console.log('button clicked')
  //  document.getElementById('header-title').textContent = 'hello every one';
  //  document.querySelectorAll('.title').style.backgroundColor ='steelBlue';

  // // console.log(e)
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className)
  // console.log(e.target.classList)
  // var output = document.getElementById('output');
  // output.innerHTML = '<h3>'+e.target.id+'</h3>';
  // console.log(e.type);

  //mouse position//

  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);
  //  console.log(e.offsetY);
  

  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
//}
var button = document.getElementById('button');
var box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
  //  button.addEventListener('mousedown', runEvent);
 //  button.addEventListener('mouseup', runEvent);
 //box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

 //box.addEventListener('mouseover',runEvent);
//  box.addEventListener('mouseout',runEvent);
//  box.addEventListener('mouseout',runEvent);
  //  box.addEventListener('mousemove',runEvent);

var itemInput = document.querySelector('input[type="text"]')
var form = document.querySelector('form');
var select = document.querySelector('select')

//  itemInput.addEventListener('keydown',runEvent);
//  itemInput.addEventListener('keyup',runEvent);
//  //itemInput.addEventListener('keypress',runEvent);
//    itemInput.addEventListener('focus',runEvent); 
//    itemInput.addEventListener('blur',runEvent);

   
  //  itemInput.addEventListener('cut',runEvent); 
  //  itemInput.addEventListener('paste',runEvent);
//     //itemInput.addEventListener('input',runEvent);
 form.addEventListener('submit',runEvent);
 select.addEventListener('change',runEvent);
 select.addEventListener('input',runEvent);
  function runEvent(e){
   console.log('EVENT TYPE:'+e.type);
  e.preventDefault();
   
  //console.log(e.target.value);
 //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
//  output.innerHTML = '<h3>MouseX:'+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
// document.body.style.backgroundColor ="rgb("+e.offsetX+","+e.offsetY+",40)";

}

