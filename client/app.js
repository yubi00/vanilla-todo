console.log('app loaded')
const usertodos = document.querySelector('.todos')
const userinput = document.querySelector('#userinput')
const btn = document.querySelector('#btn')
const searchText = document.getElementById('searchText')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let updatedItem = ''
  const li = document.createElement('li')
  const textnode = document.createTextNode(userinput.value)
  li.appendChild(textnode)

  const updateInput = document.createElement('input')
  updateInput.value = userinput.value
  updateInput.className = 'updatedItem'
  updateInput.addEventListener('change', (e) => {
    updatedItem = e.target.value
  })

  li.appendChild(updateInput)

  const updateBtn = document.createElement('button')
  updateBtn.textContent = 'save'
  updateBtn.type = 'submit'
  updateBtn.className = 'updateItemBtn'
  updateBtn.style.display = 'none'
  li.appendChild(updateBtn)

  const delBtn = document.createElement('button')
  delBtn.textContent = 'X'
  delBtn.className = 'deleteBtn'
  li.appendChild(delBtn)

  updateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    submitUpdateItem(li, updatedItem)
    updateInput.style.display = 'none'
    updateBtn.style.display = 'none'
  })

  delBtn.addEventListener('click', (e) => {
    e.preventDefault()
    deleteItem(li)
  })

  li.addEventListener('dblclick', (e) => {
    e.preventDefault()
    showUpdateItem(updateInput, updateBtn)
  })
  usertodos.appendChild(li)
  userinput.value = ''
})

const deleteItem = (item) => {
  usertodos.removeChild(item)
}

const showUpdateItem = (item, btn) => {
  item.style.display = 'block'
  btn.style.display = 'block'
}

const submitUpdateItem = (item, value) => {
  const newTextNode = document.createTextNode(value)
  item.childNodes[0].nodeValue = newTextNode.data
}

searchText.addEventListener('keydown', filterResult)

function filterResult(e) {
  console.log(e)
}
