console.log('Hello, World!');

/* Dynamic Copyright Date */
const currentYear = new Date().getFullYear();
const copyrightYear = document.querySelector(".cc");
copyrightYear.querySelector("small").textContent = `Copyright © ${currentYear} Rain Aclao, Inc`;