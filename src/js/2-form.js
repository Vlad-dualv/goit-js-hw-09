const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const FORM_STATE = "feedback-form-state";

function inputChangeHandler() {
    const email = form.elements.email.value.trim();
    const message = textarea.value.trim();
    const data = JSON.stringify({email, message});
    localStorage.setItem(FORM_STATE, data);
}

function formSubmitHandler (event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = textarea.value.trim();
    const data = JSON.stringify({ email, message });
    const jsn = localStorage.getItem(FORM_STATE) ?? "";
    try {
        const savedData = JSON.parse(jsn);
        console.log(savedData);
        if (email !== "" && message !== "" && savedData.email !== undefined && savedData.message !== undefined) {
            textarea.value = savedData.message;
            form.elements.email.value = savedData.email;
            localStorage.removeItem(FORM_STATE);
            console.log("Form submitted. Received data:", data);
            form.reset();
        } else {
            console.log("Please enter valid data!");
        }
    } catch (error) {
        console.log("Error parsing JSON data:", error);
    }
}

form.addEventListener("input", inputChangeHandler);
form.addEventListener("submit", formSubmitHandler);