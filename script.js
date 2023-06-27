// script.js

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenuu = document.getElementById("sidemenu");

function openmenu(){
    sidemenuu.style.right = "0";
}

function closemenu(){
    sidemenuu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw4re54wrGXsusJxT3EpAr_7tMM2wx5Ch9TPSviZShQtDfPKaWrf36j9oAO9x4gjvXLAA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank you for reaching out, info has been sent. Will get back to you soon.";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000 );
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
