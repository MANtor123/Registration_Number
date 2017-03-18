var btn = document.querySelector('#button');
var box =document.querySelector('.text')

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
});
