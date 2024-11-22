// import Sortable from 'https://cdn.jsdelivr.net/npm/sortablejs@latest/modular/sortable.esm.js';

// const tableBody = document.getElementById('js-table-list');

// new Sortable(tableBody);

export const dragAndDrop = () => {  
    
    setTimeout(() => {        
        const draggables = document.querySelectorAll('.draggable')
        const container = document.getElementById('js-table-list')
        
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging')
            })
        
            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging')
            })
        })
        
        container.addEventListener('dragover', (e) => {
            e.preventDefault()
        
            const currentEl = document.querySelector('.dragging')
            const closestEl = getClosest(container, e.clientY)
            if (closestEl == null) {            
                container.appendChild(currentEl)
            } else {
                container.insertBefore(currentEl,closestEl)
            }
        })
        
        const getClosest = (container, position) => {
            const draggableEl = [...container.querySelectorAll('.draggable:not(.dragging)')]
        
            return draggableEl.reduce((closest, child) => {
                const box = child.getBoundingClientRect()
                const offset = position - box.top - box.height / 2
        
                if (offset < 0 && offset > closest.offset) {
                    return {offset: offset, element: child}
                } else {
                    return closest
                }
            }, {offset:Number.NEGATIVE_INFINITY}).element
        
        }
    }, 100)
}  
