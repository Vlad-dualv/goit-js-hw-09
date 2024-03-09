const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const FORM_STATE = "feedback-form-state";

function inputChangeHandler() {
    const email = form.elements.email.value.trim();
    const message = textarea.value.trim();
    const data = { email, message }; 
    localStorage.setItem(FORM_STATE, JSON.stringify(data));
}

function formSubmitHandler(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = textarea.value.trim();
    const data = { email, message };
    const jsn = localStorage.getItem(FORM_STATE) ?? "";
    try {
        const savedData = JSON.parse(jsn);
        console.log(savedData);
        if (email !== "" && message !== "") {
            textarea.value = savedData.message;
            form.elements.email.value = savedData.email;
            localStorage.removeItem(FORM_STATE);
            console.log("Form submitted. Received data:", data);
            form.reset();
        } else {
            alert("Please fill out both email and message fields:");
        }
    } catch (error) {
        console.log("Error parsing JSON data:", error);
    }
}

window.addEventListener('load', function() {
    const jsn = localStorage.getItem(FORM_STATE) ?? "";
    try {
        const savedData = JSON.parse(jsn);
        if (savedData.email !== undefined && savedData.message !== undefined) {
            textarea.value = savedData.message;
            form.elements.email.value = savedData.email;
        }
    } catch (error) {
        console.log("Error parsing JSON data:", error);
    }
});

form.addEventListener("input", inputChangeHandler);
form.addEventListener("submit", formSubmitHandler);