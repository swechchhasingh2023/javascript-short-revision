console.log("hello AJAX");

let fetchButton = document.getElementById('fetchBtn')
fetchButton.addEventListener('click', buttonClickhandler)

function buttonClickhandler() {
    console.log('You have clicked on fetch Button')

    // set 1 - Initialization
    const xhr = new XMLHttpRequest();

    // set 2 - Open the Object
    //    xhr.open('GET', 'swe.txt', true)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', false)

    // get : data fetch (give the url)
    // api or file or json
    // true/false: asynchronous/synchronous

    // old way

    xhr.onreadystatechange = function () {
        console.log("ready stage: ", xhr.readyState)
    }

    // step : 3
    // xhr.onprogress = function () {
    //     console.log("In Progree")
    // }

    // stape : 4
    // what to do when response is ready:
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText)
        }
        else {
            console.log("Some Error here!")
        }
    }
    //  step: 5
    param = { userId: 1, id: 2, title: "abc", completed: "yes" }
    xhr.send(param);
    console.log("Every thing is good")
}