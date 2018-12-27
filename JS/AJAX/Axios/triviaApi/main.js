var url = 'https://opentdb.com/api.php?amount=1';
var question = document.querySelector("#question");
var answer = document.querySelector("#answer");
var btn = document.querySelector(".btn");

btn.addEventListener("click", sendRequest);


function sendRequest(){
  axios.get(url)
  .then(getQ)
  .catch(handleErrors)
 }

function getQ(res){
  question.innerText = res.data.results[0].question;
  answer.innerText = res.data.results[0].correct_answer;
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
