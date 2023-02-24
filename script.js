const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    console.log(panel);

    panel.addEventListener('click', () =>{
        removeActivePanels();
        panel.classList.add('active')
    })

})

function removeActivePanels(){

    panels.forEach((panel) => {
        panel.classList.remove('active');
    })

}