import aboutImg from './images/about.png';
function loadAbout(){
    const content=document.querySelector('#content');
    const img=document.createElement('img');
    img.src=aboutImg;
    img.className="w-200 h-auto rounded-full";
    const intro=document.createElement('p');
    intro.textContent="This is the about page!";
    intro.className="bg-pink-500 text-2xl";
    content.appendChild(img);
    content.appendChild(intro);

}
export default loadAbout;