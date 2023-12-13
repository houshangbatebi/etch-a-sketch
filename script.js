document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    // Create 16*16 grid of square divs
    createGrid(16)

    // Grid size button click event handling
    const button = document.querySelector('#size-button')
    button.addEventListener('click', () => {
        let size = 16;
        do {
            // Get the size from user. Grid size must be a positive number between 1 and 100
            size = prompt('Grid Size? (Enter a positive number lower than or equal to 100)')
        } while ((size < 1) || (size > 100))

    })


    function createGrid(size) {
        // Create size*size grid of square divs
        for (let i = 1; i <= 16; i++) {
            // Create a flex container
            const flexContainer = document.createElement('div')
            flexContainer.classList.add('flex-container')
    
            // Create 16 flex item for each flex container
            for (let j = 1; j <= 16; j++) {
                const flexItem = document.createElement('div')
                flexItem.classList.add('flex-item')
                flexContainer.appendChild(flexItem)
            }
            // Add this flex container to the parent container
            container.appendChild(flexContainer)
        }
    
        // Handle hover/mouseover event for each square
        const squares = container.querySelectorAll('.flex-item')
        console.log(squares[0].offsetWidth)
        console.log(squares[0].offsetHeight)
        squares.forEach((square) => {
            // Add event listener for 'mouseenter' event for each square
            square.addEventListener('mouseenter', (event) => {
                // Change the background color of this square
                const touchedSquare = event.target
                touchedSquare.style.backgroundColor = 'black'
            })
        })   
    }
})