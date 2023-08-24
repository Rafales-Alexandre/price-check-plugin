document.addEventListener('click', function(event) {
    // Check if a card was clicked
    if (event.target.hasAttribute('id')) { // Assuming the card ID is stored in a data attribute named 'data-card-id'
        let cardId = event.target.getAttribute('id');
        console.log(cardId);
    }
});

function displayPriceOnCard(cardElement, price) {
    // Display the price on the card or in a popup
    let priceOverlay = document.createElement('div');
    priceOverlay.innerText = `$${price}`;
    priceOverlay.classList.add('price-overlay');
    cardElement.appendChild(priceOverlay);
}
