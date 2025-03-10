// Task - 1
function toggleDarkMode(){
    const themeBox = document.getElementById('theme-box');
    const toggleThemeButton = document.getElementById('toggle-theme');

    toggleThemeButton.addEventListener('click' , () =>
        {
            if(themeBox.classList.contains('dark-mode')){
                themeBox.classList.remove('dark-mode');
                themeBox.classList.add('light-mode');
                themeBox.innerText = 'This is Light Mode'
                }
            else{
                themeBox.classList.remove('light-mode');
                themeBox.classList.add('dark-mode');
                themeBox.innerText = 'This is Dark Mode'
                }
        }
    ) 
}
toggleDarkMode();

//Task - 2
function highlightActiveMenuItem(){
  const menuItems = document.getElementsByClassName('menu-item');

  for(let menu of menuItems){

    menu.addEventListener('click',  function() {

        for(let item of menuItems){
            item.classList.remove('active-menu');
            }
            this.classList.add('active-menu');
        });
  }

}
highlightActiveMenuItem();

// Task 3
function hideAndShowBox(){
    const showButton = document.getElementById('show-btn');
    const hideButton = document.getElementById('hide-btn');
    const hiddenBox = document.getElementById('hidden-box');

    showButton.addEventListener( 'click' , () => {
        hiddenBox.classList.replace('hidden' , 'visible'); // Note**
    });

    hideButton.addEventListener( 'click' , () => {
        hiddenBox.classList.replace('visible' , 'hidden');
    });

}
hideAndShowBox();

// Task 4
function textAndBackgroundOnHover(){
    const hoverBox = document.getElementById('hover-box');

    hoverBox.addEventListener('mouseenter' , function(){
        this.style.backgroundColor = 'blue';
        this.style.color = 'white';
    })

    hoverBox.addEventListener('mouseleave' , function(){
        this.style.backgroundColor = '';
        this.style.color = '';
    })
}
textAndBackgroundOnHover();