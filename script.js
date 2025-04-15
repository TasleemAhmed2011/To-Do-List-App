var myform = document.getElementById("myform");
var myinput = document.getElementById("myinput");
var myitem = document.getElementById("myitem");

myform.addEventListener("submit", function (event) {
    event.preventDefault()
    createitem(myinput.value)
})  

function createitem(inputItems) {
    var items = `<li>${inputItems}
    <button onclick="deleteitem(this)"> Delete </button>
    </li>`;
    myitem.insertAdjacentHTML("beforeend", items);
    myinput.value=  
    myinput.focus()
}
function deleteitem(ElementToDelete){

    ElementToDelete.parentElement.remove()
    
    }
