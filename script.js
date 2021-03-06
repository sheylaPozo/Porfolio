const body = document.getElementById('body-project');
const menu = document.createElement('div');
menu.className = 'menu-style';
body.appendChild(menu);

const icon = document.createElement('i');
icon.className = 'fas fa-times';
menu.appendChild(icon);

const menuList = document.createElement('ul');
menuList.className = 'menu-list';
menu.appendChild(menuList);

const portfolio = document.createElement('li');
portfolio.className = 'portfolio';
const portfolioLink = document.createElement('a');
portfolioLink.className = 'mobile-link';
portfolioLink.textContent = 'Portfolio';
portfolioLink.href = '#portfolio';
portfolio.appendChild(portfolioLink);
menuList.appendChild(portfolio);

const about = document.createElement('li');
about.className = 'about';
const aboutLink = document.createElement('a');
aboutLink.className = 'mobile-link';
aboutLink.textContent = 'About';
aboutLink.href = '#about';
about.appendChild(aboutLink);
menuList.appendChild(about);

const contact = document.createElement('li');
contact.className = 'contatc-content';
const contactLink = document.createElement('a');
contactLink.className = 'mobile-link';
contactLink.textContent = 'Contact';
contactLink.href = '#contact';
contact.appendChild(contactLink);
menuList.appendChild(contact);

const hamburger = document.getElementById('mob-menu');
hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  document.getElementById('main').style.filter = 'blur(5px)';
});

icon.addEventListener('click', () => {
  menu.style.display = 'none';
  document.getElementById('main').style.filter = 'none';
});

document
  .getElementsByClassName('mobile-link')[0]
  .addEventListener('click', () => {
    menu.style.display = 'none';
    document.getElementById('main').style.filter = 'none';
    document.getElementsByClassName('card');
  });

document
  .getElementsByClassName('mobile-link')[1]
  .addEventListener('click', () => {
    menu.style.display = 'none';
    document.getElementById('main').style.filter = 'none';
  });

document
  .getElementsByClassName('mobile-link')[2]
  .addEventListener('click', () => {
    menu.style.display = 'none';
    document.getElementById('main').style.filter = 'none';
  });

function ProjectCard(
  imageLink,
  imageAltText,
  title,
  descriptionName,
  descriptionPosition,
  descriptionYear,
  descriptionContetnt,
  technologies,
) {
  this.image = {
    link: imageLink,
    altText: imageAltText,
  };
  this.title = title;
  this.descriptionName = descriptionName;
  this.descriptionPosition = descriptionPosition;
  this.descriptionYear = descriptionYear;
  this.descriptionContetnt = descriptionContetnt;
  this.technologies = technologies;
}

const myProjects = [];

myProjects.push(
  new ProjectCard(
    'https://user-images.githubusercontent.com/54015740/128008554-c9a9d333-7451-4456-b867-3e429a0c6fd4.png',
    'Name of Project',
    'Yve??s konditorei',
    'Microverse',
    'Back End Dev',
    '2021',
    'A daily selection of Sweets; Yve??s konditorei a world-class Bakery with all you would want to taste.',
    ['html', 'css', 'javaScript'],
  ),
);

myProjects.push(
  new ProjectCard(
    'https://user-images.githubusercontent.com/54015740/143592111-fb31f0f8-bb71-414e-afd0-b30eebb2d221.png',
    'Name of Project',
    'Recipe App',
    'Microverse',
    'Full Stack Dev',
    '2021',
    'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list.',
    ['html', 'css', 'javaScript', 'React', 'PostgreSql'],
  ),
);

myProjects.push(
  new ProjectCard(
    'img/img3.png',
    'Name of Project',
    'Tonic',
    'CANOPY',
    'Back End Dev',
    '2015',
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    ['html', 'css', 'javaScript'],
  ),
);

myProjects.push(
  new ProjectCard(
    'img/img2.png',
    'Name of Project',
    'Uber Navigation',
    'Uber',
    'Back End Dev',
    '2015',
    'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    ['html', 'css', 'javaScript'],
  ),
);

