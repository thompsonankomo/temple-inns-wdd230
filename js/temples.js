const URL = '../templeinns-wdd230/json/temples.json';
const cards = document.querySelector('temples');

async function getTemples() {
	let response = await fetch(URL);
	if (response.ok) {
		let data = await response.json();
		buildTempleCards(data);
	} else {
		throw Error(response.statusText);
	}
}

function buildTempleCards(data) {
    data.companies.forEach(temple => {
		let card = document.createElement('section');
		let h2 = document.createElement('h2');
		let p = document.createElement('p');
		let img = document.createElement('img');
	
		h2.innerHTML = `${temple.name}`;
		p.innerHTML = `Address: ${temple.address}<br>Phone Number: ${temple.phone}<br>Website: ${temple.website}`;
		img.setAttribute('src', company.image);
		img.setAttribute('alt', `Picture of ${company.name} company`);
		img.setAttribute('loading', 'lazy');

		card.append(h2);
		card.appendChild(p);
		card.append(img);

		cards.append(card);
	});
}

getTemples();

const gridbutton = document.querySelector("#cards");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".temple");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}