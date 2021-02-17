alert("selamat datang!")

const stackContainer = document.querySelector('.stack-container')
const btnPush = document.querySelector('.btn-push')
const btnPop = document.querySelector('.btn-pop')

// template literal for stack item
const addStack = (counter) => {
    return `<a href="#" class="list-group-item list-group-item-action list-group-item-secondary stack-item">stack ${counter}</a>`
}

// variable counter
let counter = 0

btnPush.addEventListener('click', () => {
    // inserting an item to stack container
    stackContainer.insertAdjacentHTML("beforeend", addStack(++counter))

    // get all the item that has been inserted 
    const stackItems = document.querySelectorAll('.stack-item')

    // faded-in the last element of stackItems
    stackItems[stackItems.length - 1].style.animation = 'faded-in 1s'
})


btnPop.addEventListener('click', () => {
    // get all the item that has been inserted 
    const stackItems = document.querySelectorAll('.stack-item')

    // check if there is no item in stack
    if( stackItems.length != 0 ) {
        
        // faded-out the last element of stackItems
        stackItems[stackItems.length - 1].style.animation = 'faded-out 1s'

        // wait 1 second for the item really being remove
        setTimeout(() => {
            stackItems[stackItems.length - 1].remove()
        }, 1000)

    }
})