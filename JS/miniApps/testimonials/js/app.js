// immediate invoked function expression

(function() {

  //customers
  let customers = [];
  let index = 0;

  //object constructor function
  function Customer (name, img, text){
    this.name = name;
    this.img = img;
    this.text = text;
  }

  //create a customer function
  function createCustomer(name, img, text){
    //full  img
    let fullImg = `img/customer-${img}.jpg`
    //create a new customer instance
    const customer = new Customer(name, fullImg, text);
    //add to all customers
    customers.push(customer);
  }

createCustomer('john', 1, 'This is my first comment');
createCustomer('steve', 2, 'I love writing clean modular code');
createCustomer('peter', 3, 'I want be the best hacker');
createCustomer('arnold', 4, 'This is the best comment of the day.');

  //select buttons
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(function(btn){
    btn.addEventListener('click', function(event){
      event.preventDefault();
      //get event target
      let value = event.target.parentElement;

      if(value.classList.contains('prevBtn')){
        if(index === 0){
          index = customers.length;
        }
        index--;
        console.log(index);

        document.getElementById("customer-img").src = customers[index].img;
        document.getElementById("customer-name").textContent = customers[index].name;
        document.getElementById("customer-text").textContent = customers[index].text;

      }
      if(value.classList.contains('nextBtn')){

        if(index === (customers.length - 1)){
          index = -1;
        }
        index++;
        console.log(index);

        document.getElementById("customer-img").src = customers[index].img;
        document.getElementById("customer-name").textContent = customers[index].name;
        document.getElementById("customer-text").textContent = customers[index].text;
      }
    });
  });
})();
