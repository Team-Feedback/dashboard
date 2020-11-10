//HEADER SMALL/BIG TOGGLE
let header = document.querySelector('.header');
let headerMain = document.querySelector('.header-main');

headerMain.addEventListener('click', function () {
    console.log('double click')
    header.classList.toggle('small')
});

//ACTIVE LINK
let headerNavLinks = document.querySelectorAll('.header-nav-list-item');

headerNavLinks.forEach(e => {
    e.addEventListener('click', function() {
        headerNavLinks.forEach(x => x.classList.remove('active'));
        this.classList.add('active')
    })
})

//SETTINGS TABLE LINK
let editLinks = document.querySelectorAll('.settings-table-row-column-03 .settings-table-link');

editLinks.forEach(e => {
    e.addEventListener('click', function() {
    console.log('clicked')
    this.parentElement.parentElement.classList.toggle('edit');
    })
})