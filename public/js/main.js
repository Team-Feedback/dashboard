//HEADER SMALL/BIG TOGGLE
let header = document.querySelector(".header");
let headerMain = document.querySelector(".header-main");

headerMain.addEventListener("click", function () {
  console.log("double click");
  header.classList.toggle("small");

  // Send feedback page people container height
  if (document.getElementById('give-feedback')) {
    setTimeout(() => {
      peopleHeightLimit();
    }, 500);
  }
});

//GIVE FEEDBACK PAGE PEOPLE CONTAINER HEIGHT LIMIT
function peopleHeightLimit() {
  let people = document.querySelector('#give-feedback .people');
  if (people) {
    people.style.height = `calc(100vh - ${header.clientHeight}px - 17em)`;
  }
}

peopleHeightLimit();

//ACTIVE LINK
let headerNavLinks = document.querySelectorAll(".header-nav-list-item");

headerNavLinks.forEach((e) => {
  e.addEventListener("click", function () {
    headerNavLinks.forEach((x) => x.classList.remove("active"));
    this.classList.add("active");
  });
});

//SETTINGS TABLE LINK
let editLinks = document.querySelectorAll(
  ".settings-table-row-column-03 .settings-table-link"
);

editLinks.forEach((e) => {
  e.addEventListener("click", function () {
    console.log("clicked");
    this.parentElement.parentElement.classList.toggle("edit");
  });
});

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
    document.querySelectorAll('.custom-modal-wrapper.open').forEach(e => {
      e.id !== 'modalCard' && e.classList.remove('open');
    })
    let modal = document.getElementById(`${e.getAttribute("target-modal")}`);
    modal.classList.add("open");
  });
});

modalCloseBtns.forEach((e) => {
  e.addEventListener("click", function () {
    let modal = document.getElementById(`${e.getAttribute("close-modal")}`);
    modal.classList.remove("open");
  });
});

//SEND FEEDBACK
let sendFeedbackBtn = document.querySelectorAll(".send-feedback-modal");

if (sendFeedbackBtn) {
  sendFeedbackBtn.forEach((e) => {
    e.addEventListener("click", function () {
      let modal = this.parentElement.parentElement;
      let body = modal.querySelector(".custom-modal-body");
      let successMessage = modal.querySelector(".success-message");
      successMessage.style.maxHeight = `${body.clientHeight /
        parseFloat(getComputedStyle(document.documentElement).fontSize)
        }em`;
      modal.classList.add("success");
    });
  });
}

//INPUT PASSWORD VISIBILLITY
let showPassToggle = document.querySelectorAll(
  ".input-container.password .show-password"
);

if (showPassToggle.length) {
  showPassToggle.forEach((e) => {
    e.addEventListener("click", function () {
      let input = this.parentElement.querySelector("input");
      this.classList.toggle("show");
      if (this.classList.contains("show")) {
        input.type = "text";
      } else {
        input.type = "password";
      }
    });
  });
}

//INVITE MEMBERS MODAL OPEN SEARCH DROPDOWN
let searchDropdownInput = document.querySelector('.search-dropdown input');

if (searchDropdownInput) {
  searchDropdownInput.addEventListener('focus', function () {
    this.parentElement.parentElement.classList.add('open');
  })
  searchDropdownInput.addEventListener('blur', function () {
    this.parentElement.parentElement.classList.remove('open');
  })
}
