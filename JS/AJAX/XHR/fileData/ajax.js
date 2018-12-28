const btn = document.querySelector(".btn");
const info = document.querySelector(".info");
const url= "info.txt";

function getData(url){
  const XHR = new XMLHttpRequest();

  // XHR.onreadystatechange = function(){
  //   if(this.readyState == 4 && this.status == 200) {
  //     info.textContent = this.responseText;
  //   }
  // }

  XHR.onload = function(){
    if(this.status ===200){
      info.textContent = this.responseText;
    }else{
      console.log(this.statusText)
    }
  }
  XHR.onerror= function(){
    console.log("there was an error")
  }

  XHR.open("GET",url, true);
  XHR.send();
}

btn.addEventListener("click", function(){
  getData(url);
});
