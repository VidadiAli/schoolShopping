const goWhatsapp = () => {
    const sectionBoxBuyLinkBoxBack = document.createElement('div');
    sectionBoxBuyLinkBoxBack.className = 'link-box-back';
    const sectionBoxBuyLinkBox = document.createElement('div');
    const sectionBoxBuyText = document.createElement('p');
    sectionBoxBuyText.textContent = `Whatsapp xəttimiziə yönəldikdən sonra 
    xahiş edirik ki, seçdiyiniz malın adını qeyd edəsiniz: `;
    const sectionBoxBuyLink = document.createElement('a');
    sectionBoxBuyLink.textContent = 'WhatSapp xəttinə yönəlt';
    sectionBoxBuyLink.setAttribute('href', 'https://wa.me/+994774501546');
    sectionBoxBuyLink.setAttribute('target', '_blank');

    const linkBoxClose = document.createElement('i');
    linkBoxClose.className = 'bx bx-x';

    sectionBoxBuyLinkBox.append(sectionBoxBuyText, sectionBoxBuyLink, linkBoxClose);

    sectionBoxBuyLinkBoxBack.append(sectionBoxBuyLinkBox);


    sectionBoxBuyLink.addEventListener('click', () => {
        sectionBoxBuyLinkBoxBack.remove();
    });

    linkBoxClose.addEventListener('click', () => {
        sectionBoxBuyLinkBoxBack.remove();
    });

    return sectionBoxBuyLinkBoxBack;
}