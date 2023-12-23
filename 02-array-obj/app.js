/*
//Theory

const array = [
    {age: 12, name: 'vlad'},
    {age: 10, name: 'daria'},
    {age: 15, name: 'ira'},
    {age: 19, name: 'sasha'},
    {age: 8, name: 'katya'},
    {age: 14, name: 'masha'},
]
//const arr = new Array(1, 2, 5, 66, 6, 6)

// console.log(array.length)
// array[0] = 'hello'
// console.log(array[array.length - 1])
// console.log(array[0])
// array[array.length] = 'becon'
// console.log(array[6])

//console.log(array[4].name)
*/


const inputElement = document.getElementById('title')
const createButton = document.getElementById('create')
const listElement = document.getElementById('list')


// const notes = ['Блок про Массивы', 'Выучить ОБьекты ']
// Функция для получения HTML-разметки заметки
/*function getNoteTemplate  (title)  {
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${title}</span>
        <span>
        <span class="btn btn-small btn-success">✓</span>
        <span class="btn btn-small btn-danger">×</span>
    </span>
    </li>`
}*/
/*
function render() {

    /!*for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
      }*!/
    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
    }
}

render()*/

/*
createButton.onclick = function () {
    // Проверяем, что поле ввода не пустое
    if (inputElement.value.length === 0) {
        return
    }
    // Добавляем HTML-разметку для новой заметки в конец списка
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
    // Очищаем поле ввода
    inputElement.value = ''
}
*/


/*
//=========OBJ THEORY
const person = {
    firstName: 'Vladislav',
    lastName: 'Vakula',
    yearBirth: 1997,
    age: 26,
    isMarried: true,
    languages: ['ru','en'],
    getFullName : function (string){
        console.log(person.firstName + ' ' + person.lastName)
    },
}
console.log(person.isMarried)
const key = 'isMarried'
console.log(person[key])

person.age = 27
console.log(person.age)
//console.log(typeof notes)
person.getFullName()
*/


const notes = [{
    title: 'Блок про Массивы',
    completed: false
},
    {
        title: 'Выучить ОБьекты',
        completed: true
    }]

function getNoteTemplate  (note)  {
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${note.title}</span>
        <span>
        <span class="btn btn-small btn-success">✓</span>
        <span class="btn btn-small btn-danger">×</span>
    </span>
    </li>`
}

function render() {

    /*  for (let i = 0; i < notes.length; i++) {
      listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
  }*/
    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
    }
}

render()

createButton.onclick = function () {
    // Проверяем, что поле ввода не пустое
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false
    }
    // Добавляем HTML-разметку для новой заметки в конец списка
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
    // Очищаем поле ввода
    inputElement.value = ''
}
