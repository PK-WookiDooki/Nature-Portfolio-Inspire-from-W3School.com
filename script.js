let obtn = document.getElementById('openbtn');
let closebtn = document.getElementById('closebtn')

// document.onclick = function(e){
//     if(e.target.id !== 'icon' && e.target.id !== 'menu'){
//         menu.classList.remove('active') 
//         icon.classList.remove('active') 
//     }
// }

// icon.onclick = function(){
//     menu.classList.toggle('active') 
//     icon.classList.toggle('active') 
// }

obtn.onclick = function(){
    document.getElementById('menu').style.width = '350px';
    document.getElementById('main').style.background = 'rgb(20, 20, 20, 0.5)'
    document.getElementById('main').style.opacity = '0.7';
    document.getElementById('box').style.background = 'rgb(20, 20, 20, 0.5)'
    document.getElementById('box').style.opacity = '0.7';
    // obtn.classList.toggle('active')
}
closebtn.onclick = function(){
    document.getElementById('menu').style.width = '0px'
    document.getElementById('main').style.opacity = '1';
    document.getElementById('box').style.opacity = '1';
    document.getElementById('main').style.background = '#fff'
    document.getElementById('box').style.background = '#fff'
}
document.onclick = function(e){
    if(e.target.id !== 'openbtn'){
        document.getElementById('menu').style.width = '0px'
        document.getElementById('main').style.opacity = '1';
        document.getElementById('box').style.opacity = '1';
        document.getElementById('main').style.background = '#fff'
        document.getElementById('box').style.background = '#fff'
    }
}


let slidebtn = document.querySelectorAll('.slide-btn')
for(let i=0; i<slidebtn.length; i++){
    slidebtn[i].onclick = function(){
        let j = 0;
        while(j < slidebtn.length){
            slidebtn[j++].className = 'slide-btn'
        }
        slidebtn[i].className = 'slide-btn active'
    }
}