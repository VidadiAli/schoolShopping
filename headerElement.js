const arrayOfHeader = [
    {
        nameOfElement: 'Dərs Ləvazimatları',
        iconOfElement: 'bx bx-book',
        jsonFile: 'dersLevazimatlari.json',
        caroselCover: 'images/carosel1.jpg',
        linkOfElement: 'ders-levazimatlari.html'
    },
    {
        nameOfElement: 'Suvenerlər',
        iconOfElement: 'bx bxs-cookie',
        jsonFile: 'dersLevazimatlari.json',
        caroselCover: 'images/carosel2.jpg',
        linkOfElement: 'suvenerler.html'
    },
    {
        nameOfElement: 'Ofis ləvazimatları',
        iconOfElement: 'bx bxs-devices',
        jsonFile: 'dersLevazimatlar.json',
        caroselCover: 'images/carosel3.jpg',
        linkOfElement: 'ofis-levazimatlari.html'
    },
    {
        nameOfElement: 'Digər',
        iconOfElement: 'bx bx-plus-medical',
        jsonFile: 'dersLevazimatlar.json',
        caroselCover: 'images/carosel4.jpg',
        linkOfElement: 'diger.html'
    }
];


const callUrl = async (url) => {
    const arrayOfDers = await (await fetch(url)).json();

    const ul = document.createElement('ul');
    let arrayOfSection = [];
    arrayOfDers.forEach((e) => {
        if (!arrayOfSection.includes(e.bolum)) {
            arrayOfSection.push(e.bolum);
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.textContent = e.bolum;

            const secondUl = document.createElement('ul');
            let arrayOfClass = [];
            arrayOfDers.forEach((f) => {
                if (e.bolum === f.bolum) {
                    if (!arrayOfClass.includes(f.sinif)) {
                        arrayOfClass.push(f.sinif);
                        const secondLi = document.createElement('li');
                        const secondA = document.createElement('a');
                        secondA.setAttribute('href', '#');
                        secondA.textContent = f.sinif;
                        secondLi.append(secondA);
                        secondUl.append(secondLi);

                        secondLi.addEventListener('click', () => {
                            callMain(url, f.sinif, f.bolum);
                        })
                    }
                }
            })
            li.append(a, secondUl);
            ul.append(li);
        }
    });


    return ul;
}

