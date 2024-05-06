let inputForm = document.getElementById("input");
let listDiv = document.getElementById("list-div");
let unorderedList = document.getElementById("ul");
const addButton = document.getElementById("add-btn");
const mainContainer = document.getElementById("main-container");

//styles
Object.assign(mainContainer.style, {
    backgroundColor: "rgb(224, 209, 233)",
    display: "inline-block",
    width: "500px",
    height: "500px",
    borderRadius: "10px",
    padding: "30px",
    position: "fixed",
    inset: "0px",
    margin: "auto",
    boxShadow: "5px 5px 10px purple",
    border: "4px solid purple"
  });

  Object.assign(inputForm.style, {
    width: "332px",
    height: "40px",
    borderRadius: "9px",
    backgroundColor: "rgb(241, 241, 228)",
    fontSize: "14px"
  });
Object.assign(unorderedList.style,{
    listStyleType: "none",
    lineHeight: "41px"
} );
Object.assign(listDiv.style, {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "20px"
})

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