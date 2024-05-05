const mainSection = document.getElementsByClassName('main-section')[0];

const header = document.createElement('header');
const nav = document.createElement('nav');
const logo = document.createElement('a');
logo.setAttribute('href', 'index.html');
logo.className = 'logo';
const logoImage = document.createElement('img');
logoImage.setAttribute('src', 'images/logo.png');
logo.append(logoImage);

const ul = document.createElement('ul');

arrayOfHeader.forEach((e) => {
    const li = document.createElement('li');
    const i2 = document.createElement('i');
    i2.className = 'bx bxs-chevron-down';
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent = e.nameOfElement;
    a.append(i2);

    callUrl(e.jsonFile).then((data) => li.append(data));

    li.append(a);
    ul.append(li);

    li.addEventListener('mouseover', () => {
        i2.style.rotate = '180deg';
    })
    li.addEventListener('mouseout', () => {
        i2.style.rotate = '0deg';
    })
});


nav.append(logo, ul);


const sosialMenu = document.createElement('div');
sosialMenu.className = 'sosial-menu';

const form = document.createElement('form');
const searchBox = document.createElement('input');
searchBox.setAttribute('type', 'search');
searchBox.setAttribute('placeholder', 'Bir şey axtar...');

const searchButton = document.createElement('div');
const searchButtonIcon = document.createElement('i');
searchButtonIcon.className = 'bx bx-search';
searchButton.append(searchButtonIcon);

form.append(searchBox, searchButton);

const sosial = document.createElement('div');
sosial.className = 'sosial';

const phone = document.createElement('a');
phone.setAttribute('href', 'tel:+994774501546')
const phoneIcon = document.createElement('i');
phoneIcon.className = 'bx bx-phone';
phone.append(phoneIcon);

const mail = document.createElement('a');
mail.setAttribute('href', 'mailto:elton.cabbarli22@gmail.com')
const mailIcon = document.createElement('i');
mailIcon.className = 'bx bx-envelope';
mail.append(mailIcon);

const insta = document.createElement('a');
insta.setAttribute('href', 'https://www.instagram.com/ramana.kitab.evi/');
insta.setAttribute('target', '_blank')
const instaIcon = document.createElement('i');
instaIcon.className = 'bx bxl-instagram';
insta.append(instaIcon);

const location1 = document.createElement('a');
location1.setAttribute('href', 'location')
const locationIcon = document.createElement('i');
locationIcon.className = 'bx bxs-map';
const locationText = document.createElement('span');
locationText.textContent = ' ünvan';

location1.append(locationIcon, locationText);

sosial.append(phone, mail, insta, location1);

sosialMenu.append(form, sosial);

header.append(nav, sosialMenu);

mainSection.append(header);




if (window.innerWidth < 1050) {
    const menuIcon = document.createElement('i');
    menuIcon.className = 'bx bx-grid-alt';
    nav.append(menuIcon);

    menuIcon.addEventListener('click', () => {
        ul.classList.toggle('come-go');
        menuIcon.classList.toggle('grid-color');
    })
}