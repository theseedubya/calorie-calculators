// The object you provided
const pizzaOptions = {
    "bases": {
        "small": { "thin stonebaked": 282 },
        "medium": { "thin stonebaked": 494, "woodfired": 496, "stuffed crust": 984, "deep pan": 778 },
        "large": { "thin stonebaked": 960, "woodfired": 808, "deep pan": 1916, "detroit": 900 }
    },
    "sauces": {
        "small": {},
        "medium": { "tomato sauce": 27, "bbq sauce": 93, "garlic spread": 223 },
        "large": { "tomato sauce": 53, "bbq sauce": 187, "garlic spread": 447 }
    },
    "cheeses": {
        "small": {},
        "medium": { "grated cheese": 147, "vegan cheese": 250 },
        "large": { "grated cheese": 327, "vegan cheese": 500 }
    },
    "toppings": {
        "small": {},
        "medium": {
            "smoked ham": 40, "spicy chicken": 59, "plain chicken": 43, "diced chorizo": 129, "bacon": 113,
            "spicy beef": 67, "diced steak": 37, "pepperoni": 63, "meatballs": 93, "mushrooms": 4,
            "red onions": 11, "mixed peppers": 10, "sweetcorn": 28, "pineapple pieces": 27,
            "jalepeno peppers": 1, "bbq jackfruit": 43, "sliced black olives": 61, "chilli cheese": 140,
            "mozzarella slices": 65, "grated cheese": 80
        },
        "large": {
            "smoked ham": 81, "spicy chicken": 118, "plain chicken": 85, "diced chorizo": 259, "bacon": 226,
            "spicy beef": 134, "diced steak": 73, "pepperoni": 126, "meatballs": 186, "mushrooms": 8,
            "red onions": 22, "mixed peppers": 21, "sweetcorn": 55, "pineapple pieces": 55,
            "jalepeno peppers": 3, "bbq jackfruit": 86, "sliced black olives": 122, "chilli cheese": 279,
            "mozzarella slices": 108, "grated cheese": 159
        }
    }
};

// Function to generate the form
function generateForm(options) {
    const form = document.getElementById('form');

    // Loop through each category (bases, sauces, cheeses, toppings)
    for (let category in options) {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        fieldset.appendChild(legend);

        // Loop through each size (small, medium, large)
        for (let size in options[category]) {
            if (Object.keys(options[category][size]).length > 0) {
                const sizeLabel = document.createElement('label');
                sizeLabel.textContent = size.charAt(0).toUpperCase() + size.slice(1) + ':';
                fieldset.appendChild(sizeLabel);

                // Loop through each option within the size
                for (let option in options[category][size]) {
                    const checkboxLabel = document.createElement('label');
                    checkboxLabel.textContent = `${option} (${options[category][size][option]} cal)`;
                    checkboxLabel.style.display = 'block';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.name = `${category}-${size}`;
                    checkbox.value = option;

                    checkboxLabel.prepend(checkbox);
                    fieldset.appendChild(checkboxLabel);
                }
                fieldset.appendChild(document.createElement('br'));
            }
        }

        form.appendChild(fieldset);
    }
}

// Generate the form on page load
document.addEventListener('DOMContentLoaded', function() {
    generateForm(pizzaOptions);
});
