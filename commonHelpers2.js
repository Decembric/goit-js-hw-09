import"./assets/styles-d87d39ce.js";import{t as l}from"./assets/vendor-71ac5ada.js";const a="feedback-form-state",r=document.querySelector(".feedback-form");r.addEventListener("submit",m);r.addEventListener("input",l(n,1e3));c();function n(e){let t=localStorage.getItem(a);t?t=JSON.parse(t):t={},t[e.target.name]=e.target.value,localStorage.setItem(a,JSON.stringify(t))}function m(e){e.preventDefault();const t=e.target.elements,o=t.email.value,s=t.message.value;if(o===""||s==="")return console.log("Будь ласка, заповніть усі поля");console.log(`Email: ${o}, Message: ${s}`),e.target.reset(),localStorage.removeItem(a)}function c(){let e=localStorage.getItem(a);e&&(e=JSON.parse(e),Object.entries(e).forEach(([t,o])=>{r.elements[t].value=o,e=""}))}
//# sourceMappingURL=commonHelpers2.js.map