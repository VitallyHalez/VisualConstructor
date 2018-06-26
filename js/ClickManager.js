var editObject = {};

function ShowContext(e){
    let container = document.createElement('div');
    let inp = document.createElement('input');
    let cstrArea = document.querySelector('#constr');
    
    var moveX = e.pageX;
	var moveY = e.pageY;

    container.style.width = 300 + "px";
    container.style.height = 600 + "px";
    
    container.style.left = moveX;
    container.style.top = moveY;

    container.classList.add('deep-purple');
    container.classList.add('card');
    container.classList.add('z-depth-5');

    cstrArea.appendChild(container);
    container.appendChild(inp);

    return false;
}

function ondblClick(e){
    var elem = e.target;
	
    editObject.elem = elem;
    elem.textContent = "Hello";
    console.log(elem + "lol");
}

function onContextMenu(e){
    ShowContext(e);
}

document.ondblclick = ondblClick;
document.oncontextmenu = onContextMenu;