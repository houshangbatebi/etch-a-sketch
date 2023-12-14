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
            size = Number(prompt('Grid Size? (Enter a positive number less than or equal to 100)'))
        } while (isNaN(size) || (size < 1) || (size > 100))
       // Create size*size grid
        createGrid(size)
    })


    function createGrid(size) {
        // Remove current grid
        container.innerHTML = ''

        // Create new size*size grid of square divs
        for (let i = 1; i <= size; i++) {
            // Create a flex container
            const flexContainer = document.createElement('div')
            flexContainer.classList.add('flex-container')
    
            // Create 16 flex item inside current flex container
            for (let j = 1; j <= size; j++) {
                const flexItem = document.createElement('div')
                flexItem.classList.add('flex-item')
                flexContainer.appendChild(flexItem)
            }

            // Add this flex container to the parent container
            container.appendChild(flexContainer)

            // The height of flex container should be determined in such a way that each flex item becomes a square shape
            // Note that, due to CSS settings, all flex items will grow to fill the entire flex container space.
            const flexItemWidth = flexContainer.querySelector('.flex-item').offsetWidth
            flexContainer.style.height = flexItemWidth + 'px';
        }
    
        // Handle hover/mouseover event for each square
        const squares = container.querySelectorAll('.flex-item')
        squares.forEach((square) => {
            // Add event listener for 'mouseenter' event for each square
            square.addEventListener('mouseenter', (event) => {
                // Change the background color of this square to black
                const touchedSquare = event.target
                touchedSquare.style.backgroundColor = 'black'
            })
        })   
    }
})

