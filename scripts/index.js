const btnEditar = document.querySelector(".profile__edit-button-icon");
const btnCerrar = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");

const profileName = document.querySelector(".profile__name");
const profileRol = document.querySelector(".profile__rol");
const inputName = document.querySelector('input[name="name"]');
const inputAbout = document.querySelector('input[name="about"]');

const formElement = document.querySelector(".popup__info");
const saveButton = document.querySelector(".popup__save-button");

btnEditar.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileRol.textContent;
});

btnCerrar.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const newName = inputName.value;
  const newAbout = inputAbout.value;
  profileName.textContent = newName;
  profileRol.textContent = newAbout;
  popup.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

function toggleSaveButtonState() {
  const isNameFilled = inputName.value.trim().length >= 2;
  const isAboutFilled = inputAbout.value.trim().length >= 2;

  if (isNameFilled && isAboutFilled) {
    saveButton.classList.add("popup__save-button_active");
  } else {
    saveButton.classList.remove("popup__save-button_active");
  }
}

inputName.addEventListener("input", toggleSaveButtonState);
inputAbout.addEventListener("input", toggleSaveButtonState);

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const photosSection = document.querySelector(".photos");
const cardTemplate = document.querySelector(".card-template").content;

function createCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const img = cardElement.querySelector(".photos__grid");
  const text = cardElement.querySelector(".photos__description-text");

  img.src = cardData.link;
  img.alt = cardData.name;
  text.textContent = cardData.name;

  return cardElement;
}

initialCards.forEach((card) => {
  photosSection.append(createCard(card));
});