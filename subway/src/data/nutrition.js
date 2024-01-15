const breadData = [
    {
      "ingredient": "9-Grain Wheat Bread",
      "serving_size": 78,
      "calories": 165
    },
    {
      "ingredient": "Gluten-Free Bread",
      "serving_size": 110,
      "calories": 285
    },
    {
      "ingredient": "Hearty Italian Bread",
      "serving_size": 78,
      "calories": 186
    },
    {
      "ingredient": "Honey & Oat Bread",
      "serving_size": 96,
      "calories": 235
    },
    {
      "ingredient": "Italian Herbs & Cheese Bread",
      "serving_size": 81,
      "calories": 195
    },
    {
      "ingredient": "Italian White Bread",
      "serving_size": 71,
      "calories": 161
    },
    {
      "ingredient": "Plain Tortilla Wrap",
      "serving_size": 71.5,
      "calories": 214.5
    }
  ]

const protein = [
    {
      "ingredient": "Big Beef Patty",
      "serving_size": 65,
      "calories": 140
    },
    {
      "ingredient": "Lincolnshire Sausage Patty",
      "serving_size": 50,
      "calories": 121.5
    },
    {
      "ingredient": "Chicken Tikka",
      "serving_size": 71,
      "calories": 89
    },
    {
      "ingredient": "Ham (2 slices)",
      "serving_size": 28,
      "calories": 34
    },
    {
      "ingredient": "Maple Cured Streaky Bacon (2 slices)",
      "serving_size": 9,
      "calories": 37
    },
    {
      "ingredient": "Pork & Beef Meatballs (in marinara sauce)",
      "serving_size": 137,
      "calories": 228
    },
    {
      "ingredient": "Meatless Meatballs (in marinara sauce)",
      "serving_size": 137,
      "calories": 155
    },
    {
      "ingredient": "Nacho Chicken Bites (4 Pieces)",
      "serving_size": 72,
      "calories": 180
    },
    {
      "ingredient": "Pepperoni (3 slices)",
      "serving_size": 18,
      "calories": 73
    },
    {
      "ingredient": "Plant Patty",
      "serving_size": 85,
      "calories": 169
    },
    {
      "ingredient": "Plantbbased steak",
      "serving_size": 71,
      "calories": 114
    },
    {
      "ingredient": "Poached Egg",
      "serving_size": 50,
      "calories": 70
    },
    {
      "ingredient": "Pork and Beef Meatballs (Participating stores)",
      "serving_size": 72,
      "calories": 188
    },
    {
      "ingredient": "Roast Chicken Breast Strips",
      "serving_size": 71,
      "calories": 85
    },
    {
      "ingredient": "Salami (3 slices)",
      "serving_size": 18,
      "calories": 73
    },
    {
      "ingredient": "Philly Steak",
      "serving_size": 71,
      "calories": 86
    },
    {
      "ingredient": "Tuna (with Lite Mayonaise)",
      "serving_size": 74,
      "calories": 144.9
    },
    {
      "ingredient": "Turkey Breast (2 slices)",
      "serving_size": 38,
      "calories": 38
    },
    {
      "ingredient": "HALAL Meatballs (in marinara sauce)",
      "serving_size": 137,
      "calories": 223
    },
    {
      "ingredient": "HALAL Roast Chicken Breast Strips",
      "serving_size": 71,
      "calories": 85
    },
    {
      "ingredient": "HALAL Chicken Tikka",
      "serving_size": 71,
      "calories": 89
    },
    {
      "ingredient": "HALAL Pepperoni (Beef) (3 slices)",
      "serving_size": 18,
      "calories": 73
    },
    {
      "ingredient": "HALAL Salami (Beef) (3 slices)",
      "serving_size": 18,
      "calories": 73
    },
    {
      "ingredient": "HALAL Steak",
      "serving_size": 71,
      "calories": 86
    },
    {
      "ingredient": "HALAL Turkey Breast (3 slices)",
      "serving_size": 57,
      "calories": 62
    },
    {
      "ingredient": "HALAL Turkey Ham (3 slices)",
      "serving_size": 28,
      "calories": 29
    },
    {
      "ingredient": "HALAL Turkey Rashers (2 slices)",
      "serving_size": 19,
      "calories": 30
    },
    {
      "ingredient": "HALAL Turkey Sausage Patty",
      "serving_size": 50,
      "calories": 71
    }
  ]

const cheeses = [
    {
      "ingredient": "American-style Cheese",
      "serving_size": 12,
      "calories": 42
    },
    {
      "ingredient": "Monterey Jack Cheddar Slices",
      "serving_size": 10,
      "calories": 38
    },
    {
      "ingredient": "Mozzarella",
      "serving_size": 30,
      "calories": 74
    },
    {
      "ingredient": "Peppered Cheese (IOI)",
      "serving_size": 14,
      "calories": 45
    },
    {
      "ingredient": "Shredded Mozzarella & Cheddar Cheese Mix",
      "serving_size": 14,
      "calories": 45
    },
    {
      "ingredient": "Sliced Brie Cheese",
      "serving_size": 25,
      "calories": 91
    },
    {
      "ingredient": "Vegan CheeZe",
      "serving_size": 20,
      "calories": 59
    }
  ]

