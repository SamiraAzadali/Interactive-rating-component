let rateButton = document.querySelectorAll('.rate-btn');
let rateText = document.querySelector('.rate-text');
let rated = 0;

rateButton.forEach(button => {
    button.addEventListener('click', () => {
        rateButton.forEach(btn => {
            btn.style.background = 'hsla(217, 12%, 63%, 0.186)';
            btn.style.color = 'hsl(217, 12%, 63%)';
        })

        button.style.background = 'white';
        button.style.color = 'hsl(216, 12%, 8%)';
        rated = button.textContent;
        rateText.textContent = `You selected ${rated} out of 5`;

    })
})

let submitButton = document.querySelector('.submit-btn');
let ratePage = document.querySelector('.rate-container');
let thankYouPage = document.querySelector('.thankyou-container');

submitButton.addEventListener('click', () => {
    if (rated !== 0) {
        ratePage.style.display = 'none';
        thankYouPage.style.display = 'block';
    }

})

