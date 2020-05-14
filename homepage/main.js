const firstName = "Angelika";
const page = '"Twój idealny planer"';

console.log(
  `Cześć, nazywam się ${firstName}. Miło Cię widzieć na stronie ${page}. :)`
);

const emptyParagraph = document.querySelector('.aboutme__regular-text--js');

emptyParagraph.innerHTML = "Cześć, nazywam się Angelika. Miło Cię widzieć na stronie 'Twój idealny Planer'. :)";
