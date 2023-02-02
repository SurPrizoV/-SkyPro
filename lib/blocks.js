const API_BASE_URL = 'https://api.npoint.io/f2dabf68c06faf7720a9';
const API_NEW_URL = '/list/';

function mainPage(container) {
    request({
        url: API_BASE_URL, 
        onSuccess: (data) => {
            mainPageArray = [];
            Object.values(data)[0].forEach((element, num) => {
                const mainPageLink = document.createElement('a');
                mainPageLink.textContent = element;
                mainPageLink.addEventListener('click', () => {
                    window.application.link = `${API_BASE_URL}${API_NEW_URL}${num}`;
                    window.application.text = element;
                    window.application.screens['secondPage'] = secondPageScreen;
                    window.application.renderScreen('secondPage');
                })
                mainPageArray.push(mainPageLink);
            })
            mainPageArray.forEach(element => {
                container.appendChild(element);
            })
        }

})
};

function secondPage(container) {
    const secondPageArray = [];
    const secondPageTitle = document.createElement('p');
    secondPageTitle.classList.add('second_page_title');
    request({
        url: window.application.link,
        onSuccess: (data) => {
            secondPageTitle.textContent = `This is page for ${data}`;
        }
    })
    secondPageArray.push(secondPageTitle);
    secondPageArray.forEach(element => {
        container.appendChild(element);
    })
}