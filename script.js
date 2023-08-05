let whatToDo = document.querySelector('#toDo');
let toDoBtn = document.querySelector('#toDoBtn');
let placeForDo = document.querySelector('#toDos');

toDoBtn.addEventListener('click', function(){
    let date = new Date();
    date = date.toDateString();

    let value = whatToDo.value;
    let paragraph = document.createElement('p');
    paragraph.innerHTML = value + `<span class="close">&#10005;</span> <span id="date">Write in:${date}</span>`;
    paragraph.classList.add('paragraph')
    placeForDo.appendChild(paragraph);
    if(whatToDo.value == ''){
        alert('Input is empty...')
        paragraph.remove()
    }
    whatToDo.value = '';

    paragraph.addEventListener('click', function(){
        paragraph.classList.add('checked');
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        paragraph.remove();
    })

    let close = document.querySelectorAll(".close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }
});
