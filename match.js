const form = document.querySelector('form');

form.addEventListener('change', (event) => {
	const option = event.target.name;
	const value = event.target.value;

	if (event.target.checked) {
		const grid = document.createElement('div');
		grid.classList.add('grid');
		grid.style.gridTemplateColumns = '1fr';

		const item = document.createElement('div');
		item.classList.add('item');
		item.textContent = `${option} ${value}`;

		grid.appendChild(item);

		document.body.appendChild(grid);
	} else {
		const items = document.querySelectorAll(`.item`);
		items.forEach((item) => {
			if (item.textContent === `${option} ${value}`) {
				item.parentElement.remove();
			}
		});
	}
});
$('.image-slider').slick({
    // options for the slider
  });
  $('.option-1').on('click', function() {
    $('.grid-item-1 .image-slider').show();
    $('.grid-item-2 .image-slider').hide();
    $('.grid-item-3 .image-slider').hide();
  });
  
  $('.option-2').on('click', function() {
    $('.grid-item-1 .image-slider').hide();
    $('.grid-item-2 .image-slider').show();
    $('.grid-item-3 .image-slider').hide();
  });
  
  $('.option-3').on('click', function() {
    $('.grid-item-1 .image-slider').hide();
    $('.grid-item-2 .image-slider').hide();
    $('.grid-item-3 .image-slider').show();
  });
  