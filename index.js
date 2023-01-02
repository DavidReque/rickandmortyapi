const  getCharacters = done => {

    const results = 
    fetch('https://rickandmortyapi.com/api/character');

    results 
        .then(response => response.json())
        .then(data => {
            done(data)
        })
    
}

getCharacters(data => {
    
    data.results.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment(`
        
        <article>
        <div class="container text-center">
        <div class="row">
        <div class="col">
    <div class="img">
      <img src="${personaje.image}" alt="Personaje" srcset="">
    </div>
    

    <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>
        </div>
        </div>
    </div>

    </article>

        `);

        const main = document.querySelector("main");

        main.append(article)
        
    });

})