const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  ajax.then(data => showData(data)).catch(error => console.log(error));
});

const ajax = new Promise((resolve, reject) => {
  const XHR = new XMLHttpRequest();
  const url = "https://randomuser.me/api/";
  XHR.open('GET', url, true);

  XHR.onload = () => {
    if( XHR.status === 200){
      resolve(XHR.responseText);
    }else{
      reject(Error(XHR.statusText));
    }
  };
  XHR.onerror = () => {
    reject(Error("there was an error"))
  };
  XHR.send();
});

function showData(data){
  const response = JSON.parse(data);

  const {
    name: { first},
    dob: { age }
  } =response.results[0];
  document.getElementById("first").textContent = first;
  document.getElementById("age").textContent = age;
}
