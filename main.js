let myLeads = []
const inputElement = document.querySelector("#input-element")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    if (inputElement.value !== '') {
        myLeads.push(inputElement.value)
        inputElement.value = ''
        renderLeads()
    }

})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems
}
