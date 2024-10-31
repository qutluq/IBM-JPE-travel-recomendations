
const closeRecommendations = () => {
  const bodyDiv = document.getElementsByTagName('body')?.[0];
  const recommendationsDiv = document.getElementById("recommendations")
  if(recommendationsDiv && bodyDiv){
    bodyDiv.removeChild(recommendationsDiv)
  }
}

const clearSearchInput = () => {
  const searchInput = document.getElementById('search-input');
  if(searchInput){
    searchInput.value = ""
  }
}

const createRecommendationItem = (place) => {
  const placeDiv = document.createElement('div')
  placeDiv.classList = ['recommendation-item']

  placeDiv.innerHTML += `<img src="${place.imageUrl}" alt="image">`;

  const details = document.createElement('div')
  details.classList = ['recommendation-item-details']

  details.innerHTML += `<h2>${place.name}</h2>`;
  details.innerHTML += `<p>${place.description}</p>`;
  details.innerHTML += `<button class="recommendation-btn">visit</button>`;
  placeDiv.appendChild(details)

  return placeDiv;
}

const searchDestination = () => {
  const searchValue = document.getElementById("search-input").value.toLowerCase();
  if(!searchValue) return;
  if(searchValue.length < 4) return alert('search string must be longer than 3 characters');

  fetch("travel_recommendation_api.json")
    .then((response) => response.json())
    .then((places) => {
      const parent = document.getElementsByTagName('body')?.[0];
      const closeBtn = document.createElement('button')
      closeBtn.classList = ['close-recommendations']
      closeBtn.innerText = "close"

      const resultsDiv = document.createElement('div')
      resultsDiv.id = "recommendations"
      resultsDiv.classList = ['search-results']
      resultsDiv.appendChild(closeBtn)
      closeBtn.addEventListener("click", closeRecommendations);

      if(searchValue.startsWith('beaches') || 'beaches'.startsWith(searchValue)){

        places.beaches.forEach((beach) => {
          const placeDiv = createRecommendationItem(beach)
          resultsDiv.appendChild(placeDiv)
          })

        parent.appendChild(resultsDiv)
        return;
      } 

      if(searchValue.startsWith('countries') || 'countries'.startsWith(searchValue)){
        console.log({countries: places.countries})

        places.countries.forEach((country) => {
          country.cities.forEach((city) => {
            const placeDiv = createRecommendationItem(city)
            resultsDiv.appendChild(placeDiv)
            })
          })

        parent.appendChild(resultsDiv)
        return;
      } 

      if(searchValue.startsWith('temples') || 'temples'.startsWith(searchValue)){
        places.temples.forEach((temple) => {
          const placeDiv = createRecommendationItem(temple)
          resultsDiv.appendChild(placeDiv)
          })

        parent.appendChild(resultsDiv)
        return;
      } 

      resultsDiv.innerHTML = "No recommendation found.";
    })
    .catch((error) => {
      console.error("Error:", error);
      resultsDiv.innerHTML = "An error occurred while fetching data.";
    });
};

const btnSearch = document.getElementById("btn-search");
btnSearch?.addEventListener("click", searchDestination);

const btnClear = document.getElementById("clear-btn");
btnClear?.addEventListener("click", clearSearchInput);
