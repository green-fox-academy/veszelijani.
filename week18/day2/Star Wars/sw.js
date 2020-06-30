'use strict';

const swApi = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://swapi.dev/api/people/');
    xhr.onload = () => {
        let response = JSON.parse(xhr.responseText);
        let characterArr = [];
        let searchBar = document.getElementById('people-search');
        searchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value;
            displayCharacters(filteredCharacters)
            console.log(searchString);

        })
        let filteredCharacters = characterArr.filter((name) => {
            return (
                name.contains.includes(searchString)
            )
                
        });
        let displayCharacters = (characters) => {
            let thisUl = document.getElementById('thisUl')
            for (let i = 0; i < characters.length; i++) {
                let SwChar = document.createElement('li')
                SwChar.textContent = characters[i];
                thisUl.appendChild(SwChar);
            }
        }

        for (let i = 0; i < response.results.length; i++) {
            characterArr.push(response.results[i].name)
        }

        console.log(filteredCharacters)
        console.log(characterArr)

    };
    xhr.send();
}

window.onload = () => {
    swApi();
}