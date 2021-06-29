const body = document.getElementById("body-project");
const menu = document.createElement("div");
menu.className = "menu-style";
body.appendChild(menu);

const icon = document.createElement("i");
icon.className = "fas fa-times";
menu.appendChild(icon);

const menuList = document.createElement("ul");
menuList.className = "menu-list";
menu.appendChild(menuList);

const portfolio = document.createElement("li");
portfolio.className = "portfolio";
const portfolioLink = document.createElement("a");
portfolioLink.className = "mobile-link";
portfolioLink.textContent = "Portfolio";
portfolioLink.href = "#portfolio";
portfolio.appendChild(portfolioLink);
menuList.appendChild(portfolio);

const about = document.createElement("li");
about.className = "about";
const aboutLink = document.createElement("a");
aboutLink.className = "mobile-link";
aboutLink.textContent = "About";
aboutLink.href = "#about";
about.appendChild(aboutLink);
menuList.appendChild(about);

const contact = document.createElement("li");
contact.className = "contatc-content";
const contactLink = document.createElement("a");
contactLink.className = "mobile-link";
contactLink.textContent = "Contact";
contactLink.href = "#contact";
contact.appendChild(contactLink);
menuList.appendChild(contact);

const hamburger = document.getElementById("mob-menu");
hamburger.addEventListener("click", () => {
  menu.style.display = "block";
  document.getElementById("main").style.filter = "blur(5px)";
});

icon.addEventListener("click", () => {
  menu.style.display = "none";
  document.getElementById("main").style.filter = "none";
});

document
  .getElementsByClassName("mobile-link")[0]
  .addEventListener("click", () => {
    menu.style.display = "none";
    document.getElementById("main").style.filter = "none";
    document.getElementsByClassName("card");
  });

document
  .getElementsByClassName("mobile-link")[1]
  .addEventListener("click", () => {
    menu.style.display = "none";
    document.getElementById("main").style.filter = "none";
  });

document
  .getElementsByClassName("mobile-link")[2]
  .addEventListener("click", () => {
    menu.style.display = "none";
    document.getElementById("main").style.filter = "none";
  });