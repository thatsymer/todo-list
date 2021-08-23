const addBtn = document.getElementById("add-btn");
const card = document.getElementById("card");
const inputField = document.getElementById("input-field");
const clearBtn= document.getElementById("clear-btn");
const todoList= document.getElementById("todo-list");
list = [];
//*************************EVENT LISTENERS*************************//
addBtn.addEventListener('click', renderList);
clearBtn.addEventListener('dblclick', clearList)

//*************************FUNCTIONS*************************//\
function renderList(){
    // FORM VALIDATION on EMPTY INPUT FIELD
    if(inputField.value == ""){
        return false
    }
        let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
        if(getLocalStorageData == null){ //if localstorage has no data
            list = []; //create a blank array
        }
        else{
            list = JSON.parse(getLocalStorageData);  //transforming json string into a js object
        }
        list.push(inputField.value)
        localStorage.setItem("New Todo", JSON.stringify(list));
        let listItems= ""  
        
        
        for (let i=0; i<list.length; i++){
                listItems += `
                <div class="card__item">
                    <div class="nes-container is-dark">
                        <span class="position-absolute top-0 end-0 fs-4 text-danger" id="close-card" onclick="removeListItem()"> <i class='bx bx-x'></i></span>
                        <h6>${list[i]}</h6>
                    </div>
                </div>
                `
                
            }
            

            localStorage.setItem("New Todo", JSON.stringify(list)); //transforming js object into a json string
            card.innerHTML = listItems
            inputField.value = ''
        }
    
    function clearList(){
        list = []
        card.innerHTML= '<div class="cards" id="card"></div>'
        localStorage.setItem("New Todo", JSON.stringify(list)); //set the item in localstorage
    }

    function removeListItem(){
        const closeCard = document.getElementById("close-card");
        closeCard.parentNode.remove()
        let itemsArray = JSON.parse(localStorage.getItem("New Todo"))
        for(let i = 0; i < itemsArray.length; i++){
            itemsArray.splice(i, 1);
            localStorage.setItem('New Todo', JSON.stringify(itemsArray));
          }

        }
        
    
