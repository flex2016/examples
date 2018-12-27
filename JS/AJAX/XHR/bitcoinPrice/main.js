var btn = document.querySelector("#button");
var h1 = document.querySelector("#price");
var checkBox = document.querySelector("#refresh");


//listen for clicks
function getPrice(){
	var currency = document.querySelector('input[name = "currency"]:checked').value;
	//make the request
	var XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var price = JSON.parse(this.responseText).bpi[currency].rate;

			h1.innerText = price + " " + currency;
		}
	}

	XHR.open('GET', "https://api.coindesk.com/v1/bpi/currentprice.json");
	XHR.send();
};

function autoRefresh(){
  var timer = document.querySelector('#timer');
  var delay = 30;
  var countDown = setInterval(function(){
		if(checkBox.checked == true){
    	if(delay === 0){
				getPrice();
				clearTimeout(countDown);
				timer.textContent = "";
				autoRefresh();
			} else {
				timer.textContent = delay--;
			}
		} else {
			clearTimeout(countDown);
			timer.textContent = "";
		}
  },1000)
};

checkBox.addEventListener("click", function(){
	if(checkBox.checked == true){
		autoRefresh();
	}
})

window.onload = getPrice();
autoRefresh();
btn.addEventListener("click", getPrice);
