const btn = document.querySelector(".btn");
const cartInfo = document.querySelector(".cartInfo");
const itemInfo = document.querySelector(".itemInfo");

btn.addEventListener("click", function(){
  getData("cart.json");
})

function getData(url){
  const XHR = new XMLHttpRequest();

  XHR.onload = function(){
    if(this.status === 200){
      const data = JSON.parse(this.responseText);
      cartInfo.innerHTML = `
      <p>${data.cartInfo.name}</p>
      <p>${data.cartInfo.store}</p>
      `;
      let display = "";
      const specialItems = data.cartItems.filter(function(item){
        return item.price >1;

      })
      specialItems.forEach(function(item){
      display+=`
      <div class='item'>
      <p>item id: ${item.id}</p>
      <p>item name: ${item.name}</p>
      <p>item price: ${item.price}</p>
      </div>`;
      itemInfo.innerHTML= display;
      })

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
