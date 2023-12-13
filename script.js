document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div')
    
    // Create 16x16 grid of square divs
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

    // Add container to the page body
    document.body.appendChild(container)

    // Handle hover/mouseover event for each square
    const squares = container.querySelectorAll('.flex-item')
    squares.forEach((square) => {
        // Add event listener for 'mouseenter' event for each square
        square.addEventListener('mouseenter', (event) => {
            // Change the background color of this square
            const touchedSquare = event.target
            touchedSquare.style.backgroundColor = 'black'
        })
    })
})