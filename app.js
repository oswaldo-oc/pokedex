const getPokemon = function(index) {
	const pokemon = [
		{
            name: 'bulbasaur',
            img: '001'
        },
        {
            name: 'ivysaur',
            img: '002'
        },
        {
            name: 'venusaur',
            img: '003'
        },
        {
            name: 'charmander',
            img: '004'
        },
        {
            name: 'charmeleon',
            img: '005'
        },
        {
            name: 'charizard',
            img: '006'
        },
        {
            name: 'squirtle',
            img: '007'
        },
        {
            name: 'wartortle',
            img: '008'
        },
        {
            name: 'blastoise',
            img: '009'
        }
	]
	return pokemon[index]
}

const renderPokemon = function(pokemon) {
	const screen = document.querySelector('.screen')
	screen.innerHTML = ''
	screen.appendChild(createName(UpperFirst(pokemon.name)))
	screen.appendChild(createImg(`img/${pokemon.img}.png`))
}

const createImg = function(url) {
	const pokeImg = document.createElement('img')
	pokeImg.src = url
	pokeImg.classList.add('img')
	return pokeImg
}

const createName = function(name) {
	const pokeName = document.createElement('h1')
	const text = document.createTextNode(name)
	pokeName.appendChild(text)
	pokeName.classList.add('name')
    return pokeName
}

function UpperFirst(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const init = function() {
	let pokemonId = 0
	let pokemon = getPokemon(pokemonId)

	const btnPrev = document.querySelector('#btnPrev')
	const btnNext = document.querySelector('#btnNext')
	const btnSearch = document.querySelector('#btnSearch')
	let searchBar = ''
	let found = false

	btnPrev.addEventListener('click', function() {
		if(pokemonId == 0){return}
		renderPokemon(getPokemon(--pokemonId))
	})

	btnNext.addEventListener('click', function() {
		if(pokemonId == 8){return}
		renderPokemon(getPokemon(++pokemonId))
	})

	btnSearch.addEventListener('click', function() {
		found = false
		for(var i=0; i<9; i++) {
			searchBar = document.querySelector('#searchBar').value
			console.log(searchBar)
			if(searchBar.toLowerCase()==getPokemon(i).name){
				renderPokemon(getPokemon(i))
				found=true
			}
			if(i==8 && searchBar>=1 && searchBar<=9){
				renderPokemon(getPokemon(searchBar-1))
				found=true
			}
		}
		if (found==false) {alert("Pokemon Not Found")}
	})
	renderPokemon(pokemon)
}

const pressKey = function(e) {
	let pokemonId = 0
	let pokemon = getPokemon(pokemonId)
	var keyCode = document.querySelector('e.keyCode')
	
	if (e.keyCode == 37) {
	    	if(pokemonId == 0){return}
			renderPokemon(getPokemon(--pokemonId))
	}else if (e.keyCode == 39) {
			if(pokemonId == 8){return}
			renderPokemon(getPokemon(++pokemonId))
	}
	renderPokemon(pokemon)
}

//window.onkeydown = pressKey()

init()