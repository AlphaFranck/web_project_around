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
