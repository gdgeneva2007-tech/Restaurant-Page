import './style.css';

import loadHomePage from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
const homeBtn=document.querySelector('#home');
const menuBtn=document.querySelector('#menu');
const aboutBtn=document.querySelector('#about');
const content=document.querySelector('#content');
homeBtn.addEventListener('click',()=>{
    content.replaceChildren();
    loadHomePage();
})
menuBtn.addEventListener('click',()=>{
    content.replaceChildren();
    loadMenu();
})
aboutBtn.addEventListener('click',()=>{
    content.replaceChildren();
    loadAbout();
})