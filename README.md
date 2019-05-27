# Pokemons

## Used technologies:
* **App type** - [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application)
* **Programming paradigm** - [functional](https://en.wikipedia.org/wiki/Functional_programming)
* **HTTP client** - [axios](https://github.com/axios/axios)
* **Pokemon API** - [PokeAPI](https://pokeapi.co/)
* **JS Library** - [React](https://reactjs.org/)
* **Routing** - [React Router](https://github.com/ReactTraining/react-router)
* **State managment** - [Redux](https://redux.js.org/) (globally), [React Hooks](https://reactjs.org/docs/hooks-intro.html) (locally)
* **Redux middleware** - [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* **Type checking** - [Prop Types](https://github.com/facebook/prop-types)
* **Styles** - [emotion](https://github.com/emotion-js/emotion)
* **Module Bundler** - [Webpack](https://webpack.js.org/)
* **Paint Tool** - [Photoshop](https://www.adobe.com/products/photoshop.html)

## Get started:
* Clone repo
```git
git clone https://github.com/Max-Starling/Pokemons.git
```
* Open folder
```bash
cd ./Pokemons
```
* Install node modules:
```npm
npm install
```
* Start app:
```npm
npm start
```
* Now open http://localhost:4000 in a browser.

## Project structure:
* **[public/](./public/)** - public folder (contains index.html)
* **[src/assets/](./src/assets/)** - static files (fonts, images, etc.)
* **[src/components/](./src/components/)** - common components for all pages and other components (Input, Loading, etc.)
* **[src/config/](./src/config/)** - configuration for different environments (API url, etc.)
* **[src/pages/](./src/pages/)** - pages that you can see in the side menu (at this moment - pokemons only)
* **[src/resources/](./src/resources/)** - redux resources (actions, reducers, types, selectors, etc.)

## Implementation Details

### I) Pokemon List
PokeAPI provides the ability to get only an array of pokemon names and URLs. to their details.  
There is no opportunity to get something more from API here.  
But we can get image urls from another resource (See **II**).  

For this we need to get pokemon id from received URL:
```javascript
 const splitArray = pokemon.url.split('/');
 const id = `${splitArray[splitArray.length - 2]}`;
```

**Why we can't get pokemon info one by one using received URL?**  
Pokemon detailed response contains a lot of data, so each request can take a lot of time.  

Let's imagine, that one request takes ~ 500ms.  
**Sync**:  
On initial load we fetch 20 pokemons. So our user should wait ~ 10s.  
And this story repeats every time user scrolls down (because of infinite scrolling).  
**Async**:  
Now user can get data faster, but unexpected behavior in addition.  
Even if we catch all the results using something like **Promise.all()**, we will lose correct pokemons order.

Both ways are wrong.  
So we can't display more than name, id, image by using only PokeAPI backend.

### II) Images
It does not represent any images (only small pixel sprites in the pokemon specific request).  
So i found some sites with official pokemon arts and chose [one](https://assets.pokemon.com) with the simplest url generating logic.

**Code**:
```javascript
export const POKEMON_IMAGE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full';
const leftPad = value => '0'.repeat(3 - `${value}`.length) + value;
const getPokemonImageUrl = id => `${POKEMON_IMAGE_URL}/${(id.length < 3) ? leftPad(id) : id}.png`;
```

**Examples**:
* **Pokemon № 1** - https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png
* **Pokemon № 17** - https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png
* **Pokemon № 523** - https://assets.pokemon.com/assets/cms2/img/pokedex/full/523.png

### III) Problems with CORS in Firefox and Edge
There is "PokeAPI" backend problem:
```
CORS error No 'Access-Control-Allow-Origin' header is present on the requested resource
```
**A few ways how to fix the problem**:
* **Change browser settings** (user side solution)
* **Change PokeAPI** (PokeAPI side solution)
* **Write proxy server** (backend side solution)
* **Use existing proxy server** (frontend solution)

Since the task concerns only the frontend part, I chose the last solution.  
So I found and used this [proxy server](https://cors-anywhere.herokuapp.com/).


## Checked browsers:
* **Chrome**
* **Firefox**
* **Edge**