const projectSection = document.getElementById('portfolio');
const cardUL = document.createElement('ul');
cardUL.className = 'cards-project-list';
projectSection.appendChild(cardUL);

function seeProjectButton(i) {
  const main = document.getElementById('main');
  const popupBackground = document.createElement('div');
  popupBackground.classList.add('popup-background');
  main.appendChild(popupBackground);

  const popupMobileCard = document.createElement('div');
  popupMobileCard.className = 'popup-mobile-card cards-project-list card';
  popupMobileCard.style.display = 'block';
  popupBackground.appendChild(popupMobileCard);

  const popupCardTop = document.createElement('div');
  popupCardTop.className = 'popup-card-top';
  popupMobileCard.appendChild(popupCardTop);

  const popupCardTitle = document.createElement('h2');
  popupCardTitle.className = 'card-title';
  popupCardTitle.textContent = `${myProjects[i].title}`;
  popupCardTop.appendChild(popupCardTitle);

  const popupClose = document.createElement('i');
  popupClose.addEventListener('click', () => {
    main.removeChild(popupBackground);
  });
  popupClose.className = 'fas fa-times popupCLose';
  popupCardTop.appendChild(popupClose);

  const popupCardDescription = document.createElement('p');
  popupCardDescription.className = 'card-description';
  popupCardDescription.textContent = `${myProjects[i].descriptionName}`;
  popupMobileCard.appendChild(popupCardDescription);

  const popupCardSpan = document.createElement('span');
  popupCardSpan.textContent = `${myProjects[i].descriptionPosition}`;
  popupCardSpan.className = 'dot';
  popupCardDescription.appendChild(popupCardSpan);

  const cardSpanTwo = document.createElement('span');
  cardSpanTwo.textContent = `${myProjects[i].descriptionYear}`;
  popupCardDescription.appendChild(cardSpanTwo);

  const popupCardImage = document.createElement('img');
  popupCardImage.className = `card-image${i}`;
  popupCardImage.id = 'popupimage';
  popupCardImage.className = 'popup-image';
  popupCardImage.src = myProjects[i].image.link;
  popupCardImage.altText = myProjects[i].image.altText;
  popupMobileCard.appendChild(popupCardImage);

  const popupCardContent = document.createElement('div');
  popupCardContent.className = 'card-content';
  popupCardContent.id = 'popup-content';
  popupMobileCard.appendChild(popupCardContent);

  const popupCardDescriptionContent = document.createElement("p");
  popupCardDescriptionContent.textContent = "A daily selection of Sweets; Yve??s konditorei a world-class Bakery with all you would want to taste.";
  popupCardDescriptionContent.className = "card-text-content";
  popupCardContent.appendChild(popupCardDescriptionContent);

  const popupCardContentDIV = document.createElement('div');
  popupCardContentDIV.className = 'popup-card-div';
  popupCardContent.appendChild(popupCardContentDIV);

  const popupCardTechnologiesList = document.createElement('ul');
  popupCardTechnologiesList.className = 'butonns-languages';
  popupCardContentDIV.appendChild(popupCardTechnologiesList);

  myProjects[i].technologies.forEach((element) => {
    const popupCardTechnologie = document.createElement('li');
    popupCardTechnologie.className = 'btn-lg';
    popupCardTechnologie.textContent = element;
    popupCardTechnologiesList.appendChild(popupCardTechnologie);
  });

  const popupButtonDIV = document.createElement('div');
  popupButtonDIV.className = 'popup-button-div';
  popupCardContentDIV.appendChild(popupButtonDIV);
  const popupButtonLiveLink = document.createElement('a');
  popupButtonLiveLink.className = 'btn-project';
  popupButtonLiveLink.textContent = 'See Live';
  popupButtonLiveLink.href = 'https://sheylapozo.github.io/Capstone-Bakery/';
  popupButtonDIV.appendChild(popupButtonLiveLink);
  const popupButtonLiveIcon = document.createElement('img');
  popupButtonLiveIcon.src = './img/icon-live.png';
  popupButtonLiveLink.appendChild(popupButtonLiveIcon);
  const popupButtonGithubLink = document.createElement('a');
  popupButtonGithubLink.textContent = 'See Source';
  popupButtonGithubLink.href = 'https://github.com/sheylaPozo/Capstone-Bakery';
  popupButtonGithubLink.className = 'btn-project';
  popupButtonDIV.appendChild(popupButtonGithubLink);
  const popupButtonGithubIcon = document.createElement('img');
  popupButtonGithubIcon.src = './img/icon-github.png';
  popupButtonGithubLink.appendChild(popupButtonGithubIcon);
}

