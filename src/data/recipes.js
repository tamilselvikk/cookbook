const recipes = [
    //North Indian
    {
        name: "Palak Paneer",
        cuisine: "North Indian",
        description: "Cottage cheese simmered in a creamy spinach base. Nutritious, iron-rich, and deeply satisfying.A classic balance of health and taste.",
    },
    {
        name: "Aloo Paratha",
        cuisine: "North Indian",
        description: "Whole wheat flatbread stuffed with spiced mashed potatoes. Pan-fried with ghee till golden and crisp outside, soft inside. Served hot with curd or pickle for the perfect comfort bite.",
    },
    {
        name: "Moong Dal Khichdi",
        cuisine: "North Indian",
        description: "Soft rice and moong dal cooked with mild spices. Comforting, wholesome, and easy to digest.Perfect for both lazy nights and recovery meals.",
    },
    {
       name: "Rajma Chawal",
       cuisine: "North Indian",
       description: "Red kidney beans slow-cooked in a spiced tomato-onion gravy. Served with steamed rice for the ultimate comfort combo. Hearty wholesome, and loved in every North Indian home.",
    },
    {
       name: "Rogan Josh",
       cuisine: "North Indian",
       description: "A Kashmiri classic made with tender lamb simmered in aromatic spices. Rich red gravy from Kashmiri chillies, not overpoweringly hot but deeply flavorful. Regal, warming, and perfect with naan and rice.", 
    },
    //South Indian
    {
        name: "Masala Dosa",
        cuisine: "South Indian",
        description: "Crispy golden rice-lentil crepe wrapped around a spiced potato filling. Served with coconut chutney and sambar for a classic South Indian start.",
    },
    {
        name: "Mutton Chukka",
        cuisine: "South Indian",
        description: "Dry-fried mutton with roasted spices and coconut. Spicy, chewy, and packed with robust flavors.",
    },
    {
        name: "Idli",
        cuisine: "South Indian",
        description: "Soft, steamed rice lentil cakes that are light fluffy, and super healthy. Easy to prepare with a fermented batter. Best enjoyed with coconut chutney and sambar for a classic South Indian start.",
    },
    {
        name: "Biriyani",
        cuisine: "South Indian",
        description: "Made with seeraga samba rice, chicken or mutton, and bold spices. Aromatic, mildly tangy, and full of South Indian flavor.",
    },
    {
        name: "Pongal",
        cuisine: "South Indian",
        description: "A warm, ghee-flavored rice-lentil dish with black pepper and cashews. Soft, hearty, and festival favorite.",
    },
    //Italian cuisine
    {
        name: "Margheritta Pizza",
        cuisine: "Italian",
        description: "Thin crust topped with tomato, mozzarella, and fresh basil. Simple, cheesy, and classic. A universal favourite.",
    },
    {
        name: "Spaghetti Aglio e Olio",
        cuisine: "Italian",
        description: "Pasta with garlic, olive oil, chili, and parsley. Quick, light and full of flavor. Perfect weeknight dish.",
    },
    {
        name: "Lasagna",
        cuisine: "Italian",
        description: "Layers of pasta, meat or veggies, cheese, and tomato sauce. Comforting, hearty, and cheesy. Always a crowd-pleaser.",
    },
    {
        name: "Pasta Alfredo",
        cuisine: "Italian",
        description:"Creamy pasta tossed in a buttery cheese sauce. Quick, rich and indulgent. Perfect for a comforting meal any day.",
    },
    {
        name: "Bruschetta",
        cuisine: "Italian",
        description: "Crunchy toasted bread topped with tomatoes, garlic, basil, and olive oil. Fresh, flavorful, and super easy to make. A perfect appetizer or snack.",
    },
    //Japanese cuisine
    {
        name: "Sushi",
        cuisine: "Japanese",
        description: "Bite-sized rolls of vinegared rice with fish, veggies, or both, wrapped in seaweed. Fresh, colorful, and packed with flavor. Perfect as a light meal or snack.",
    },
    {
        name: "Teriyaki Chicken",
        cuisine: "Japanese",
        description: "Chicken cooked in a sweet-savory teriyaki sauce. Quick, tender, and flavorful. Great with rice.",
    },
    {
        name: "Miso Soup",
        cuisine: "Japanese",
        description: "Warm broth made with miso paste, tofu, and seaweed. Light, comforting, and full of umami. Perfect starter or quick meal.",
    },
    {
        name: "Vegetable Tempura",
        cuisine: "Japanese",
        description: "Assorted veggies lightly battered and deep-fried till crispy. Crunchy, golden, and super flavorful. Great as a snack or side dish.",
    },
    {
        name: "Yakitori",
        cuisine: "Japanese",
        description: "Skewered chicken grilled with a sweet-savory soy glaze. Juicy, tender, and packed with flavor. Perfect for a quick snack or meal",
    },
    //American cuisine
    {
        name: "Cheeseburger",
        cuisine: "American",
        description: "Juicy beef patty with melted cheese, lettuce, and tomato in a soft bun Classic hearty, and satisfying. Perfect for any casual meal.",
    },
    {
        name: "Mac and Cheese",
        cuisine: "American",
        description: "Pasta baked in creamy cheese sauce. Comforting, cheesy, and quick to make. A favorite for all ages.",
    },
    {
        name: "Caesar Salad",
        cuisine: "American",
        description: "Romaine lettuce with creamy dressing, croutons, and Parmesan. Fresh, light, and easy to prepare.",
    },
    {
        name: "Grilled Cheese Sandwich",
        cuisine: "American",
        description: "Golden toasted bread with melted cheese inside. Simple, warm, and cheesy comfort. Perfect with tomato soup.",
    },
    {
        name: "Pancakes",
        cuisine: "American",
        description: "Fluffy stacked pancakes with butter and syrup. Quick to make and perfect for breakfast. Soft, sweet, and comforting.",
    },
    //Desserts
    {
        name: "Gulab Jamun",
        cuisine: "Indian",
        description: "Soft milk balls fried and soaked in sugar syrup. Sweet, melt-in-the mouth, and festive. A classic Indian treat.",
    },
    {
        name: "Ice Cream Sundae",
        cuisine: "American",
        description: "",
    },
    {
        name: "Kheer",
        cuisine: "Indian",
        description: "Rice simmered in milk with sugar and cardamom. Creamy, comforting, and lightly sweet. Great for any occasion.",
    },
    {
        name: "Cheesecake",
        cuisine: "American",
        description: "Creamy, tangy and sweet dessert with a buttery crust. Simple to make in no-bake or baked version, perfect for any occasion.",
    },
    {
        name: "Banana Pancakes",
        cuisine: "American",
        description: "Fluffy pancakes made with mashed bananas, flour and milk. Naturally sweet, quick and kid-friendly. Perfect for breakfast or dessert.",
    },
    //Fitness Boosters
    {
        name: "Spinach and Chickpea Salad",
        cuisine: "Fitness Boosters",
        description: "Leafy greens with protein rich chickpeas, tomatoes and a lemon dressing. High in fiber and vitamins. Energizing and filling without heaviness.",
    },
    {
        name: "Greek Yogurt with Berries and Nuts",
        cuisine: "Fitness Boosters",
        description: "Creamy yogurt with antioxidant-rich berries and crunchy nuts. Protein packed, supports gut health, and naturally sweet.",
    },
    {
        name: "Avocado and Egg Toast",
        cuisine: "Fitness Boosters",
        description: "Whole grain toast topped with mashed avocado and poached egg. Healthy fats, protein, and fiber. Quick satisfying and balanced.",
    },
    {
        name: "Protein Smoothie",
        cuisine: "Fitness Boosters",
        description: "A creamy blend of protein powder, banana, and almond milk. Quick, nutritious, and perfect for post-workout recovery."
    },
    {
        name: "Peanut Butter Oatshake",
        cuisine: "Fitness Boosters",
        description: "Milk blended with oats, peanut butter and a hint of honey. Proteins+healthy fats combo. Keeps you full and energized.",
    },
];

export default recipes;