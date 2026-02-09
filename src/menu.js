import menuImg from './images/menu.png';
function loadMenu(){
    const content=document.querySelector('#content');
    const img=document.createElement('img');
    img.src=menuImg;
    img.className="w-200 h-200 rounded-full";
    const intro=document.createElement('p');
    intro.textContent="This is the menu!";
    intro.className="bg-pink-500 text-2xl";
    content.appendChild(img);
    content.appendChild(intro);
}
export default loadMenu;