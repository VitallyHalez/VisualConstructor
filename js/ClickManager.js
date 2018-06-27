let editObject = {};
let counter = 0;

function ondblClick(e){
    var elem = e.target;
    editObject.elem = elem;

    elem.textContent = "Hello";
    console.log(elem + "lol");
}

function onClick(e) {
    if (e.which != 1) return;
    
    if(e.target.closest('.crtA')){
        createElement(cstrArea, 'a')
    }
    if(e.target.closest('.crtB')){
        createElement(cstrArea, 'button')
    }
    if(e.target.closest('.crtD')){
        createElement(cstrArea, 'div')
    }
    if(e.target.closest('.crtP')){
        createElement(cstrArea, 'p')
    }
    if(e.target.closest('.crtI')){
        createElement(cstrArea, 'image')
    }
    if(e.target.closest('.close')){
        contextMenu.style.visibility = "hidden";
    }
    else return;
}

function onContextMenu(e){
    createContext(e);
}

window.oncontextmenu = function(){return false;}

document.onclick = onClick;
document.ondblclick = ondblClick;
document.oncontextmenu = onContextMenu;