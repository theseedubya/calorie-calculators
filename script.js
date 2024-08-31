import { asdaPizzaIngredients } from "./asdaPizza/src/data/calories.js";

function generateForm(data) {
    const form = document.getElementById('form');

    for (let category in data) {
        console.log("CATEGORY >>>", category)
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = category;
        fieldset.appendChild(legend);


        for (let size in data[category]) {
            if (Object.keys(data[category][size]).length > 0) {
                console.log("OPTION >>>", size)
                const sizeLabel = document.createElement('label')
                sizeLabel.textContent = `${size}\n`
                sizeLabel.setAttribute("class","sizeLabel")
                fieldset.appendChild(sizeLabel);

                for (let selection in data[category][size]) {
                    const selectionLabel = document.createElement('label')
                    selectionLabel.textContent = `${selection}`
                    selectionLabel.setAttribute("class", "selectionLabel")

                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = `${selection}`;
                    input.value = selection;
                    input.setAttribute("class", "selectionInput")

                    selectionLabel.append(input);
                    fieldset.appendChild(selectionLabel);
                }

            }
            fieldset.appendChild(document.createElement('br'));
        }
        form.appendChild(fieldset);
    }

}

// Generate the form on page load
document.addEventListener('DOMContentLoaded', function () {
    generateForm(asdaPizzaIngredients);
});