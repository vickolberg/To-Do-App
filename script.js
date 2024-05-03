let inputForm = document.getElementById("input");
let listDiv = document.getElementById("list-div");
let unorderedList = document.getElementById("ul");

const addButton = document.getElementById("add-btn");

addButton.addEventListener("click", e=> {
    e.preventDefault();
    let newItem = document.createElement("li");
    let newbtn = document.createElement("button");
    newbtn.textContent = "X";
    newbtn.className = "delbtn"
    newItem.textContent = inputForm.value;
    unorderedList.appendChild(newItem);
    newItem.appendChild(newbtn);

    newbtn.addEventListener("click", e=> {
        e.preventDefault();
        newItem.remove();
    })

    newItem.addEventListener("click", e=>{
        e.preventDefault();
        newItem.classList.toggle("checked-item")
    });
    clearText();
});

function clearText(){
    inputForm.value = "";
};