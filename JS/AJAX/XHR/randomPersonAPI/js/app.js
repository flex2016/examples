const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  getPerson(getData);
});

function getPerson(cb){
  const XHR = new XMLHttpRequest();
  const url = "https://randomuser.me/api/";
  XHR.onload = function(){
    if(this.status === 200){
      cb(this.responseText, showData)

    }else{
      console.log(this.statusText)
    }
  };

  XHR.onerror= function(){
    console.log("there was an error")
  }

  XHR.open("GET",url, true);
  XHR.send();
}

function getData(response, cb){
  const data = JSON.parse(response);
  const {
    name: {first},
    name: {last},
    picture: {large},
    location: {street},
    phone,
    email
  }=data.results[0];
  cb(first, last, large, street, phone, email);
}

function showData(first, last, large, street, phone, email){
  document.getElementById('first').textContent  = first;
  document.getElementById('last').textContent   = last;
  document.getElementById('photo').src          = large;
  document.getElementById('street').textContent = street;
  document.getElementById('phone').textContent  = phone;
  document.getElementById('email').textContent  = email;
}
