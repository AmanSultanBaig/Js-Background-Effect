var getBox = document.getElementById('box');
getBox.addEventListener('mousemove',colorChanged);

function colorChanged(e) {
    getBox.style.backgroundColor = 'rgb('+e.offsetY+','+e.offsetX+',90)'
}