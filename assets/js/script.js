function openDrop(name) {
    let menu = document.querySelector(name);
    let opener = document.querySelector(name+'-icon');

    if(menu.style.display == 'block') {
        menu.style.display = 'none';
        opener.innerHTML = '+';
    } else {
        menu.style.display = 'block';
        opener.innerHTML = 'x';
    }
}