const callThirdElement = () => {
    const mainPageThirdElement = document.createElement('div');
    mainPageThirdElement.className = 'third-element';

    arrayOfHeader.forEach(async (e) => {
        const elementsOfThird = document.createElement('div');
        const boxOfHead = document.createElement('div');
        boxOfHead.className = 'box-of-head';
        const nameOfHead = document.createElement('h2');
        nameOfHead.textContent = e.nameOfElement;
        const linkOfHead = document.createElement('a');
        linkOfHead.textContent = 'Hamısına Bax ...';
        linkOfHead.setAttribute('href', e.linkOfElement);

        boxOfHead.append(nameOfHead, linkOfHead);

        const arrayOfJsonFile = await (await fetch(e.jsonFile)).json();

        const elementOfBoxes = document.createElement('div');
        elementOfBoxes.className = 'elements-of-boxes';
        
        let elementCount = 6;

        if (window.innerWidth < 1300 && innerWidth >= 850) elementCount = 5
        else if (window.innerWidth < 850 && innerWidth >= 600) elementCount = 4
        else if (window.innerWidth < 600) elementCount = 3;

        for (let j = 0; j < elementCount; j++) {
            const boxElement = document.createElement('div');
            const boxElementTake = document.createElement('small');
            boxElementTake.textContent = 'Çatdırılma var';
            const boxElementImage = document.createElement('img');
            boxElementImage.setAttribute('src', arrayOfJsonFile[j].elementinShekli);
            const boxElementName = document.createElement('h4');
            boxElementName.textContent = arrayOfJsonFile[j].elementinAdi;
            const boxElementPrice = document.createElement('span');
            boxElementPrice.innerHTML = arrayOfJsonFile[j].elementinQiymeti + ' &#8380;';
            const sectionBoxBuy = document.createElement('button');
            sectionBoxBuy.textContent = 'İndi sifariş et';

            sectionBoxBuy.addEventListener('click', () => {
                const sectionBoxBuyLinkBoxBack = goWhatsapp();
                mainSection.append(sectionBoxBuyLinkBoxBack);
            });

            boxElement.append(boxElementTake, boxElementImage, boxElementName, boxElementPrice, sectionBoxBuy);

            elementOfBoxes.append(boxElement);
        }

        elementsOfThird.append(boxOfHead, elementOfBoxes);

        mainPageThirdElement.append(elementsOfThird);
    })

    return mainPageThirdElement;
}