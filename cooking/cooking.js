'use strict';

const e = React.createElement;

const characters = [
["Golden Deer", [
"Claude",
"Lorenz",
"Hilda",
"Raphael",
"Lysithea",
"Ignatz",
"Marianne",
"Leonie",
]],
["Black Eagles", [
"Edelgard",
"Hubert",
"Dorothea",
"Ferdinand",
"Bernadetta",
"Caspar",
"Petra",
"Linhardt",
]],
["Blue Lions", [
"Dimitri",
"Dedue",
"Felix",
"Mercedes",
"Ashe",
"Annette",
"Sylvain",
"Ingrid",
]],
["Church of Seiros", [
"Rhea",
"Manuela",
"Hanneman",
"Seteth",
"Flayn",
"Cyril",
]],
["Knights of Seiros", [
"Jeralt",
"Catherine",
"Alois",
"Gilbert",
"Shamir",
]],
["DLC Exclusive", [
"Yuri",
"Balthus",
"Constance",
"Hapi",
"Jeritza",
"Anna",
]],
]

const foods = [
{
  name: "Saghert and Cream",
  characters: ["Edelgard", "Dimitri", "Ferdinand", "Linhardt", "Bernadetta", "Dorothea", "Ashe", "Mercedes", "Annette", "Lorenz", "Ignatz", "Lysithea", "Marianne", "Hilda", "Flayn", "Alois", "Yuri", "Constance", "Jeritza"],
  ingredients: "Peach Currant x1   Noa Fruit x1"
},
{
  name: "Sweet Bun Trio",
  characters: ["Edelgard", "Dimitri", "Ferdinand", "Linhardt", "Caspar", "Bernadetta", "Ashe", "Sylvain", "Mercedes", "Annette", "Ingrid", "Ignatz", "Lysithea", "Marianne", "Hilda", "Flayn", "Alois", "Yuri", "Constance", "Jeritza"],
  ingredients: "Albinean Berries x1   Noa Fruit x1"
},
{
  name: "Pheasant Roast with Berry Sauce",
  characters: ["Claude", "Ferdinand", "Linhardt", "Ashe", "Sylvain", "Mercedes", "Annette", "Ingrid", "Raphael", "Lysithea", "Flayn", "Alois", "Shamir", "Cyril", "Yuri", "Constance", "Hapi", "Jeritza", "Anna"],
  ingredients: "Poultry x1   Albinean Berries x1"
},
{
  name: "Peach Sorbet",
  characters: ["Edelgard", "Linhardt", "Bernadetta", "Dorothea", "Ashe", "Mercedes", "Annette", "Lysithea", "Marianne", "Hilda", "Flayn", "Hanneman", "Alois", "Shamir", "Yuri", "Constance", "Jeritza", "Anna"],
  ingredients: "Peach Currant x1   Chickpeas x1"
},
{
  name: "Beast Meat Teppanyaki",
  characters: ["Claude", "Caspar", "Petra", "Felix", "Ingrid", "Raphael", "Leonie", "Manuela", "Gilbert", "Catherine", "Shamir", "Cyril", "Balthus", "Hapi", "Anna"],
  ingredients: "Wild Game x1   Noa Fruit x1"
},
{
  name: "Pickled Rabbit Skewers",
  characters: ["Claude", "Caspar", "Petra", "Felix", "Ingrid", "Raphael", "Lysithea", "Manuela", "Gilbert", "Catherine", "Shamir", "Cyril", "Yuri", "Balthus", "Hapi", "Anna"],
  ingredients: "Wild Game x1   Carrot x1"
},
{
  name: "Daphnel Stew",
  characters: ["Claude", "Ferdinand", "Linhardt", "Caspar", "Petra", "Dedue", "Felix", "Ingrid", "Lorenz", "Raphael", "Leonie", "Seteth", "Manuela", "Shamir", "Cyril", "Yuri", "Balthus", "Hapi"],
  ingredients: "Poultry x1   Onion x1"
},
{
  name: "Gronder Meat Skewers",
  characters: ["Claude", "Caspar", "Petra", "Felix", "Ingrid", "Raphael", "Leonie", "Manuela", "Gilbert", "Catherine", "Shamir", "Cyril", "Balthus", "Hapi", "Jeritza"],
  ingredients: "Wild Game x1   Onion x1"
},
{
  name: "Derdriu-Style Fried Pheasant",
  characters: ["Claude", "Caspar", "Bernadetta", "Felix", "Ingrid", "Raphael", "Lysithea", "Hilda", "Leonie", "Seteth", "Hanneman", "Manuela", "Gilbert", "Catherine", "Cyril", "Balthus", "Hapi", "Anna"],
  ingredients: "Poultry x1   Carrot x1"
},
{
  name: "Vegetable Pasta Salad",
  characters: ["Edelgard", "Ferdinand", "Caspar", "Bernadetta", "Dorothea", "Ashe", "Mercedes", "Annette", "Ingrid", "Ignatz", "Marianne", "Seteth", "Hanneman", "Gilbert", "Shamir", "Cyril", "Constance", "Anna"],
  ingredients: "Cabbage x1   Onion x1   Carrot x1   Vegetables"
},
{
  name: "Onion Gratin Soup",
  characters: ["Edelgard", "Dimitri", "Claude", "Ferdinand", "Linhardt", "Dorothea", "Dedue", "Mercedes", "Annette", "Lorenz", "Marianne", "Leonie", "Flayn", "Alois", "Catherine", "Yuri", "Hapi", "Jeritza"],
  ingredients: "White Trout x1   Onion x1"
},
{
  name: "Country-Style Red Turnip Plate",
  characters: ["Claude", "Caspar", "Bernadetta", "Dorothea", "Petra", "Raphael", "Hilda", "Flayn", "Gilbert", "Catherine", "Shamir", "Yuri", "Hapi"],
  ingredients: "Verona x1   Turnip x1"
},
{
  name: "Vegetable Stir-Fry",
  characters: ["Edelgard", "Claude", "Ferdinand", "Caspar", "Bernadetta", "Dorothea", "Petra", "Dedue", "Annette", "Ignatz", "Marianne", "Leonie", "Manuela", "Gilbert", "Shamir", "Cyril", "Yuri", "Hapi"],
  ingredients: "Tomato x1   Chickpeas x1   Cabbage x1"
},
{
  name: "Grilled Herring",
  characters: ["Ferdinand", "Petra", "Dedue", "Mercedes", "Annette", "Ingrid", "Leonie", "Seteth", "Flayn", "Gilbert", "Alois", "Catherine", "Yuri", "Jeritza"],
  ingredients: "Albinean Herring x1   Turnip x1"
},
{
  name: "Fish and Bean Soup",
  characters: ["Edelgard", "Linhardt", "Dedue", "Ashe", "Sylvain", "Mercedes", "Annette", "Lorenz", "Raphael", "Ignatz", "Marianne", "Hilda", "Leonie", "Flayn", "Manuela", "Alois", "Cyril", "Yuri", "Hapi", "Jeritza"],
  ingredients: "White Trout x1   Chickpeas x1"
},
{
  name: "Fruit and Herring Tart",
  characters: ["Ferdinand", "Bernadetta", "Dedue", "Sylvain", "Mercedes", "Annette", "Ingrid", "Lorenz", "Ignatz", "Marianne", "Leonie", "Seteth", "Flayn", "Alois", "Catherine", "Constance"],
  ingredients: "Albinean Herring x1   Noa Fruit x1"
},
{
  name: "Fisherman’s Bounty",
  characters: ["Ferdinand", "Petra", "Dedue", "Ingrid", "Raphael", "Ignatz", "Marianne", "Hilda", "Leonie", "Flayn", "Manuela", "Gilbert", "Alois", "Catherine", "Yuri", "Balthus", "Hapi", "Jeritza"],
  ingredients: "White Trout x1   Teutates Loach x1"
},
{
  name: "Fish Sandwich",
  characters: ["Edelgard", "Ferdinand", "Petra", "Dedue", "Ashe", "Sylvain", "Ingrid", "Raphael", "Leonie", "Seteth", "Flayn", "Manuela", "Gilbert", "Alois", "Catherine", "Yuri", "Hapi"],
  ingredients: "Airmid Pike x1   Cabbage x1"
},
{
  name: "Two-Fish Saute",
  characters: ["Hubert", "Bernadetta", "Dedue", "Felix", "Sylvain", "Mercedes", "Annette", "Lorenz", "Ignatz", "Lysithea", "Marianne", "Hilda", "Leonie", "Flayn", "Hanneman", "Manuela", "Alois", "Catherine", "Cyril", "Yuri", "Constance", "Jeritza"],
  ingredients: "Caledonian Gar x1   Albinean Herring x1"
},
{
  name: "Bourgeois Pike",
  characters: ["Claude", "Ferdinand", "Bernadetta", "Dedue", "Lorenz", "Ignatz", "Marianne", "Leonie", "Seteth", "Flayn", "Hanneman", "Manuela", "Alois", "Catherine", "Constance", "Anna"],
  ingredients: "Airmid Pike x1   Carrot x1"
},
{
  name: "Sauteed Jerky",
  characters: ["Dimitri", "Claude", "Hubert", "Caspar", "Petra", "Dedue", "Felix", "Raphael", "Manuela", "Shamir", "Cyril", "Yuri", "Balthus", "Hapi", "Anna"],
  ingredients: "Poultry x1   Chickpeas x1"
},
{
  name: "Spicy Fish and Turnip Stew",
  characters: ["Hubert", "Petra", "Dedue", "Felix", "Ashe", "Sylvain", "Annette", "Ingrid", "Leonie", "Seteth", "Manuela", "Gilbert", "Balthus", "Hapi", "Anna"],
  ingredients: "Teutates Loach x1   Turnip x1"
},
{
  name: "Sweet and Salty Whitefish Saute",
  characters: ["Hubert", "Dedue", "Felix", "Ashe", "Sylvain", "Annette", "Ingrid", "Leonie", "Seteth", "Manuela", "Gilbert", "Balthus", "Hapi", "Anna"],
  ingredients: "Teutates Loach x1   Tomato x1"
},
{
  name: "Super-Spicy Fish Dango",
  characters: ["Hubert", "Petra", "Dedue", "Felix", "Sylvain", "Ingrid", "Ignatz", "Marianne", "Leonie", "Seteth", "Hanneman", "Manuela", "Gilbert", "Catherine", "Shamir", "Balthus", "Hapi"],
  ingredients: "Super-Spicy Fish Dango   White Trout x1   Tomato x1"
},
{
  name: "Sauteed Pheasant and Eggs",
  characters: ["Edelgard", "Claude", "Hubert", "Ferdinand", "Caspar", "Felix", "Sylvain", "Raphael", "Ignatz", "Marianne", "Seteth", "Manuela", "Gilbert", "Shamir", "Cyril", "Constance", "Hapi", "Anna"],
  ingredients: "Poultry x1   Cabbage x1"
},
{
  name: "Garreg Mach Meat Pie",
  characters: ["Claude", "Hubert", "Linhardt", "Caspar", "Dorothea", "Felix", "Sylvain", "Lorenz", "Raphael", "Ignatz", "Hanneman", "Manuela", "Gilbert", "Catherine", "Balthus"],
  ingredients: "Wild Game x1   Tomato x1"
},
{
  name: "Cheesy Verona Stew",
  characters: ["Dimitri", "Claude", "Hubert", "Bernadetta", "Petra", "Sylvain", "Raphael", "Marianne", "Hilda", "Leonie", "Seteth", "Flayn", "Hanneman", "Gilbert", "Catherine", "Balthus"],
  ingredients: "Teutates Loach x1   Verona x1"
},
{
  name: "Pickled Seafood and Vegetables",
  characters: ["Hubert", "Petra", "Dedue", "Annette", "Raphael", "Leonie", "Seteth", "Flayn", "Hanneman", "Gilbert", "Alois", "Catherine", "Hapi", "Anna"],
  ingredients: "Caledonian Gar x1   Turnip x1"
},
{
  name: "Gautier Cheese Gratin",
  characters: ["Dimitri", "Claude", "Hubert", "Linhardt", "Dorothea", "Felix", "Raphael", "Hilda", "Hanneman", "Catherine", "Balthus"],
  ingredients: "Poultry x1   Noa Fruit x1"
},
{
  name: "Cabbage and Herring Stew",
  characters: ["Claude", "Hubert", "Lorenz", "Ignatz", "Marianne", "Leonie", "Flayn", "Hanneman", "Manuela", "Gilbert", "Catherine", "Balthus", "Hapi", "Jeritza"],
  ingredients: "Albinean Herring x1   Cabbage x1"
},
{
  name: "Small Fish Skewers",
  characters: ["Hapi", "Jeritza"],
  ingredients: "Airmid Goby x3"
},
{
  name: "Fried Crayfish",
  characters: ["Hapi", "Jeritza", "Anna"],
  ingredients: "Caledonian Crayfish x3"
},
]

class CookingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      first: characters[0][1][0],
      second: characters[0][1][1],
    };
  }

  handleSelectionChange(selectionName) {
    return (event) => {
      const newState = {};
      newState[selectionName] = event.target.value;
      this.setState(newState);
    };
  }

  render() {

    const favoriteFoods = foods.filter(({name, characters, ingredients}) => {
      return characters.includes(this.state.first) && characters.includes(this.state.second)
    })

    return e("table", null, e("tbody", null, e("tr", null, [
      e("td", {key: "first", style: {minWidth: "100px"}},
        e(
          CharacterSelection,
          {
            key: "first",
            selectionName: "first",
            characters: characters,
            selectedCharacter: this.state.first,
            handleChange: this.handleSelectionChange("first")
          }
          ),
        ),
      e("td", {key: "second", style: {minWidth: "100px"}},
        e(CharacterSelection,
        {
          key: "second",
          selectionName: "second",
          characters: characters,
          selectedCharacter: this.state.second,
          handleChange: this.handleSelectionChange("second")
        }
        )
        ),
      e("td", {key: "result", style: {verticalAlign: "top"}},
        e(Foods,
          {foods: favoriteFoods}
          )
        ),
      ]))



    )
  }
}

class CharacterSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.characters.map(([groupName, characters]) => {
      return e("div", {key: groupName}, 
        [e("div", {key: "groupLabel", style: {fontWeight: "bold", marginTop: "5px"}}, groupName), e("div", {key: "groupContents"}, 
          characters.map((character) => {
            const inputProps = {
              key: "input"+this.props.selectionName,
              type: "radio",
              id: character+this.props.selectionName,
              name: this.props.selectionName,
              value: character,
              onChange: this.props.handleChange,
              checked: character == this.props.selectedCharacter
            }
            return e("div", {key: character}, [
              e('input', inputProps),
              e("label", {key: "label", htmlFor: character+this.props.selectionName}, character)
              ])
          }
          )
          )]
        )
    })
  }
}


class Foods extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.foods.map(({name, ingredients}) => {
      return e("div", {key: name}, 
        [e("div", {key: "name", style: {fontWeight: "bold", marginTop: "5px"}}, name), e("div", {key: "ingredients"}, ingredients)]
        )
    })
  }
}

const domContainer = document.querySelector('#cooking-container');
ReactDOM.render(e(CookingPage), domContainer);