const london = {
  imageUrl: image,
  seasons: ["spring, summer"],
  rating: 9 / 10,
  packages: ["weekly, monthly"],
  description: "Lorem Impus",
};
const paris = {
  imageUrl: image,
  seasons: "all seasons",
  rating: 10 / 10,
  packages: ["weekly, monthly"],
  description: "Lorem Impus",
};
const dubai = {
  imageUrl: image,
  seasons: ["spring, summer"],
  rating: 10 / 10,
  packages: ["weekly, monthly"],
  description: "Lorem Impus",
};
const antalya = {
  imageUrl: image,
  seasons: "summer",
  rating: 8 / 10,
  packages: ["weekly, monthly"],
  description: "Lorem Impus",
};
const hawaii = {
  imageUrl: image,
  seasons: "all seasons",
  rating: 9 / 10,
  packages: ["weekly, monthly"],
  description: "Lorem Impus",
};
const bali = {
  imageUrl: image,
  seasons: "all seasons",
  rating: 8 / 10,
  packages: ["weekly, monthly"],
  description: "Lorem Impus",
};

const cities = [london, paris, dubai, antalya, hawaii, bali];

function renderCarouselCards(city) {
  return (
    <div className="London-container">
      <img src="city." />
      <div className="Seasons">${city.seasons}</div>
      <div className="Rating">${city.rating}</div>
      <div className="Packages">${city.packages}</div>
      <div className="Description">${city.description}</div>
    </div>
  );
}

const carouselItems = document.querySelector(".AboutPlaces-container");

const londoncard = document.createElement("div");
carouselItems.appendChild(londoncard);
londoncard.outerHTML = renderCarouselCards(london);

const pariscard = document.createElement("div");
carouselItems.appendChild(pariscard);
pariscard.outerHTML = renderCarouselCards(paris);

const dubaicard = document.createElement("div");
carouselItems.appendChild(dubaicard);
dubaicard.outerHTML = renderCarouselCards(dubai);
