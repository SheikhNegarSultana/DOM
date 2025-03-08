//Task - 1
function userCardUpdate(){
    const profileCard = document.getElementById('profile-card');
    const cardStatus = profileCard.getAttribute('data-status');

    if(cardStatus === 'inactive'){
        profileCard.setAttribute('data-status', 'active');
     }
       
    
    profileCard.style.background = "lightblue";
    profileCard.style.color = "pink";

    let cardContent = profileCard.innerText + ' (Active)'  ;
    profileCard.innerHTML = `<strong> ${cardContent} </strong>`
    
}
userCardUpdate();

// Task-2
function buttonToggle(){
    const button = document.getElementById('toggle-btn');
    const buttonStatus = button.getAttribute('data-state');

    if(buttonStatus === 'off'){
        button.setAttribute('data-state', 'on');

    button.style.background = "green";
    button.style.color = "white";
    
    button.innerText = "Button On"
    let buttonText = button.innerText;
    button.innerHTML = `<u> ${buttonText}  </u>`
    }
}
buttonToggle();

// Task-3
function notificationUpdate(){
    const notifications = document.getElementById('notification');
    const notificationStatus = notifications.getAttribute('data-read');

    if( notificationStatus === 'false'){
        notifications.setAttribute('data-read', 'true');
    }

    notifications.style.color = "red";
    notifications.innerText = notifications.innerText + " (Read)"
    let notificationText = notifications.innerText;
    notifications.innerHTML = `<em> ${notificationText} </em>`
}
notificationUpdate();

// Task-4
function priceTag(){
    const priceTag = document.getElementById('price-tag');
    const discount = priceTag.getAttribute('data-discount');

    if( discount === 'none'){
        priceTag.setAttribute('data-discount', "applied");
    }

    priceTag.style.color = "orange";
    priceTag.innerText = priceTag.innerText + " (Discount Applied)"
    let priceText = priceTag.innerText;
    priceTag.innerHTML = `<strong> ${priceText} </strong> `
}
priceTag();

// Task-5
function alertBox(){
   const box = document.getElementById('alert-box');
   const alertStatus = box.getAttribute('data-active');

   if(alertStatus === 'off'){

    box.setAttribute('data-active', 'on');

    box.style.border = "2px solid yellow";
    box.style.backgroundColor = "lightyellow"
 
    box.innerText = "Alert: System Active";
    let boxText = box.innerText;
    box.innerHTML = `<b> ${boxText} </b>`
   }

}
alertBox();

// Task-6
function badgeUpgrade(){
    const badge = document.getElementById('badge');
    const badgeLevel = badge.getAttribute('data-level');
    const badgeUpgraded = badge.getAttribute('data-upgraded');

    if( badgeLevel === 'basic' && badgeUpgraded === 'no'){

        badge.setAttribute('data-level' , 'advanced' );
        badge.setAttribute('data-upgraded' , 'yes');
    
        badge.style.backgroundColor='silver'
        badge.style.color = "blue";
    
        let badgeContent = badge.innerText + " (Upgraded to Advanced)"
        badge.innerHTML= `<u> ${badgeContent}</u>`
    }

    else if( badgeLevel === 'advanced' && badgeUpgraded === 'no'){

        badge.setAttribute('data-level' , 'elite' );
        badge.setAttribute('data-upgraded' , 'yes');
    
        badge.style.backgroundColor='gold'
        badge.style.color = "black";
    
        let badgeContent = badge.innerText + " (Upgraded to Elite)" 
        badge.innerHTML= `<strong> ${badgeContent}</strong>`
    }
}
badgeUpgrade();