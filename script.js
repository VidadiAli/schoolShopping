const main = document.createElement('main');

callMainPage();

callSearchArea();


const callMain = async (url, sinif, bolum) => {

    main.innerHTML = '';

    const arrayOfDers = await (await fetch(url)).json();

    const section = document.createElement('section');
    section.className = 'section';

    arrayOfDers.forEach((e) => {
        if (e.sinif === sinif && e.bolum === bolum) {
            const sectionBox = document.createElement('div');

            const sectionBoxForImage = document.createElement('div');
            const sectionBoxImage = document.createElement('img');
            sectionBoxImage.setAttribute('src', e.elementinShekli);
            const countOfBox = document.createElement('span');
            countOfBox.textContent = e.say + " ədəd";
            sectionBoxForImage.append(sectionBoxImage, countOfBox);

            const sectionBoxHead = document.createElement('h2');
            sectionBoxHead.textContent = e.elementinAdi;

            const sectionBoxAmount = document.createElement('span');
            sectionBoxAmount.innerHTML = e.elementinQiymeti + ' &#8380;';

            const sectionBoxBuy = document.createElement('button');
            sectionBoxBuy.textContent = 'İndi sifariş et';

            sectionBoxBuy.addEventListener('click', () => {
                const sectionBoxBuyLinkBoxBack = goWhatsapp();
                mainSection.append(sectionBoxBuyLinkBoxBack);
            });

            sectionBox.append(sectionBoxForImage, sectionBoxHead, sectionBoxAmount, sectionBoxBuy);
            section.append(sectionBox);
        }
    })

    main.append(section);
}

mainSection.append(main);
