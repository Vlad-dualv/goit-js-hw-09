const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const FORM_STATE = "feedback-form-state";

function formSubmitHandler (event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = textarea.value.trim();
    const data = JSON.stringify({email, message});
    localStorage.setItem(FORM_STATE, data);
    form.reset();
}


form.addEventListener("submit", formSubmitHandler);

const jsn = localStorage.getItem(FORM_STATE) ?? "";
try {
    const data = JSON.parse(jsn);
    console.log(data);
    textarea.value = data.message;
    form.elements.email.value = data.email;
} 
catch {
    console.log("Please enter valid data!")
}
