let tableCard = document.querySelector(".elements")

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

function openFormPopup() {
  let profileNameActive = document.querySelector(".profile__info-name");
  let profileJobActive = document.querySelector(".profile__info-description");
  let nameActive = profileNameActive.textContent;
  let jobActive = profileJobActive.textContent;
  let nameInput = document.querySelector("#name");
  let jobInput = document.querySelector("#about");
  formProfile.classList.add("popup_opened");
  nameInput.value = nameActive;
  jobInput.value = jobActive;
}

function closeFormPopup() {
  formProfile.classList.remove("popup_opened");
}

let btnOpenForm = document.querySelector(".profile__info-button");
let btnCloseForm = document.querySelector(".popup__close");
btnOpenForm.addEventListener('click', openFormPopup);
btnCloseForm.addEventListener('click', closeFormPopup);

function openFormPopupElement() {
  formElement.classList.add("popupElement_opened");
}

function closeFormPopupElement() {
  formElement.classList.remove("popupElement_opened");
}

let btnOpenFormElement = document.querySelector(".profile__button");
let btnCloseFormElement = document.querySelector(".popupElement__close");
btnOpenFormElement.addEventListener('click', openFormPopupElement);
btnCloseFormElement.addEventListener('click', closeFormPopupElement);

// Vamos encontrar o formulário no DOM
let formProfile = document.querySelector(".popup");// Use o método querySelector()
let formElement = document.querySelector(".popupElement");

function handleProfileFormSubmit(evt) {
    // Esta linha impede o navegador
    // de enviar o formulário da forma padrão.
    evt.preventDefault();
    // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
    // Explicaremos em mais detalhes posteriormente.

    // Vamos encontrar os campos de formulário do DOM
    let nameInput = document.querySelector("#name");// Use querySelector()
    let jobInput = document.querySelector("#about");// Use querySelector()

    // Pegue os valores de cada campo do valor da propriedade correspondente
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;

    // Selecione os elementos aos quais os valores dos campos serão inseridos
    let profileName = document.querySelector(".profile__info-name");
    let profileJob = document.querySelector(".profile__info-description");

    // Insira novos valores usando a
    // propriedade textContent
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;
    formProfile.classList.remove("popup_opened");
}

function handleElementFormSubmit(evt) {
  // Esta linha impede o navegador
  // de enviar o formulário da forma padrão.
  evt.preventDefault();

  let titleInput = document.querySelector("#title");// Use querySelector()
  let linkInput = document.querySelector("#link");// Use querySelector()
  let titleValue = titleInput.value;
  let linkValue = linkInput.value;

  if(titleValue != "" && linkValue != ""){
    const newCard = createCard({name: titleValue, link: linkValue});
    tableCard.prepend(newCard);
  }

  titleInput.value = "";
  linkInput.value = "";
  formElement.classList.remove("popupElement_opened");
}

formProfile.addEventListener('submit', handleProfileFormSubmit);
formElement.addEventListener('submit', handleElementFormSubmit);

function createCard(card) {
  const cardTemplate = document.querySelector("#template-card").content;
  const cardElement = cardTemplate.querySelector(".elements__content").cloneNode(true);
  cardElement.querySelector(".elements__content-description-name").textContent = card.name;
  cardElement.querySelector(".elements__content-container-image").setAttribute("src", card.link);
  cardElement.querySelector(".elements__content-container-image").setAttribute("alt", card.name);
  cardElement.querySelector(".elements__content_container-trash").addEventListener("click", (event)=>{
    event.target.parentElement.parentElement.parentElement.remove()});
  cardElement.querySelector(".elements__content-container-image").addEventListener("click", () => {
    openImagePopup(card.link, card.name)});
  const likeIcon = cardElement.querySelector(".elements__content-description-like");

  likeIcon.addEventListener("click", () => {
    const currentSrc = likeIcon.getAttribute("src");
    const isLiked = currentSrc.includes("Union.png");
    likeIcon.setAttribute("src", isLiked ? "./images/heart.png" : "./images/Union.png");
  });

  return cardElement;
};

for (const card of initialCards) {
  const newCard = createCard(card);
  tableCard.prepend(newCard);
};

let popupImage = document.querySelector(".popupImage");
let popupImagePhoto = document.querySelector(".popupImage__photo");
let popupImageClose = document.querySelector(".popupImage__close");

function openImagePopup(link, name) {
  popupImage.classList.add("popupImage_opened");
  popupImagePhoto.src = link;
  popupImagePhoto.alt = name;
}

function closeImagePopup() {
  popupImage.classList.remove("popupImage_opened");
  popupImagePhoto.src = "";
  popupImagePhoto.alt = "";
}

popupImageClose.addEventListener("click", closeImagePopup);
popupImage.querySelector(".popupImage__overlay").addEventListener("click", closeImagePopup);
