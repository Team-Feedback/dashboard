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

//ACCORDION
let accordionTriggers = document.querySelectorAll(".accordion-card-trigger");

accordionTriggers.forEach((e) => {
  e.addEventListener("click", function () {
    document
      .querySelectorAll(`.${e.getAttribute("accordion-trigger-target")}`)
      .forEach((e) => {
        e.classList.toggle("open");
      });
  });
});

        //MODAL
        let modalTriggers = document.querySelectorAll(".modal-trigger");
        let modalCloseBtns = document.querySelectorAll("[close-modal]");
        console.log(modalCloseBtns);

        modalTriggers.forEach((e) => {
            e.addEventListener("click", function () {
            let modal = document.getElementById(
                `${e.getAttribute("target-modal")}`
            );
            modal.classList.add("open");
            });
        });

        modalCloseBtns.forEach((e) => {
            e.addEventListener("click", function () {
            let modal = document.getElementById(
                `${e.getAttribute("close-modal")}`
            );
            modal.classList.remove("open");
            });
        });

        //SEND FEEDBACK
        let sendFeedbackBtn = document.querySelectorAll(".send-feedback-modal");

        if (sendFeedbackBtn) {
            sendFeedbackBtn.forEach(e => {
            e.addEventListener("click", function () {
                let modal = this.parentElement.parentElement;
                let body = modal.querySelector('.custom-modal-body');
                let successMessage = modal.querySelector('.success-message')
                successMessage.style.maxHeight = `${body.clientHeight / parseFloat(getComputedStyle(document.documentElement).fontSize)}em`
                modal.classList.add("success");
            });
            })
        }