const mainBtn = document.getElementById('mainBtn');
const result = document.getElementById('result');
const imgDisp = document.getElementById('img');


mainBtn.addEventListener('click',function(){
  const XHR = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  XHR.onload = function(){
    if(this.status === 200){
      const data = JSON.parse(this.responseText);
      const { icon_url: img, value: joke } = data;
      imgDisp.src= img;
      result.textContent = joke;

    }else{
      console.log(this.statusText)
    }
  };

  XHR.onerror= function(){
    console.log("there was an error")
  }

  XHR.open("GET",url, true);
  XHR.send();
});
