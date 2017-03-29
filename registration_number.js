var btn = document.querySelector('#button');
var box =document.querySelector('.text');
var list = document.querySelector('.lists');
//var paragraph = document.getElementById('para')
var array = [];

btn.addEventListener('click', function() {

array.push(box.value);
if (box.value == ''){

}
else {
  var ul = document.createElement('li')
  //var newContent = document.createTextNode('');
  ul.textContent = box;
  //ul.appendChild(li);
  ul.setAttribute('id','div1');
  ul.innerHTML= box.value;
  document.body.appendChild(ul);
  var blank = document.querySelector('.text').value = '';
}

//var li = document.createElement('li')
//li.innerHTML = newDiv;
});

list.addEventListener('change', function (e) {
  var regNumber = document.querySelectorAll('li')

  for (var i =0; i < regNumber.length; i++){
    if (regNumber[i].innerHTML.startsWith(e.target.value )) {
      regNumber[i].style.display = 'block';
    }

    else if (list.value === 'default') {
      regNumber[i].style.display = 'block';
    }

    else {
      regNumber[i].style.display = 'none';
    }
  }

  });