const vegetables = [
    {
      "ingredient": "Cucumbers",
      "serving_size": 18,
      "calories": 3
    },
    {
      "ingredient": "Carrots",
      "serving_size": 7,
      "calories": 3
    },
    {
      "ingredient": "Jalapenos",
      "serving_size": 7,
      "calories": 1
    },
    {
      "ingredient": "Lettuce",
      "serving_size": 14,
      "calories": 2
    },
    {
      "ingredient": "Mixed peppers",
      "serving_size": 12,
      "calories": 3
    },
    {
      "ingredient": "Olives",
      "serving_size": 3,
      "calories": 3
    },
    {
      "ingredient": "Pickles",
      "serving_size": 7.5,
      "calories": 1
    },
    {
      "ingredient": "Red onions",
      "serving_size": 7,
      "calories": 3
    },
    {
      "ingredient": "Sweetcorn",
      "serving_size": 7,
      "calories": 6
    },
    {
      "ingredient": "Tomatoes",
      "serving_size": 30,
      "calories": 5
    }
  ];
  
const sauces = [
    {
      "ingredient": "Caramelised Red Onion in Balsamic Vinegar",
      "serving_size": 7.5,
      "calories": 9
    },
    {
      "ingredient": "Chipotle Southwest sauce",
      "serving_size": 14,
      "calories": 58
    },
    {
      "ingredient": "Creamy Caesar sauce",
      "serving_size": 2,
      "calories": 7
    },
    {
      "ingredient": "Extra Spicy Chipotle sauce",
      "serving_size": 14,
      "calories": 60
    },
    {
      "ingredient": "Garlic & Herb Sauce",
      "serving_size": 9,
      "calories": 51
    },
    {
      "ingredient": "Hickory Smoked BBQ sauce",
      "serving_size": 14,
      "calories": 24
    },
    {
      "ingredient": "Honey & Wholegrain Mustard sauce",
      "serving_size": 14,
      "calories": 29
    },
    {
      "ingredient": "HP Brown sauce",
      "serving_size": 14,
      "calories": 17
    },
    {
      "ingredient": "Lite Mayonnaise",
      "serving_size": 14,
      "calories": 48
    },
    {
      "ingredient": "Basil Pesto",
      "serving_size": 14,
      "calories": 24
    },
    {
      "ingredient": "Salsa",
      "serving_size": 28,
      "calories": 13
    },
    {
      "ingredient": "Sriracha Hot Chilli sauce",
      "serving_size": 14,
      "calories": 18
    },
    {
      "ingredient": "Sticky Sweet Chilli sauce",
      "serving_size": 14,
      "calories": 30
    },
    {
      "ingredient": "Sweet Onion sauce",
      "serving_size": 14,
      "calories": 23
    },
    {
      "ingredient": "Teriyaki Sauce",
      "serving_size": 14,
      "calories": 25
    },
    {
      "ingredient": "Tomato Ketchup",
      "serving_size": 14,
      "calories": 14
    }
  ]

const toppings = [
    {
      "ingredient": "Chili Flakes",
      "serving_size": 1,
      "calories": 4
    },
    {
      "ingredient": "Crispy Onions",
      "serving_size": 7,
      "calories": 41
    },
    {
      "ingredient": "Multi-Seed Mix",
      "serving_size": 10,
      "calories": 58
    }
  ]

const desserts = [
    {
      "ingredient": "Cadbury's® Caramel Muffin",
      "serving_size": 110,
      "calories": 480
    },
    {
      "ingredient": "Chocolate Chunk Cookie",
      "serving_size": 45,
      "calories": 214
    },
    {
      "ingredient": "Chocolate Donut",
      "serving_size": 60,
      "calories": 262
    },
    {
      "ingredient": "Double Chocolate Cookie",
      "serving_size": 45,
      "calories": 209
    },
    {
      "ingredient": "Oreo® Muffin",
      "serving_size": 110,
      "calories": 485
    },
    {
      "ingredient": "Rainbow Cookie",
      "serving_size": 45,
      "calories": 213
    },
    {
      "ingredient": "Sugared Donut",
      "serving_size": 49,
      "calories": 216
    },
    {
      "ingredient": "Vegan Double Chocolate Cookie",
      "serving_size": 46,
      "calories": 219
    },
    {
      "ingredient": "White Macadamia Nut Cookie",
      "serving_size": 45,
      "calories": 215
    }
  ]
  