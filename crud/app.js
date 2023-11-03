let titlefield = document.querySelector('.titlefield');
let textfield = document.querySelector('.textfield');
let addBtn = document.querySelector('.add-btn');
let textcontent = document.querySelector('.paragraph');
let titlecontent = document.querySelector('.title');
let editBtn = document.querySelector('.edit-btn');
let delBtn = document.querySelector('.del-btn');



let form = document.querySelector('.form');
let string = document.querySelector('.string');


form.addEventListener('input', function(){
   
    let tempTitle = titlefield.value;
    let tempText = textfield.value;

    function note(title,text) {
        this.title = title,
        this.text = text
    }

    Note = new note(tempTitle, tempText);
    addBtn.addEventListener('click', added);

    function added() {
        titlecontent.textContent = Note.title;
        textcontent.textContent = Note.text;
        titlefield.value = '';
        textfield.value = '';       
    }

    textfield.addEventListener('keypress', function(event){
        let p = document.createElement('p');
        if (event.key === "Enter") {
           
            string.appendChild(p);
        }
    })
        
})

editBtn.addEventListener('click', function(){
    titlefield.value = Note.title;
    textfield.value = Note.text;
})

delBtn.addEventListener('click', function(){
    titlecontent.textContent = '';
    textcontent.textContent = '';
    titlefield.value = '';
    textfield.value = '';
    Note.title = '';
    Note.text = '';
});

