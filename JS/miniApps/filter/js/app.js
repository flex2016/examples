//filter buttons
(function(){
  //select all buttons
  const filterBtn = document.querySelectorAll('.filter-btn');

  filterBtn.forEach(function(btn){
    btn.addEventListener('click', function(event){
      //prevent default action
      event.preventDefault();
      const value = event.target.dataset.filter;
      const items = document.querySelectorAll('.store-item');
      //loops through each item and display
      items.forEach(function(item){
        if(value === 'all'){
          item.style.display = 'block';
        }
        else{
          if(item.classList.contains(value)){
            item.style.display = 'block';

          }
          else{
            item.style.display = 'none';
          }
        }
      });
    });
  });
})();


//search input
(function(){
  //target search box
  const search = document.getElementById('search-item');
  search.addEventListener('keyup', function(){
    let input = search.value.toLowerCase().trim();
    const items = document.querySelectorAll('.store-item');
    items.forEach(function(item){
      // which data-item
      let type = item.dataset.item;
      let length = input.length;
      let match = type.slice(0, length);
      if (input === match){
        item.style.display = 'block';
      }
      else{
        item.style.display = 'none';
      }
    });
  });
})();


//lightbox
(function(){
  //all images
  let imageList = [];
  let counter = 0;

  const images = document.querySelectorAll('.store-img');
  const container = document.querySelector('.lightbox-container');
  const item = document.querySelector('.lightbox-item');
  const closeIcon = document.querySelector('.lightbox-close');
  const btnLeft = document.querySelector('.btnLeft');
  const btnRight = document.querySelector('.btnRight');

  //add all images
  images.forEach(function(img){
    imageList.push(img.src);
  });

  //open modal
  images.forEach(function(img){
    img.addEventListener('click', function(event){
      //show modal
      container.classList.add('show');
      //get source
      let src = event.target.src;
      //get index of the image source
      counter = imageList.indexOf(src);
      //show modal with an image
      item.style.backgroundImage = `url(${src})`;
    });
  });

  //close modal
  closeIcon.addEventListener('click', function(){
    container.classList.remove('show');
  });

  //left button
  btnLeft.addEventListener('click', function(){
    counter--;
    if (counter < 0){
      counter = imageList.length -1;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    console.log(counter);

  });

  //left button
  btnRight.addEventListener('click', function(){
    counter++;
    if (counter > imageList.length - 1){
      counter = 0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    console.log(counter);

  });





})();
