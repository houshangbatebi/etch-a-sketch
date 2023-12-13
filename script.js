document.addEventListener('DOMContentLoaded', () => {
    const Container = document.createElement('div')
    
    for (let i = 1; i <= 16; i++) {
        const flexContainer = document.createElement('div')
        flexContainer.classList.add('flex-container')
        for (let j = 1; j <= 16; j++) {
            const flexItem = document.createElement('div')
            flexItem.classList.add('flex-item')
            flexContainer.appendChild(flexItem)
        }
        Container.appendChild(flexContainer)
    }

    document.body.appendChild(Container)
})