// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    return movies.map(function(movie) {
        return movie.director;
    })
}

getAllDirectors(movies)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct? 

function howManyMovies(movies) {
    let stevenMovies = movies.filter((movie) => {
    return movie.director == "Steven Spielberg" && movie.genre.includes("Drama");
    }); return stevenMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if (movies.length == 0) {
    return 0
    }
    
    let rates = movies.reduce((acc, movie) => {
    return acc + (movie.rate || 0);
    }, 0)

    let average = rates/movies.length
    return Number(average.toFixed(2))
}
    
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter((movie) => {
        return movie.genre.includes('Drama')
    })
    return ratesAverage(dramaMovies)
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let order = movies.sort((a,b) => {
        return (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1
    });  return order
} 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let newArr = [...movies];
    newArr.sort(function(a,b) {
        return (a.title.localeCompare(b.title))
    })  
    let firstTwenty = newArr.slice(0,20).map((a) => {
       return a.title
    })
    return firstTwenty;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
