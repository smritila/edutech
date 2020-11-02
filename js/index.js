let last_known_scroll_position = 0;
let ticking = false;

function updateNavBarElement(scroll_pos) {
    const headerElement = document.getElementById('myHeader');
    const classList =[...headerElement.classList];
    if(scroll_pos >= 40) {
        if(!classList.includes('headerChange')) {
            headerElement.classList.add('headerChange');
        }
    } else {
        headerElement.classList.remove('headerChange');
    }
}

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if(!ticking) {
        window.requestAnimationFrame(function() {
            updateNavBarElement(last_known_scroll_position);
            ticking = false;
        });
        ticking = true;
    }
});

