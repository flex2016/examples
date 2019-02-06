(function(){
  //check fields and hide the submit
  document.addEventListener('DOMContentLoaded', function(){
    const display = new Display();
    display.checkFields();
  });
  //display constructor function
  function Display(){
    this.name = document.getElementById('name');
    this.course = document.getElementById('course');
    this.author = document.getElementById('author');
    this.customers = document.querySelector('.customer-list');
  }
  //check fields
  Display.prototype.checkFields = function(){
    console.log(this);

    this.name.addEventListener('blur', this.validateField);
  }
  //validate each field
  Display.prototype.validateField = function(){
    console.log(this);

  }
})();
