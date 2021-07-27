const addBtn = document.getElementById("add-btn");
const ulEl = document.getElementById("ul-el");
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
        }else{
            list = JSON.parse(getLocalStorageData);  //transforming json string into a js object
        }
        list.push(inputField.value)
        localStorage.setItem("New Todo", JSON.stringify(list));
        let listItems= ""  
        for (let i=0; i<list.length; i++){
                listItems += `
                    <li id="chk" class='nes-container is-dark'>
                    ${list[i]}
                    <span  onclick="check()" class="nes-text is-success float-end check">Check</span>
                    </li>
                `
            }
            localStorage.setItem("New Todo", JSON.stringify(list)); //transforming js object into a json string
            ulEl.innerHTML = listItems
            inputField.value = ''
        }
    function clearList(){
        list = []
        ulEl.innerHTML= "<li> </li>"
        localStorage.setItem("New Todo", JSON.stringify(list)); //set the item in localstorage
    }

    function check(){
        document.getElementById('chk').style.textDecoration='line-through'
        document.getElementById('chk').style.color='green'
    }