for (let i = 0; i < myProjects.length; i += 1) {
  const cardList = document.createElement('li');
  cardList.className = 'card';
  cardUL.appendChild(cardList);

  const cardImage = document.createElement('img');
  cardImage.className = `card-image${i}`;
  cardImage.src = myProjects[i].image.link;
  cardImage.altText = myProjects[i].image.altText;
  cardList.appendChild(cardImage);

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  cardList.appendChild(cardContent);

  const cardTitle = document.createElement('h2');
  cardTitle.className = 'card-title';
  cardTitle.textContent = myProjects[i].title;
  cardContent.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.className = 'card-description';
  cardDescription.textContent = `${myProjects[i].descriptionName}`;
  cardContent.appendChild(cardDescription);

  const cardSpan = document.createElement('span');
  cardSpan.textContent = `${myProjects[i].descriptionPosition} `;
  cardSpan.className = 'dot';
  cardDescription.appendChild(cardSpan);

  const cardSpanTwo = document.createElement('span');
  cardSpanTwo.textContent = `${myProjects[i].descriptionYear}`;
  cardDescription.appendChild(cardSpanTwo);

  const cardDescriptionContent = document.createElement('p');
  cardDescriptionContent.textContent = 'A daily selection of Sweets; Yve??s konditorei a world-class Bakery with all you would want to taste';
  cardDescriptionContent.className = 'card-text-content';
  cardContent.appendChild(cardDescriptionContent);

  const cardTechnologiesList = document.createElement('ul');
  cardTechnologiesList.className = 'butonns-languages';
  cardContent.appendChild(cardTechnologiesList);

  myProjects[i].technologies.forEach((element) => {
    const cardTechnologie = document.createElement('li');
    cardTechnologie.className = 'btn-lg';
    cardTechnologie.textContent = element;
    cardTechnologiesList.appendChild(cardTechnologie);
  });

  const cardButton = document.createElement('button');
  cardButton.className = 'btn-project';
  cardButton.textContent = 'See Project';
  cardContent.appendChild(cardButton);
  cardButton.id = i;
  cardButton.addEventListener('click', (e) => {
    seeProjectButton(e.target.id);
  });
}

const userData = JSON.stringify({
  name: '',
  email: '',
  message: '',
});

const form = document.getElementById('contact-form');
const usernameInput = document.getElementById('user-name');
const emailInput = document.getElementById('user-email');
const messageText = document.getElementById('message');
const errorMessage = document.getElementById('error-message');
const resetBtn = document.getElementById('reset');

function populateFormData(value, itemName) {
  if (itemName === 'user-name') {
    formData.inputName = value;
  } else if (itemName === 'user-email') {
    formData.inputEmail = value;
  } else if (itemName === 'message') {
    formData.inputMessage = value;
  } else {
    throw new Error('Invalid attribute name for given value');
  }
}
username.addEventListener('change', (event) => {
  populateFormData(event.target.value, 'user-name');
});
email.addEventListener('change', (event) => {
  populateFormData(event.target.value, 'user-email');
});
msg.addEventListener('change', (event) => {
  populateFormData(event.target.value, 'message');
});

form.addEventListener('submit', (e) => {
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    e.preventDefault();
    errorMessage.textContent = 'Please, use only lowercase letters for your e-mail!';
  } else {
    localStorage.setItem('userInfo', userData);
  }
});
