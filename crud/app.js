
let titlefield = document.querySelector('.titlefield');
let textfield = document.querySelector('.textfield');


let ok = document.querySelector('.add-btn');

    ok.addEventListener('click', function(){
    
    let wraper = document.querySelector('.content-wraper');
    let content = document.createElement('div');
    content.classList.add('content');
    let head = document.createElement('div');
    head.classList.add('string');



    let title = document.createElement('h4');
    title.classList.add('title');
    let text = document.createElement('p');
    text.classList.add('text');


    let icon = document.createElement('div');
    icon.classList.add('op-icon');
    let edit = document.createElement('button');
    edit.classList.add('edit-btn');
    edit.innerHTML = "Edit"
    let del = document.createElement('button');
    del.innerHTML = "Delete"
    del.classList.add('del-btn');

    head.appendChild(title);
    head.appendChild(text);



    icon.appendChild(edit);
    icon.appendChild(del);

    content.appendChild(head);
    content.appendChild(icon);

    let tempTitle = titlefield.value
    let tempText = textfield.value
    wraper.appendChild(content);
    title.innerHTML = tempTitle;
    text.innerHTML = tempText;

    titlefield.value = '';
    textfield.value = '';

    let editBtn = document.querySelector('.edit-btn');
    edit.addEventListener('click', function(){

        let title = document.querySelector('.title');
        let text = document.querySelector('.text');
        titlefield.value =  title.innerHTML;
        textfield.value =  text.innerHTML;
    })
        
    })

