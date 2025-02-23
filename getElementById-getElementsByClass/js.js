function headerAndSection(){
    const header = document.getElementById('main-header');
    const sections = document.getElementsByClassName('section');

    header.innerText = "Welcome to My Website"

    for( let section of sections){
        section.innerText = section.innerText + " - Section updated"
    }
    
}
headerAndSection();

function box(){
    const boxSection = document.getElementById('color-section');
    const boxes = boxSection.getElementsByClassName('color-box');

    for( let box of boxes){
        box.style.backgroundColor = "lightblue";
    }
}
box();

function nav(){
    const nav = document.getElementById('nav-bar');
    const menus = nav.getElementsByClassName('nav-item');
    for(let menu of menus){
        menu.innerText = "Menu: " + menu.innerText;
    }
}
nav();

function toggle(){
    const button = document.getElementById('toggle-btn');
    const cards = document.getElementsByClassName('info-card');
    
    button.addEventListener( 'click' , function(){
        for( let card of cards){
            if( card.style.display == 'none'){
                card.style.display = 'block';
            }
            else{
                card.style.display = 'none';
                }
        }
    })
}
toggle();