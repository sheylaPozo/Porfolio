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

// =======================================================================
// --------------------- Details popup window MOBILE----------------------
// =======================================================================

// ************Create HTML- project section************

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
    'images/image1.png',
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
    'images/image2.png',
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
    'images/image3.png',
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
    'images/image4.png',
    'Name of Project',
    'Tonic',
    'CANOPY',
    'Back End Dev',
    '2015',
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
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

  const popupCardDescriptionContent = document.createElement('p');
  popupCardDescriptionContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it but also the leap into electronic typesetting, remaining essent.";
  popupCardDescriptionContent.className = 'card-text-content';
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
  popupButtonLiveLink.href = '#';
  popupButtonDIV.appendChild(popupButtonLiveLink);
  const popupButtonLiveIcon = document.createElement('img');
  popupButtonLiveIcon.src = 'images/icon-live.png';
  popupButtonLiveLink.appendChild(popupButtonLiveIcon);
  const popupButtonGithubLink = document.createElement('a');
  popupButtonGithubLink.textContent = 'See Source';
  popupButtonGithubLink.href = '#';
  popupButtonGithubLink.className = 'btn-project';
  popupButtonDIV.appendChild(popupButtonGithubLink);
  const popupButtonGithubIcon = document.createElement('img');
  popupButtonGithubIcon.src = 'images/icon-github-purple.png';
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
  cardDescriptionContent.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
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
