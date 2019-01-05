//immediate invokede function expression

(function(){
  document
    .getElementById('message-form')
    .addEventListener('submit', function(event){
      //prevent default page refresh action
      event.preventDefault();
      //getting a value
      const message = document.getElementById('message');
      const value = message.value;
      //check for empty value

      if (value === ''){
        const feedback = document.querySelector('.feedback');
        feedback.classList.add('show');
        //remove show class
        setTimeout(function(){
          feedback.classList.remove('show');
        },2000);
      }
      else{
        //change value
        document.querySelector('.message-content').textContent =value;
        message.value = '';
      }
      //change value
      document.querySelector('.message-content').textContent =value;
      message.value = '';
    })
})();
