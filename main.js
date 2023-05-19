let myTabs = []

const inputElement = document.querySelector("#input-element")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.querySelector("#del-btn")
const tabBtn = document.querySelector("#tab-btn")

let tabsFromLocalStorage = JSON.parse(localStorage.getItem("myTabs"))

if (tabsFromLocalStorage) {
    myTabs = tabsFromLocalStorage
    render(myTabs)
}

function render(tabs) {
    let listItems = ""
    for (let i = 0; i < tabs.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${tabs[i]}'>
                ${tabs[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
    if (inputElement.value !== '') {
        myTabs.push(inputElement.value)
        inputElement.value = ''
        localStorage.setItem("myTabs", JSON.stringify(myTabs))
        render(myTabs)
    }

})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myTabs.push(tabs[0].url)
        localStorage.setItem("myTabs", JSON.stringify(myTabs))
        render(myTabs)
    })
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myTabs = []
    render(myTabs)
})






// // myTabs = JSON.parse(myTabs)
// // myTabs.push("Soye")
// // myTabs = JSON.stringify(myTabs)
// // console.log(typeof myTabs)

// // localStorage.setItem("name", "Soye Charles")
// // console.log(localStorage.getItem("name"))
// // localStorage.clear()



// // const li = document.createElement("li")
//         // li.textContent = myTabs[i]
//         // ulEl.append(li)