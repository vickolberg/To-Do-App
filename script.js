let inputForm = document.getElementById("input");
let listDiv = document.getElementById("list-div");
let unorderedList = document.getElementById("ul");
const addButton = document.getElementById("add-btn");


//styles

inputForm.style.width = "332px";
inputForm.style.height = "40px";
inputForm.style.borderRadius = "9px";
inputForm.style.backgroundColor = "rgb(241, 241, 228)";
inputForm.style.fontSize = "14px";

unorderedList.style.listStyleType = "none";
unorderedList.style.lineHeight = "41px";

listDiv.style.textAlign = "center";
listDiv.style.marginTop = "30px";
listDiv.style.fontSize = "20px";


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