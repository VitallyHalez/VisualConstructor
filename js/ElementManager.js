let cstrArea = document.querySelector('#constr');

function createElement(constr, element){   
    let newElement=document.createElement(element);
    
    constr.appendChild(newElement);
    
    if(element == 'div') 
        newElement.classList.add("deep-purple");
    
    newElement.classList.add('draggable');
    newElement.textContent = "Right click for change";
}

function createContext(e){
    var elem = e.target
    editObject.elem = elem;

    if(elem.parentElement != constr) return false;
    
    contextMenu.style.visibility = "visible"      // Hide
    contextMenu.style.left = elem.downX + 'px';
    contextMenu.style.top =  elem.downY + 'px';
    
    if(elem.id != 'constr')
    textCont.value = elem.innerText;
    textColor.value = elem.style.backgroundColor;
    newClass.value = elem.classList;
    
    var elemPos = elem.getBoundingClientRect();
    contextMenu.style.left = elemPos.left + 'px';
    contextMenu.style.top =  elemPos.top + 'px';
    
    save.onclick = function(){
        elem.textContent = textCont.value;
        elem.style.backgroundColor = textColor.value;
        if(newClass.value != "")  elem.classList.add(newClass.value);
        contextMenu.style.visibility = "hidden" 
    }

    return false;
}