document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    // Create 16*16 grid of square divs
    createGrid(16)

    
    // Grid size change event handling
    // Update the displayed size when the user slides the input range
    const sizeRange = document.querySelector('#size-range')
    const sizeShow = document.querySelector('#live-size-show')
    sizeRange.addEventListener('input', () => {
        sizeShow.textContent = sizeRange.value
    })
    // Create grid with new size when the user actually changed the input
    sizeRange.addEventListener('change', () => {
        // Note that this event handler is executed only when the user releases the slider on the new value
        let newSize = sizeRange.value
        sizeShow.textContent = newSize
        createGrid(newSize)
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

