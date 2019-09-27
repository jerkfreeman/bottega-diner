const breakfastMenuMain = {
	"breakfast burrito" : 8,
	"omelette" : 7,
	"huevos rancheros" : 10
};

const breakfastMenuSide = {
	"bacon" : 3,
	"hash browns" : 3,
	"sausage" : 3
};

const listMenuItems = menu => {
	let menuString = [];
	Object.keys(menu).map(item => {
		menuString.push(`${item}`)
	})
	return menuString.join()
}

alert(`For main dishes we have ${listMenuItems(breakfastMenuMain)} and for side dishes we have ${listMenuItems(breakfastMenuSide)}`);

const chosenItemMain = prompt("What would you like for your main dish?");

alert(`You want the ${chosenItemMain}? It's very good!`);

const breakfastMainPrice = breakfastMenuMain[chosenItemMain];

alert(`That will be $${breakfastMainPrice}`);

const chosenItemFirstSide = prompt("What would you like for your first side dish?");

alert(`The ${chosenItemFirstSide}? A good choice!`);

const breakfastFirstSidePrice = breakfastMenuSide[chosenItemFirstSide];

alert(`That will be $${breakfastFirstSidePrice}`);

const chosenItemSecondSide = prompt("What would you like for your second side dish?");

alert(`And the ${chosenItemSecondSide}? Sounds good!`);

const breakfastSecondSidePrice = breakfastMenuSide[chosenItemSecondSide];

alert(`Your total will be $${breakfastMainPrice + breakfastFirstSidePrice + breakfastSecondSidePrice}`);

// Create lunch and dinner menus, different prices