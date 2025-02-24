// Problem 1
function Header(){
    const header = document.querySelector('#header-title');
    header.textContent = "Welcome to my website!";
    
}
Header();

// Problem 2
function list(){
    const lists = document.querySelectorAll('.list-item');
    for( const list of lists){
        list.textContent = list.textContent + " - Updated";
    }
}
list();

// Problem 3 **
function nestedParagraph(){
    const paragraph = document.querySelector('.content p');
    paragraph.textContent = "Content updated!"
}
nestedParagraph();

// Problem 4 
function numbering(){
    const listDiv = document.querySelector('#task-list');
    const lists = listDiv.querySelectorAll('li');
    let c = 1;
    for( const list of lists){
        list.textContent = c++ + ". " + list.textContent;
    }
}
numbering();

// Problem 5 **
function inputField(){
    const input = document.querySelector('input[placeholder="Search..."]'); // Note**
    input.value = "Hello!";
}
inputField();

// Problem 6 **
function bg(){
    const divs = document.querySelectorAll('.card-container > div'); // Note
    for( const div of divs){
        div.style.backgroundColor = "lightGreen";
    }
}
bg();
