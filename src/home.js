import homeImg from './images/home.png';
function loadHome(){
    
    const content=document.querySelector('#content');
    const img=document.createElement('img');
    img.src=homeImg;
    img.className="w-200 h-auto rounded-full";
    content.appendChild(img);
    const intro=document.createElement('p');
    intro.textContent='Welcome to my restaurant!';
    intro.className="bg-pink-500 text-2xl";
    content.appendChild(intro);
}

export default loadHome;
