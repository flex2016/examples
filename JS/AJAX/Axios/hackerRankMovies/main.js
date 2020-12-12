



function getYear(year){
  var url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
  axios.get(url)
  .then(res =>{
    let movies =res.data.data;
    // console.log(movies)
      let movieTitleArr= []
    movies.map(movie => {
      movieTitleArr.push(movie.Title)

    })
     console.log(movieTitleArr)


  })

  .catch(handleErrors)
 }


 function handleErrors(err) {
  if (err.response) {
    console.log("Problem With Response ", err.response.status);
  } else if (err.request) {
    console.log("Problem With Request!");
  } else {
    console.log('Error', err.message);
  }
}

getYear(2012)
