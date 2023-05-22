document.getElementById('container').style.backgroundColor ='silver';
document.getElementById('title').style.color ='green';
document.getElementById('title').style.textAlign ='center';
document.getElementById('title').style.fontSize = '60px';

document.getElementById('fruits').style.marginLeft = '45%'
document.getElementById('fruits').style.color = 'red'

document.getElementById('vegetables').style.marginLeft = '45%'
document.getElementById('vegetables').style.color = 'red'

document.getElementById('sell').style.textAlign = 'center'
document.getElementById('sell').style.fontFamily = 'Georgia'


document.getElementById('up').style.textTransform = ('uppercase');
document.getElementById('up').style.color = ('darkgreen');

document.getElementById('down').style.textTransform = ('uppercase');
document.getElementById('down').style.color = ('darkgreen');

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







