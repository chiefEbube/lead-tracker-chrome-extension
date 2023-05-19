let myLeads = []
const inputElement = document.querySelector("#input-element")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.querySelector("#del-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
    if (inputElement.value !== '') {
        myLeads.push(inputElement.value)
        inputElement.value = ''
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }

})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})






// // myLeads = JSON.parse(myLeads)
// // myLeads.push("Herald")
// // myLeads = JSON.stringify(myLeads)
// // console.log(typeof myLeads)

// // localStorage.setItem("name", "Per Borgen")
// // console.log(localStorage.getItem("name"))
// // localStorage.clear()



// // const li = document.createElement("li")
//         // li.textContent = myLeads[i]
//         // ulEl.append(li)