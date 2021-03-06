// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
  //setup teh counter
  let counter = 0;
  //select buttons
  const buttons = document.querySelectorAll('.btn');
  const imgContainer = document.querySelector('.img-container');

  buttons.forEach(function(btn){
    btn.addEventListener('click', function(event){
      //get event target
      let value = event.target;
      if(value.classList.contains('btn-left')){
        counter--;
        if(counter < 0){
          counter = pictures.length - 1;
        }
        imgContainer.style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
      }
      if(value.classList.contains('btn-right')){
        counter++;
        if(counter > pictures.length - 1){
          counter = 0;
        }
        imgContainer.style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
      }
    });
  });
})();
