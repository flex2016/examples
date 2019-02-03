//get elements

const itemForm = document.getElementById('itemForm');
const itemInput= document.getElementById('itemInput');
const itemList = document.querySelector('.item-list');
const clearBtn = document.getElementById('clear-list');
const feedback = document.querySelector('.feedback');

let itemData = JSON.parse(localStorage.getItem('list')) || [];

if(itemData.length > 0){
  itemData.forEach(function(item){
    itemList.insertAdjacentHTML('beforeend', `
    <div class = "item my-3">
    <h5 class="item-name text-capitalize">${item}</h5>
    <div class="item-icons">
    <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
    <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
    <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
    </div>
    </div>
    `);
    handleItem(item);
  });
}

//form submition

itemForm.addEventListener('submit', function(event){
  event.preventDefault();

  const textValue = itemInput.value;

  if (textValue === ''){
    showFeedback("please enter valid value", "danger");
  }
  else{
    //add item
    addItem(textValue);
    //clear the form
    itemInput.value = '';
    itemData.push(textValue);
    //local storage
    localStorage.setItem('list', JSON.stringify(itemData));
    //add event listeners to icons
    handleItem(textValue);


  }
});

//show feedback function
function showFeedback(text, action){
  feedback.classList.add("showItem", `alert-${action}`);
  feedback.innerHTML = `<p>${text}</p>`;

  setTimeout(function(){
    feedback.classList.remove('showItem', `alert-${action}`);
  }, 3000);
};

//add item
function addItem(value){
  const div = document.createElement("div");
  div.classList.add("item", "my-3");
  div.innerHTML = `
    <h5 class="item-name text-capitalize">${value}</h5>
    <div class="item-icons">
    <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
    <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
    <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
    </div>`;
  itemList.appendChild(div);
}

//handle item

function handleItem(textValue){
  const items = itemList.querySelectorAll('.item');
  items.forEach(function(item){
    if(item.querySelector('.item-name').textContent === textValue){
      //complete event listener
      item.querySelector('.complete-item').addEventListener('click', function(){
        item.querySelector('.item-name').classList.toggle('completed');
        this.classList.toggle('visibility');
      });
      //edit event listener
      item.querySelector('.edit-item').addEventListener('click', function(){
        itemInput.value = textValue;
        itemList.removeChild(item);
        itemData = itemData.filter(function(item){
          return item !== textValue;
        });
        localStorage.setItem('list', JSON.stringify(itemData));
      });
      //delete event listener
      item.querySelector('.delete-item').addEventListener('click', function(){
        itemList.removeChild(item);
        itemData = itemData.filter(function(item){
          return item !== textValue;
        });
        localStorage.setItem('list', JSON.stringify(itemData));
        showFeedback('item deleted', 'success');
      });


    }
  });
}

//Clear items
clearBtn.addEventListener('click', function(){
  itemData = [];
  localStorage.removeItem('list');
  const items = itemList.querySelectorAll('.item');
  if(items.length > 0){
    items.forEach(function(item){
      itemList.removeChild(item);
    });
  }

});
