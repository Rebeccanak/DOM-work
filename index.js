document.getElementById('container').style.backgroundColor ='silver';
document.getElementById('title').style.color ='green';
document.getElementById('title').style.textAlign ='center';
document.getElementById('title').style.fontSize = '60px';

document.getElementById('fruits').style.marginLeft = '45%'
document.getElementById('vegetables').style.marginLeft = '45%'
document.getElementById('vegetables').stylele

document.getElementById('sell').style.textAlign = 'center'

document.getElementById('up').style.textTransform = ('uppercase');
document.getElementById('down').style.textTransform = ('uppercase');
document.getElementById('up').style.textAlign = 'center'


let list = document.createElement('li');
list.innerHTML = 'Kiwi'
document.getElementById('fruList').appendChild(list)
document.getElementById('fruList').children;
console.log({child})


let addVegs = document.createElement('li');
addVegs.innerHTML = 'Cabbage'

document.getElementById('vegList').appendChild(addVegs);
let child = document.getElementById('vegList').children;
console.log({child});



let image = document.createElement('img');
image.src = 'image/veges1.jpg';
image.style.width = '60%'
image.style.marginLeft = '40%'
image.marginTop = '-28'
document.body.appendChild(image);




