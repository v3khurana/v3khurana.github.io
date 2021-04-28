const myHeading = document.querySelector('h1');
myHeading.textContent = 'IPL 2021 Team Info';

let myImage = document.querySelector('img');
myImage.onclick = changeImage;

let myBtn = document.querySelector('button');
let team = document.querySelector('h2');
myBtn.onclick = function(){
    let teamName = prompt('Enter Team Name');
    localStorage.setItem('teamName', teamName);
    //team.textContent = teamName;
    team.textContent = localStorage.getItem('teamName');
    changeImage();
}

function changeImage(){
    let mySRC = myImage.getAttribute('src');
    console.log(mySRC)
    if(mySRC == "./images/CSK.png"){
        mySRC = "./images/RCB.jpg";
        myImage.setAttribute('src',mySRC)
    }
}