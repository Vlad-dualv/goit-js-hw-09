import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),s=t.querySelector("textarea"),l="feedback-form-state";function i(){const n=t.elements.email.value.trim(),a=s.value.trim(),o=JSON.stringify({email:n,message:a});localStorage.setItem(l,o)}function c(n){n.preventDefault();const a=t.elements.email.value.trim(),o=s.value.trim(),r=JSON.stringify({email:a,message:o}),m=localStorage.getItem(l)??"";try{const e=JSON.parse(m);console.log(e),a!==""&&o!==""&&e.email!==void 0&&e.message!==void 0?(s.value=e.message,t.elements.email.value=e.email,localStorage.removeItem(l),console.log("Form submitted. Received data:",r),t.reset()):console.log("Please enter valid data!")}catch(e){console.log("Error parsing JSON data:",e)}}t.addEventListener("input",i);t.addEventListener("submit",c);
//# sourceMappingURL=commonHelpers2.js.map