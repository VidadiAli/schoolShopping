const callSearchArea = () => {
    const searchArea = document.createElement('section');
    searchArea.className = 'search-area';

    let searchArray = [];
    arrayOfHeader.forEach(async (e) => {
        const jsonArray = await (await fetch(e.jsonFile)).json();

        jsonArray.forEach((f) => {
            searchArray.push(f);
        });
    });


    let arrayOfSearch = [];
    searchBox.addEventListener('keydown', () => {
        let countOfSearchElement = 0;
        arrayOfSearch = [];
        searchArea.innerHTML = '';
        searchArray.forEach((e) => {
            if ((((e.elementinAdi + e.sinif).toUpperCase()).trim()).includes((searchBox.value.toUpperCase()).trim())) {
                if (!arrayOfSearch.includes((e.elementinAdi + e.sinif).toUpperCase())) {
                    const searchElementBox = document.createElement('div');

                    //console.log((e.elementinAdi + e.sinif).toUpperCase() + " * " + searchBox.value.toUpperCase());
                    const searchBoxCover = document.createElement('img');
                    searchBoxCover.setAttribute('src', e.elementinShekli);
                    const searchBoxHead = document.createElement('h3');
                    searchBoxHead.textContent = e.elementinAdi;
                    const searchBoxClass = document.createElement('span');
                    searchBoxClass.textContent = e.sinif;

                    const nowBuy = document.createElement('button');
                    nowBuy.textContent = 'indi sifarish et'

                    searchElementBox.append(searchBoxCover, searchBoxHead, searchBoxClass, nowBuy);

                    searchArea.append(searchElementBox);

                    nowBuy.addEventListener('click', () => {
                        mainSection.append(goWhatsapp());
                    });

                    arrayOfSearch.push((e.elementinAdi + e.sinif).toUpperCase());

                    countOfSearchElement++;


                    main.addEventListener('click', (e) => {
                        if (e.target === main) searchArea.remove();
                    })
                }
            }
        });

        if (countOfSearchElement === 0) {

            const noElement = document.createElement('span');
            noElement.textContent = 'Axtardığınız obyekt stokda yoxdur :(';
            const closeArea = document.createElement('i');
            closeArea.className = 'bx bx-x';

            searchArea.append(noElement, closeArea);

            closeArea.addEventListener('click', () => {
                searchArea.remove();
            });

        }
        main.append(searchArea);
    });
}
