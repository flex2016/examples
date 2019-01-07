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
