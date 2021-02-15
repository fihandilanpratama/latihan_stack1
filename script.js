const stackContainer = document.querySelector('.stack-container')
const btnPush = document.querySelector('.btn-push')
const btnPop = document.querySelector('.btn-pop')

const addStack = (counter) => {
    return `<a href="#" class="list-group-item list-group-item-action list-group-item-secondary stack-item">stack ${counter}</a>`
}

let counter = 0
btnPush.addEventListener('click', () => {
    stackContainer.innerHTML += addStack(++counter)
})

btnPop.addEventListener('click', () => {
    const stackItems = document.querySelectorAll('.stack-item')
    if( stackItems.length != 0 ) {
        stackItems[stackItems.length - 1].remove()
    }
})