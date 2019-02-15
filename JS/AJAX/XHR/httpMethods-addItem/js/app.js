//get elements
const itemList = document.querySelector(".items");
const httpForm = document.getElementById("httpForm");
const itemInput = document.getElementById("itemInput");
const imageInput = document.getElementById("imageInput");
const feedback = document.querySelector(".feedback");
const items = document.querySelector(".items");
const submtiBtn = document.getElementById("submitBtn");
let editedItemID = 0;

const url = "https://5c26d3884977c20014878e7e.mockapi.io/items";

httpForm.addEventListener('submit', submitItem);

function submitItem(event){
  event.preventDefault();
  const itemValue = itemInput.value;
  const imageValue = imageInput.value.toLowerCase();
  if(itemValue.length === 0 || imageValue.length === 0){
    showFeedback(' please enter a valid value');
  }
  else{
    postItemAPI(imageValue, itemValue);
    imageInput.value = '';
    itemInput.value = '';
  }
};
//load items
document.addEventListener('DOMContentLoaded', function(){
  getItemsAPI(showItems);
})

//show feedback
function showFeedback(text){
  feedback.classList.add('showItem');
  feedback.innerHTML = `<p>${text}</p>`;
  setTimeout(() => {
    feedback.classList.remove('showItem');
  }, 3000);
};


//get items

function getItemsAPI(data){
  const XHR = new XMLHttpRequest();
  const url = "https://5c26d3884977c20014878e7e.mockapi.io/items";
  XHR.open("GET",url, true);

  XHR.onload = function(){
    if(this.status === 200){
      data(this.responseText)

    }else{
      console.log(this.statusText)
    }
  };

  XHR.onerror= function(){
    console.log("there was an error")
  };


  XHR.send();

};

function showItems(data){
  const items = JSON.parse(data);
  let info = '';

  items.forEach(item=>{
    info +=`
    <li class="list-group-item d-flex align-items-center justify-content-between flex-wrap item my-2">
      <img src="${item.image}" id='itemImage' class='itemImage img-thumbnail' alt="">
      <h6 id="itemName" class="text-capitalize itemName">${item.name}</h6>
      <div class="icons">

      <a href='#' class="itemIcon mx-2 edit-icon" data-id='${item.id}'>
        <i class="fas fa-edit"></i>
      </a>
      <a href='#' class="itemIcon mx-2 delete-icon" data-id='${item.id}'>
        <i class="fas fa-trash"></i>
      </a>
      </div>
    </li>`
  });
itemList.innerHTML = info;
//get icons
getIcons();

};

//post items
function postItemAPI(img, itemName){
  const image = `img/${img}.jpeg`;
  const name = itemName;

  const XHR = new XMLHttpRequest();
  const url = "https://5c26d3884977c20014878e7e.mockapi.io/items";
  XHR.open("POST",url, true);
  XHR.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  XHR.onload = function(){
    getItemsAPI(showItems);
    if(this.status === 200){

      console.log(this.responseText);

    }else{
      console.log('something went wrong');
    }
  };

  XHR.onerror= function(){
    console.log("there was an error")
  };


  XHR.send(`image= ${image}&name=${name}`);
};

//get icons
function getIcons(){
  const editIcons = document.querySelectorAll('.edit-icon');
  const deleteIcons = document.querySelectorAll('.delete-icon');

  deleteIcons.forEach(icon =>{
    const itemID =icon.dataset.id;
    icon.addEventListener('click', function(event){
      event.preventDefault();
      deleteItemAPI(itemID);
    });
  });
  editIcons.forEach(icon =>{
    const itemID =icon.dataset.id;
    icon.addEventListener('click', function(event){
      event.preventDefault();
      const parent = event.target.parentElement.parentElement.parentElement;
      const img= parent.querySelector('.itemImage').src;
      const name = parent.querySelector('.itemName').textContent;
      editedItemUI(parent, img, name, itemID);
    });
  });

};

//delete item api
function deleteItemAPI(id){
  const XHR = new XMLHttpRequest();
  const url = `https://5c26d3884977c20014878e7e.mockapi.io/items/${id}`;
  XHR.open("DELETE",url, true);

  XHR.onload = function(){
    getItemsAPI(showItems);
    if(this.status === 200){
      // console.log(this.responseText);
    }else{
      console.log(this.statusText)
    }
  };

  XHR.onerror= function(){
    console.log("there was an error")
  };

  XHR.send();
};

//edit item ui
function editedItemUI(parent, itemImg, name, itemID){
  event.preventDefault();
  itemList.removeChild(parent);

  const imgIndex = itemImg.indexOf('img/');
  const jpegIndex = itemImg.indexOf('.jpeg');

  const img = itemImg.slice(imgIndex + 4,jpegIndex);
  itemInput.value = name.trim();
  imageInput.value = img;
  editedItemID = itemID;
  submitBtn.innerHTML ='Edit Item'
  httpForm.removeEventListener('submit', submitItem);
  httpForm.addEventListener('submit', editItemAPI);
};

//edit item API
function editItemAPI(){
  event.preventDefault();
  const id = editedItemID;

  const itemValue = itemInput.value;
  const imageValue = imageInput.value.toLowerCase();
  if(itemValue.length === 0 || imageValue.length === 0){
    showFeedback(' please enter a valid value');
  }
  else{
    const img = `img/${imageValue}.jpeg`;
    const name = itemValue;

    const XHR = new XMLHttpRequest();
    const url = `https://5c26d3884977c20014878e7e.mockapi.io/items/${id}`;
    XHR.open("PUT",url, true);
    XHR.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    XHR.onload = function(){
      reverseForm();
      if(this.status === 200){

        console.log(this.responseText);

      }else{
        console.log('something went wrong');
      }
    };

    XHR.onerror= function(){
      console.log("there was an error")
    };


    XHR.send(`image= ${img}&name=${name}`);

  }
};

function reverseForm(){
  imageInput.value = '';
  itemInput.value = '';
  submitBtn.innerHTML = "Add Item";
  httpForm.removeEventListener('submit', editItemAPI);
  httpForm.addEventListener('submit', submitItem);
  getItemsAPI(showItems);
}
