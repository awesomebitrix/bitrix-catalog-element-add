window.addEventListener('load', function load(event) {
	window.removeEventListener('load', load, false);
	
	var priceAdder = document.querySelector('.prices__adder'),
	newPriceId = 1;
	if (priceAdder != undefined) {
		priceAdder.addEventListener('click', function (e) {
			e.preventDefault();
			
			var newPrice = document.createElement('tr');
			newPrice.innerHTML = newPriceInner.replace(/#PRICE_ID#/g, 'price_' + newPriceId.toString());
			document.querySelector('.prices__container').appendChild(newPrice);
			newPriceId++;
		});
	}
});