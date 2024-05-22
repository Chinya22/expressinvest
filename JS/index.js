const cardsInfo = [
  {
    logo: "business",
    title: "title1",
    text: "text1",
  },
  {
    logo: "distant",
    title: "title2",
    text: "text2",
  },
  {
    logo: "license",
    title: "title3",
    text: "text3",
  },
];
let cardsWrapper = document.querySelector(".firstScreen_cardWrapper");
function createCards(cardsInfo, cardsWrapper) {
  // console.log (cardsInfo, cardsWrapper);
  for (let i = 0; i < cardsInfo.length; i++) {
    let card = document.createElement("div");
    card.classList.add("firstScreen_cardWrapper_item");
    cardsWrapper.append(card);

    let titleWrapper = document.createElement("div");
    titleWrapper.classList.add("firstScreen_cardWrapper_item_title");

    let title = document.createElement("h3");
    title.classList.add("firstScreen_cardWrapper_item_title_text");
    title.innerText = cardsInfo[i].title;
    titleWrapper.append(title);
    let logoContainer = document.createElement("div");
    logoContainer.classList.add("firstScreen_cardWrapper_item_title_logo");
    let logo = document.createElement("div");
    logo.classList.add(cardsInfo[i].logo);
    logoContainer.append(logo);
    titleWrapper.prepend(logoContainer);

    card.append(titleWrapper);

    let cardText = document.createElement("p");
    cardText.classList.add("firstScreen_cardWrapper_item_text");
    cardText.innerText = cardsInfo[i].text;
    card.append(cardText);
  }
}

createCards(cardsInfo, cardsWrapper);
// const callBtn = document.querySelector('.header_button');
// callBtn.addEventListener('click', ()=> {
//   createCards (cardsInfo, cardsWrapper);
// })

const btnModal = document.querySelector(".header_button");
const modal1 = document.querySelector(".modal");
const modalCLose = document.querySelector(".modal_close");

btnModal.addEventListener("click", () => {
  modal1.classList.add("modal_active");

  modalCLose.addEventListener("click", closeModalFn);

  modal1.addEventListener("click", hideModal);

  function closeModalFn() {
    modal1.classList.remove("modal_active");
    modalCLose.removeEventListener("click", closeModalFn);
    modal1.removeEventListener("click", hideModal);
  }
  function hideModal(event) {
    if (event.target === modal1) {
      closeModalFn();
    }
  }
});

const tabs = document.querySelectorAll(".secondScreen_buttonWrapper_item");
const tabsContent = document.querySelectorAll(".tab_content_item");

tabs.forEach((tab, index) => {
  tab.onclick = () => {
    changeTab(index);
  };
});
function changeTab(index) {
  // for (let tab of tabs) {
  //   tab.classList.remove('active');
  // }
  // tabs[index].classList.add('active');

  // for (let el of tabsContent) {
  //   el.classList.remove('active');
  // }
  // tabsContent[index].classList.add('active');

  for (let i=0; i<tabs.length; i++) {
    tabs[i].classList.remove('active');
    tabsContent[i].classList.remove('active');
  }
  tabs[index].classList.add('active');
  tabsContent[index].classList.add('active');
}

