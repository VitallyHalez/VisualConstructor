// window.onbeforeunload = function() {
//     localStorage.setItem('positionHTML', constr.innerHTML)
// };
// window.onload = function(){
//     let oldPage =localStorage.getItem('positionHTML');
//     constr.appendChild(oldPage);
//     localStorage.removeItem("positionHTML")
// } 
lsave.onclick = function(){
    localStorage.setItem('positionHTML', constr.innerHTML)
}
lload.onclick = function(){
    let oldPage = localStorage.getItem('positionHTML');
    constr.appendChild(oldPage);
    localStorage.removeItem("positionHTML")
}