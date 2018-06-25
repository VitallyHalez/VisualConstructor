function createP(constr, element){
    let newElement=document.createElement(element);
    constr.appendChild(newElement);
    newElement.classList.add('draggable');
    newElement.textContent = "Example text";
}

let cstrArea = document.querySelector('#constr');

function onClick(e) {
    if (e.which != 1) return;
 
    if(e.target.closest('.crtP')){
        createP(cstrArea, 'p')
    }
    if(e.target.closest('.crtB')){
        createP(cstrArea, 'button')
    }
    if(e.target.closest('.crtD')){
        createP(cstrArea, 'div')
    }
    else return;
}

document.onclick = onClick;