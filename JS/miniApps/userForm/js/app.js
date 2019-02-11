(function(){
  //check fields and hide the submit
  document.addEventListener('DOMContentLoaded', function(){
    const display = new Display();
    display.checkFields();
    display.hideSubmit();
  });
  //display constructor function
  function Display(){
    this.name = document.getElementById('name');
    this.course = document.getElementById('course');
    this.author = document.getElementById('author');
    this.customers = document.querySelector('.customer-list');
  };
  //check fields
  Display.prototype.checkFields = function(){
    // console.log(this);

    this.name.addEventListener('blur', this.validateField);
    this.course.addEventListener('blur', this.validateField);
    this.author.addEventListener('blur', this.validateField);
  };
  //validate each field
  Display.prototype.validateField = function(){
    // console.log(this);
    if(this.value === ''){
      this.classList.remove('complete');
      this.classList.add('fail');
    }
    else{
      this.classList.add('complete');
      this.classList.remove('fail');
    }
    const complete = document.querySelectorAll('.complete');
    if(complete.length === 3){
      document.querySelector('.submitBtn').disabled = false;
    }
    else{
      document.querySelector('.submitBtn').disabled = true;
    }

  };
  //disable Submit Button
  Display.prototype.hideSubmit = function(){
    const btn= document.querySelector('.submitBtn');
    btn.disabled = true;
  };
})();
