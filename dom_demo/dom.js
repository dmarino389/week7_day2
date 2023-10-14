console.log('dom demo')

console.log(document)
console.log(document.body)

const myTitle = document.getElementById('title')
console.log(myTitle)
myTitle.innerText = 'New Title!'

const ps = document.getElementsByTagName('p')
console.log(ps)
for (let p of ps){
  console.log(p.innerText)
  p.innerText = 'replaced'
}

const found = document.getElementsByClassName('find-me')
console.log(found)
found[0].className = 'text-danger'
myTitle.innerText = '<p>New Title</p>'
myTitle.innerHTML = '<p>New Title</p>'

const imgs = document.getElementsByTagName('img')
console.log(imgs)
imgs[0].src = 'https://placeholder.com/150'

const input = document.getElementById('pokemon')
input.value = 'Starting Val'

const changeColor = (event) => {
  console.log(event)
  const button = event.target
  if (button.className== 'btn btn-primary') {
    button.className = 'btn btn-danger'
    } else if (button.className=='btn btn-danger'){
        button.className = 'btn btn-success'
    } else {
      button.className = 'btn btn-primary'
    }
}

const button2 = document.createElement('button')
button2.innerText = 'Click me 2'
button2.className = 'btn btn-danger'
document.body.append(button2)
button2.onclick = changeColor


const button3 = document.createElement('button')
button3.innerText = 'Click me 3'
button3.className = 'btn btn-success'
document.body.append(button3)
button3.addEventListener('click', changeColor)

const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit', (e) => {
e.preventDefault()
console.log(e)
console.log(e)
const myValue = e.target[0].value
const myValue1 = e.target.poke.value
console.log(myValue)
})

button3.addEventListener('click', () => {
  const container = document.querySelector('div.container')
  const text = document.createElement('h3')
  text.innerText = 'Newly Generated Text'
  container.append(text)
  
})