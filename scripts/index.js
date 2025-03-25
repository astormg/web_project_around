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
  formElement.classList.add("popup_opened");
  nameInput.value = nameActive;
  jobInput.value = jobActive;
}

function closeFormPopup() {
  formElement.classList.remove("popup_opened");
}

let btnOpenForm = document.querySelector(".profile__info-button");
let btnCloseForm = document.querySelector(".popup__close");

btnOpenForm.addEventListener('click', openFormPopup);
btnCloseForm.addEventListener('click', closeFormPopup);

// Vamos encontrar o formulário no DOM
let formElement = document.querySelector(".popup");// Use o método querySelector()

// Em seguida vem o handler do submit
// ainda não vai enviar para lugar nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
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
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener('submit', handleProfileFormSubmit);

function createCard(card) {
  const cardTemplate = document.querySelector("#template-card").content;
  const cardElement = cardTemplate.querySelector(".elements__content").cloneNode(true);
  cardElement.querySelector(".elements__content-description-name").textContent = card.name;
  cardElement.querySelector(".elements__content-container-image").setAttribute("src", card.link);
  cardElement.querySelector(".elements__content-container-image").setAttribute("alt", card.name);
  return cardElement;
};

for (const card of initialCards) {
  const newCard = createCard(card);
  tableCard.prepend(newCard);
}

function addNewElement(evt) {
  evt.preventDefault();
  createCard({
    name: "Teste", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  });
}