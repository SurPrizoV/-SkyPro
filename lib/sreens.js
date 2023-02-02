const main = document.querySelector('.items');

function mainPageScreen() {
    const firstScreen = document.createElement('div');
    firstScreen.classList.add('first_screen');
    main.appendChild(firstScreen);

    window.application.blocks['mainPage'] = mainPage;
    window.application.renderBlock('mainPage', firstScreen);
}

window.application.screens['mainPage'] = mainPageScreen;
window.application.renderScreen('mainPage');

function secondPageScreen() {
    main.innerHTML = '';
    const secondScreen = document.createElement('div');
    secondScreen.classList.add('second_screen');
    main.appendChild(secondScreen);

    window.application.blocks['secondPage'] = secondPage;
    window.application.renderBlock('secondPage', secondScreen);
}