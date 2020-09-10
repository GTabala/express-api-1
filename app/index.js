// fetch request later
let user

function fetchData() {
    return fetch('http://localhost:3000/user', {
        method: 'get',
        // mode: 'no-cors',
        headers: {
            accept: 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => user = data)
    .then(() => console.log(user))
    .catch(e => console.log(e))
}

function postData (data) {
    return fetch('http://localhost:3000/user', {
        method: 'post',
        body: JSON.stringify(data),
        // mode: 'no-cors',
        headers: {
            accept: 'application/json',
            "content-type": 'application/json'
        }
    })
    .then(res => res.json())
    .catch(console.log)
}


fetchData()

postData({
    username: 'Dan',
    age: 22
})