const target = document.querySelectorAll('a');
target.forEach(elem => {
    elem.target = '_blank';
    elem.rel = '';
});