var btn = document.querySelector('#button');
var box =document.querySelector('.text');
var list = document.querySelector('.lists')
//var isValidReg = funtion (regNumber) {
//return regNumber.startsWith ('CA')
//|| regNumber.startsWith ('CJ')
//|| regNumber.startsWith ('CY');
//}

list.addEventListener('change', function(evt){
  var clicked = evt.target.value
  

});

btn.addEventListener('click', function() {

if (box.value == ''){

}
else {
  var newDiv = document.createElement('div')
  var newContent = document.createTextNode('');
  newDiv.appendChild(newContent);
  newDiv.setAttribute('id','div1');
  newDiv.innerHTML= box.value;
  document.body.appendChild(newDiv);
  var blank = document.querySelector('.text').value = '';
}

var li = document.createElement('li')
li.innerHTML = newDiv;
});
