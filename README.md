![](https://img.shields.io/badge/Microverse-blueviolet)

# PokeDex

> This project is a PokeDex featuring the original 151 Pokemon from Gen1 made with REACT and REDUX.

![screenshot](./src/assets/images/logo1.png)

All the information for the application is pulled from the [PokeAPI](https://pokeapi.co/docs/v2) and filtered to take only the information that is going to be presented. This is a capstone project for the React-Redux module from the Microverse technical curriculum, the specifications from this project come from the **Catalogue of Recipes** capstone.

## Built With

- React,
- Redux,
- Jest,
- PokeAPI

## Live Demo

[PokeDex Link](https://pokedex-mm.herokuapp.com/)

# How to use it

When you fire up the application you are welcomed by the full Pokemon types that you can filter the list by.

![screenshot](./src/assets/screenshots/filters.png)

Below this, you can see the full list of the Gen 1 pokemon, each of them displaying their Pokedex number and their name as well as a small image next to it.

![screenshot](./src/assets/screenshots/pokemonlist.png)

When you click on any of the badges for the types, the list gets reduced to the list of pokemon that have that specific type and the badge that is selected will be highlighted to let you know which filter is active.

![screenshot](./src/assets/screenshots/filteredpokemonlist.png)

Once you click back on the highlighted badge the filter will clear and the full list of pokemon will show again.

When you click on any of the pokemon listed, you will be taken to the information page for that pokemon, where you can see a bigger image of it and the information about its types, weight, and height.

![screenshot](./src/assets/screenshots/filteredpokemonlist.png)

By clicking the back button on the information page you will go to the list that you had before, either if it was the full list or a filtered one.

## Setup Locally

To run the application locally you will need to follow several steps to make it work.

First, you have to check if you have **nodejs** installed on your machine. For this type the following command in your terminal:

> node -v

If **command not found** shows as a response, then go to [nodejs.org](https://nodejs.org/en/) and follow the instructions to install it. After completing the installation the same command should show you a version number.

Then clone the [repository](https://github.com/mateomh/Pokedex-React.git) into your local drive and open a terminal in the root folder of the project and install the necessary packages to make it work by running this command:

> npm install

This will get the project ready to run. After this run the following command to start the development server on **localhost:3000/** and wait for the browser to open:

> npm start

If the browser does not open or you close it by accident, but the server is still running you can type **localhost:3000/** in your address bar to get into the application again.


## Tests

This project has a suite of tests built-in.

To run the tests clone the [repository](https://github.com/mateomh/Pokedex-React.git) into your local drive, if you haven't done so, and open a terminal in the root folder of the project and install the necessary packages to make it work by running this command:

> npm install

Then you can just run the following command and see the results

> npm test


## Authors

👤 **Mateo mojica**

- Github: [@mateomh](https://github.com/mateomh)
- Twitter: [@mateo_m_h](https://twitter.com/mateo_m_h)
- Linkedin: [Mateo mojica](https://linkedin.com/mateo_mojica_hernandez)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse
- PokeAPI
- The Pokemon Company
- [Dave Ceddia](https://www.youtube.com/channel/UCPrkHuq0i1WflifRXUpvNmg)

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
