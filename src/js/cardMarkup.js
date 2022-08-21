function createOneCountry(country) {
  const { name, capital, population, flags, languages } = country;
  return `
            <div class = "country-wrapper">
                <div class = "country-flag-wrapper">
                 <img class = "country-flag" src = "${flags.svg}" alt = "${
    name.official
  }">
                </div>
                <p class = "country-name"> ${name.common} </p>
            </div>
            <p class="country-capital">Capital:<span class="bold-text">${capital}</span> </p>
            <p class="country-population">Population:<span class="bold-text">${population}</span> </p>
            <p class="country-languages">Languages:<span class="bold-text">${Object.values(
              languages
            ).join(', ')}</span> </p>`;
}

function createTenCountries(countries) {
  return countries.reduce(
    (acc, { flags, name }) =>
      acc +
      `<li class="country-list__item">
            <div class="country-list__image">
                <img  src="${flags.svg}" alt="flag ${name.official}">
            </div>
            <p class="country-list__name">${name.common}</p>
         </li>
        `,
    ''
  );
}

function addMarkup(markup, element) {
  element.insertAdjacentHTML('beforeend', markup);
}

export { createOneCountry, createTenCountries, addMarkup };
