const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let message = []
    if (name.value === '' || name.value == null) {
        message.push('name is required')
    }
    if (email.value === '' || email.value == null) {
        message.push('Email is required')
    }
    if (message.length > 0) {
        e.preventDefault()
        errorElementt.innerText = message.join(',')
    }

})

