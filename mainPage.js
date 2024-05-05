const callMainPage = () => {
    const mainPage = document.createElement('section');
    mainPage.className = 'main-page';

    const mainPageFirstElement = document.createElement('div');
    mainPageFirstElement.className = 'first-element';

    arrayOfHeader.forEach((e) => {
        const mainPageElement = document.createElement('div');
        mainPageElement.className = 'main-page-element';
        const mainPageElementCover = document.createElement('img');
        mainPageElementCover.setAttribute('src', e.caroselCover);

        const mainPageElementChild = document.createElement('div');
        const mainPageElementChildHead = document.createElement('h2');
        mainPageElementChildHead.textContent = e.nameOfElement;
        const mainPageElementChildIcon = document.createElement('i');
        mainPageElementChildIcon.className = e.iconOfElement;
        const mainPageElementChildLink = document.createElement('a');
        mainPageElementChildLink.setAttribute('href', e.linkOfElement);
        mainPageElementChildLink.textContent = 'Ətraflı'

        mainPageElementChild.append(mainPageElementChildHead, mainPageElementChildIcon, mainPageElementChildLink);

        mainPageElement.append(mainPageElementCover, mainPageElementChild);

        mainPageFirstElement.append(mainPageElement);

    });


    const mainPageSecondElement = document.createElement('div');
    mainPageSecondElement.className = 'second-element';

    const mainPageSecondElementHead = document.createElement('h2');
    mainPageSecondElementHead.textContent = 'Daha çox nələrimiz var';

    const mainPageSecondElementChild = document.createElement('div');

    const mainPageSecondElementChildBox1 = document.createElement('div');
    mainPageSecondElementChildBox1.className = 'child-box'
    const mainPageSecondElementChildBox1Icon = document.createElement('i');
    mainPageSecondElementChildBox1Icon.className = 'bx bx-cool child-box-icon';
    const mainPageSecondElementChildBox1Text = document.createElement('span');
    mainPageSecondElementChildBox1Text.textContent = 'stikerlər';

    mainPageSecondElementChildBox1.append(mainPageSecondElementChildBox1Icon, mainPageSecondElementChildBox1Text);

    const mainPageSecondElementChildBox2 = document.createElement('div');
    mainPageSecondElementChildBox2.className = 'child-box'
    const mainPageSecondElementChildBox2Icon = document.createElement('i');
    mainPageSecondElementChildBox2Icon.className = 'bx bx-cool child-box-icon';
    const mainPageSecondElementChildBox2Text = document.createElement('span');
    mainPageSecondElementChildBox2Text.textContent = 'stikerlər';

    mainPageSecondElementChildBox2.append(mainPageSecondElementChildBox2Icon, mainPageSecondElementChildBox2Text);

    mainPageSecondElementChild.append(mainPageSecondElementChildBox1, mainPageSecondElementChildBox2);
    mainPageSecondElement.append(mainPageSecondElementHead, mainPageSecondElementChild)



    mainPage.append(mainPageFirstElement, callThirdElement(), mainPageSecondElement);



    const mapOfLocation = document.createElement('div');
    mapOfLocation.className = 'map-of-element';

    mapOfLocation.innerHTML = `
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97034.71457266502!2d49.79216218169577!3d40.41784376329641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308b70931ad13d%3A0x7f805998c1202a4c!2sKitab%20evi!5e0!3m2!1str!2saz!4v1714852930479!5m2!1str!2saz" 
    width="600" height="450" style="border:0;" allowfullscreen="" 
    loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>`

    main.append(mainPage, mapOfLocation);


    // const colorOfChildBoxIcon = ['red', 'yellow', 'green', 'blue', 'orange', 'violet'];
    // const childBoxIcon = document.getElementsByClassName('child-box-icon');

    // for (let i = 0; i < 3; i++) {
    //     childBoxIcon[0].style.color = colorOfChildBoxIcon[i];
    //     console.log(5);
    // }


    const mainPageElement = document.getElementsByClassName('main-page-element');

    let arrayOfRight = [], startOfArray = -100;

    const callCaroselStyle = () => {
        for (let i in arrayOfHeader) {
            arrayOfRight.push(startOfArray);
            startOfArray = startOfArray + 100;
            if (startOfArray === (arrayOfHeader.length - 1) * 100) {
                startOfArray = -100;
            }
        }
    }


    callCaroselStyle();

    const callInterval = () => {
        for (let i in arrayOfHeader) {
            mainPageElement[i].style.right = arrayOfRight[i] + '%';
            if (arrayOfRight[i] === 200) {
                mainPageElement[i].style.display = 'none';
            }
            else if (arrayOfRight[i] === -100) {
                mainPageElement[i].style.display = 'flex';
            }
        }
        startOfArray = arrayOfRight[1];
        arrayOfRight = [];
        callCaroselStyle();
    }

    setInterval(callInterval, 3000);
}

