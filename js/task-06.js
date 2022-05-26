//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

const inputRef = document.querySelector("#validation-input");

const onCheckinputLength = () => {
  inputRef.value.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
};

const onInputFocus = () => {
  inputRef.classList.remove("valid", "invalid");
};

inputRef.addEventListener("blur", onCheckinputLength);
inputRef.addEventListener("focus", onInputFocus);