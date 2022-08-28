console.log(movies)
const movieList=document.querySelector("#list");
console.log(movieList);

//------------ Clear the DOM-------------------//
const clearDom=()=>{
    while (movieList.firstChild) movieList.removeChild(movieList.firstChild);
}

//--------------Get All Movies-----------------//
function addMoviesToDom (movies) {
    movies.map(movie=>{
        const li =document.createElement('li');
        li.title=movie.title; //-----------------------------------> Show MovieTitle On Tooltip
        //li.textContent=movie.title;
        const a= document.createElement('a');
        const img= document.createElement('img');
        a.href="https://www.imdb.com/title/" + movie.imdbID,
        img.src=movie.poster;
        movieList.appendChild(li);
        li.appendChild(a);
        a.appendChild(img);
        })
};
addMoviesToDom(movies)

//-------------- Filters ----------------------//
function filterForLatestMovie(){
   const filterLatestMovies=movies.filter((item)=>{
    return item.year >=2014
    });
    console.log(filterLatestMovies)
    addMoviesToDom(filterLatestMovies)
}
function filterForAvenger(){
    const filterArrayAvenger= movies.filter(item => item.title.match(/Avengers/gi))
    console.log(filterArrayAvenger)
     addMoviesToDom(filterArrayAvenger)
}
function filterForXmen(){
    const filterArrayXmen= movies.filter(item => item.title.match(/X-men/gi))
    console.log(filterArrayXmen)
    addMoviesToDom(filterArrayXmen)
}
function filterForPrincess(){
    const filterArrayPrincess= movies.filter(item => item.title.match(/Princess/gi))
    console.log(filterArrayPrincess)
    addMoviesToDom(filterArrayPrincess)
}
function filterForBatman(){
const filterArrayBatman= movies.filter(item => item.title.match(/Batman/gi))
console.log(filterArrayBatman)
addMoviesToDom(filterArrayBatman)
}

//---------------Switch Method----------------//
const handleOnChangeEvent = (event)=>{
    clearDom();
    console.log(event.target.value);
    switch(event.target.value){
        case "latest": filterForLatestMovie();
            break;
        case "avenger":filterForAvenger();
            break;
        case "x-men":filterForXmen();
            break;
        case "princess":filterForPrincess();
            break;
        case "batman":filterForBatman();
            break;
    }
}

//------------- RadioButton -------------//
const radioButtons=document.querySelectorAll('input[name="movie"]');
console.log(radioButtons);
for(const radioButton of radioButtons){
    radioButton.addEventListener('change',handleOnChangeEvent,);
}

//-------------- SearchBar--------------//
const searchBar=document.getElementById('searchBar');
//console.log(searchBar);

 searchBar.addEventListener("keyup",(event)=>{
    console.log(event.target.value)
    const searchCriterea=event.target.value.toLowerCase();
    const filteredTitles=movies.filter(movie =>{
       return movie.title.toLowerCase().includes(searchCriterea)
    })
    console.log(filteredTitles)
    clearDom()
    addMoviesToDom(filteredTitles);
 });





    





