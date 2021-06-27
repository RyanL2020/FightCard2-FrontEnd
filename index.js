document.addEventListener('click', (event)=>{ console.log("You clicked ", event.target) }  )
document.addEventListener('DOMContentLoaded', () => {
const fighterFormContainer = document.querySelector('.container');
        let fighterForm = false;

        fighterForm = !fighterForm;
        if (fighterForm) {
        fighterFormContainer.style.display = "block";
        } else {
        fighterFormContainer.style.display = "none";
        }
    });