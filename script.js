import { asdaPizzaIngredients } from "./asdaPizza/src/data/calories.js";

function generateForm(data) {
    const form = document.getElementById('form');

    for(let category in data){
        console.log("CATEGORY >>>",category)
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = category;
        fieldset.appendChild(legend);
        
        
        for(let option in data[category]){
            console.log("OPTION >>>",option)
            const label = document.createElement('label')
            label.textContent = `${option}\n`
            
            // const input = document.createElement('input');
            // input.type = 'radio';
            // input.name = `${option}\n`;
            // input.value = option;

            //label.prepend(input);
            fieldset.appendChild(label);
        }
        form.appendChild(fieldset);
    }
    
}

// Generate the form on page load
document.addEventListener('DOMContentLoaded', function() {
    generateForm(asdaPizzaIngredients);
});