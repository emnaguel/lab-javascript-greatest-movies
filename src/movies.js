// let movies = [
//   {
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Frank Darabont",
//     "duration": "2h 22min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9.3
//   },
//   {
//     "title": "The Godfather",
//     "year": 1974,
//     "director": "Francis Ford Coppola",
//     "duration": "2h 55min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9.2
//   },
//   {
//     "title": "The Godfather: Part II",
//     "year": 1974,
//     "director": "Francis Ford Coppola",
//     "duration": "3h 22min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9
//   },]

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    console.log(movies);
    let directors = []
    movies.forEach((movie) => {
       directors.push(movie.director)
    }
    )
    return directors
} 


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function uniquifyArray(array) {
      let newArray=[]
      for(i = 0; i < array.length; i++ ) {      
        if(array.indexOf(array[i]) === i) newArray.push(array[i])
        
      }
      return newArray
    
  }
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
   let steveMovie = movies.filter(movie => movie.director === "Steven Spielberg")
   let dramaMovie = []
   steveMovie.forEach((movie) => {
    if(movie.genre.includes("Drama")) {
      dramaMovie.push(movie)
    }
   })
   return dramaMovie.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if(movies.length === 0) return 0
  const sumRates = movies.reduce((a,movie)=> {
    return(movie.rate === undefined ? a : a += movie.rate)
  }, 0)
  return Number((sumRates/movies.length).toFixed(2))


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaMovie = []
    let sumRate = 0
    movies.forEach((movie) => {
        if (movie.genre.includes("Drama")) dramaMovie.push(movie.rate)        
    })
    dramaMovie.forEach((rate) => {
        sumRate+=rate
    })

    return dramaMovie.length === 0 ? 0 : Number((sumRate/dramaMovie.length).toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if(movies.length === 0) return 0
  let newMovies = movies
  newMovies = newMovies.sort((a, b) => a.title.localeCompare(b.title))
  newMovies = newMovies.sort((a, b) => a.year - b.year)
  return newMovies
  
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

    let moviesTitle = []
    let newMovies = movies
    if(newMovies.length > 20) {

         let filterMovies = newMovies.sort((a, b) => a.title.localeCompare(b.title)).filter((movie,idx) => idx < 20)
        
          filterMovies.forEach((movie) => {
            moviesTitle.push(movie.title)
        })
       
    } else {
        let filterMovies = newMovies.sort((a, b) => a.title.localeCompare(b.title))
       
         filterMovies.forEach((movie) => {
           moviesTitle.push(movie.title)
       })


    }
    return moviesTitle


}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newArray = movies
  newArray.forEach((movie) => {    
    let allType = movie.duration.split(" ")
    if(allType.length === 2) {
      let hours = allType[0].replace(/\D/g,'')
      let minutes = allType[1].replace(/\D/g,'')
      movie.duration = Number(hours * 60) + Number(minutes)

    } else {
      if(movie.duration.split("").includes("h")){
        let hours = allType[0].replace(/\D/g,'')
        movie.duration = Number(hours * 60) 
      } else {
        let minutes = allType[0].replace(/\D/g,'')
        movie.duration = Number(minutes)
      }
    }
  })
  return newArray
}

// // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
// function bestYearAvg(movies) {
//   if(movies.length===0){
//     return null
//   } else {
//     let years= []
//       movies.forEach((movie)=> {
//       years.push(movie.year)

//     })
   
//     let uniqYearsSorted = uniquifyArray(years).sort((a, b) => a - b)
//     console.log(uniqYearsSorted)

//      let newHash = {}

//     //uniqYearsSorted.forEach((year) => {
//       // movies.forEach((movie) => {
//       //   if(movie.year === year) {
          
//       //     console.log(movie.rate)
//       //     newHash[year] =
         
//       //   }
//   //     // })
//   //     let rate= new Array();
//   //     for(i = 0; i < movies.length; i++) {
//   //       if(movies[i].year === year) {
//   //         newHash[year]= rate.push(movies[i].rate);
//   //       }
//   //     }

//   //   })
//   //   console.log(newHash)
//   // }

// }