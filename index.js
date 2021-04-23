// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })})
  .then(r => r.json())
  .then(appendId)
  .catch(appendError)
}

function appendId(jsob) {
  let ul = document.getElementById('list')
  let li = document.createElement('li')
  li.innerHTML = jsob.id
  ul.append(li)
}

function appendError(error) {
  let ul = document.getElementById('list')
  let li = document.createElement('li')
  li.innerHTML = error.message
  ul.append(li)
}
