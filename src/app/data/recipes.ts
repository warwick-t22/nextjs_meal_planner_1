// Recipe database for interactive meal planner
export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface Recipe {
  id: string;
  name: string;
  category: string[];
  dietaryType: string[];
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  nutrition: Nutrition;
  heartHealthBenefits: string[];
  tags: string[];
  image?: string;
  equipment: string[];
}

export interface RecipeDatabase {
  recipes: Recipe[];
}

export const recipeDatabase: RecipeDatabase = {
  "recipes": [
    {
      "id": "beef-stir-fry-001",
      "name": "Beef Stir-Fry with Baby Bok Choy & Ginger",
      "category": ["dinner"],
      "dietaryType": ["meat"],
      "ingredients": [
        {
          "name": "lean beef sirloin",
          "amount": 450,
          "unit": "g"
        },
        {
          "name": "low-sodium soy sauce",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "rice vinegar",
          "amount": 1,
          "unit": "tbsp"
        },
        {
          "name": "cornstarch",
          "amount": 1,
          "unit": "tsp"
        },
        {
          "name": "sesame oil",
          "amount": 2,
          "unit": "tsp"
        },
        {
          "name": "garlic",
          "amount": 3,
          "unit": "cloves"
        },
        {
          "name": "fresh ginger",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "baby bok choy",
          "amount": 500,
          "unit": "g"
        },
        {
          "name": "red bell pepper",
          "amount": 1,
          "unit": "whole"
        },
        {
          "name": "spring onions",
          "amount": 2,
          "unit": "whole"
        },
        {
          "name": "toasted sesame seeds",
          "amount": 1,
          "unit": "tbsp"
        }
      ],
      "instructions": [
        "In a medium bowl, combine beef, 1 tablespoon soy sauce, rice vinegar, and cornstarch. Toss to coat and let marinate for 10 minutes.",
        "Heat 1 teaspoon sesame oil in a large wok or non-stick skillet over high heat. Add beef and stir-fry until just browned, about 2-3 minutes. Transfer to a plate.",
        "Add remaining 1 teaspoon sesame oil to the wok. Add garlic and ginger and stir-fry for 30 seconds until fragrant.",
        "Add bok choy and bell pepper. Stir-fry for 3-4 minutes until vegetables begin to soften but remain crisp.",
        "Return beef to the wok along with any accumulated juices. Add remaining 1 tablespoon soy sauce and stir-fry for 1-2 minutes until beef is cooked through and vegetables are tender-crisp.",
        "Garnish with spring onions and sesame seeds if using. Serve immediately, with brown rice if desired."
      ],
      "prepTime": 15,
      "cookTime": 10,
      "totalTime": 25,
      "servings": 4,
      "nutrition": {
        "calories": 320,
        "protein": 25,
        "carbs": 18,
        "fat": 14,
        "fiber": 3
      },
      "heartHealthBenefits": [
        "Uses minimal oil and relies on stir-frying for quick cooking",
        "Rich in vegetables that provide fiber and antioxidants",
        "Uses lean beef as a protein source",
        "Low in sodium when using low-sodium soy sauce",
        "Contains heart-healthy compounds from garlic and ginger"
      ],
      "tags": ["quick", "asian", "stir-fry", "weeknight"],
      "image": "beef_stir_fry.jpg",
      "equipment": ["stovetop"]
    },
    {
      "id": "chicken-casserole-002",
      "name": "Heart-Healthy Chicken Casserole",
      "category": ["dinner"],
      "dietaryType": ["poultry"],
      "ingredients": [
        {
          "name": "chicken breast",
          "amount": 500,
          "unit": "g"
        },
        {
          "name": "olive oil",
          "amount": 1,
          "unit": "tbsp"
        },
        {
          "name": "onion",
          "amount": 1,
          "unit": "large"
        },
        {
          "name": "carrots",
          "amount": 2,
          "unit": "medium"
        },
        {
          "name": "celery",
          "amount": 2,
          "unit": "stalks"
        },
        {
          "name": "garlic",
          "amount": 2,
          "unit": "cloves"
        },
        {
          "name": "low-sodium chicken broth",
          "amount": 500,
          "unit": "ml"
        },
        {
          "name": "dried thyme",
          "amount": 1,
          "unit": "tsp"
        },
        {
          "name": "dried rosemary",
          "amount": 1,
          "unit": "tsp"
        },
        {
          "name": "bay leaf",
          "amount": 1,
          "unit": "whole"
        },
        {
          "name": "potatoes",
          "amount": 300,
          "unit": "g"
        },
        {
          "name": "frozen peas",
          "amount": 100,
          "unit": "g"
        },
        {
          "name": "fresh parsley",
          "amount": 2,
          "unit": "tbsp"
        }
      ],
      "instructions": [
        "Preheat oven to 180°C.",
        "Cut chicken into bite-sized pieces. Season with salt and pepper.",
        "Heat olive oil in a large oven-safe pot over medium heat. Add chicken and cook until browned on all sides, about 5 minutes. Remove to a plate.",
        "In the same pot, add onion, carrots, and celery. Cook until softened, about 5 minutes.",
        "Add garlic and cook for 30 seconds until fragrant.",
        "Return chicken to the pot. Add broth, thyme, rosemary, and bay leaf. Bring to a simmer.",
        "Add diced potatoes, cover, and transfer to the oven. Bake for 45 minutes.",
        "Remove from oven, stir in peas, and return to oven for 10 more minutes.",
        "Remove bay leaf, garnish with fresh parsley, and serve."
      ],
      "prepTime": 20,
      "cookTime": 60,
      "totalTime": 80,
      "servings": 4,
      "nutrition": {
        "calories": 290,
        "protein": 28,
        "carbs": 22,
        "fat": 10,
        "fiber": 4
      },
      "heartHealthBenefits": [
        "Uses lean protein from chicken breast",
        "Rich in vegetables for fiber and nutrients",
        "Low in saturated fat",
        "Uses heart-healthy olive oil",
        "Low sodium when using low-sodium broth"
      ],
      "tags": ["comfort food", "one-pot", "family friendly"],
      "image": "chicken_casserole.jpg",
      "equipment": ["oven", "stovetop"]
    },
    {
      "id": "berry-smoothie-003",
      "name": "Heart-Healthy Mixed Berry Smoothie",
      "category": ["breakfast"],
      "dietaryType": ["vegetarian"],
      "ingredients": [
        {
          "name": "mixed berries (frozen)",
          "amount": 150,
          "unit": "g"
        },
        {
          "name": "banana",
          "amount": 1,
          "unit": "medium"
        },
        {
          "name": "Greek yogurt (low-fat)",
          "amount": 100,
          "unit": "g"
        },
        {
          "name": "flaxseed (ground)",
          "amount": 1,
          "unit": "tbsp"
        },
        {
          "name": "chia seeds",
          "amount": 1,
          "unit": "tsp"
        },
        {
          "name": "almond milk (unsweetened)",
          "amount": 200,
          "unit": "ml"
        },
        {
          "name": "honey",
          "amount": 1,
          "unit": "tsp"
        }
      ],
      "instructions": [
        "Place all ingredients in a blender.",
        "Blend until smooth and creamy, about 1 minute.",
        "Pour into a glass and serve immediately."
      ],
      "prepTime": 5,
      "cookTime": 0,
      "totalTime": 5,
      "servings": 1,
      "nutrition": {
        "calories": 210,
        "protein": 8,
        "carbs": 35,
        "fat": 5,
        "fiber": 7
      },
      "heartHealthBenefits": [
        "Rich in antioxidants from berries",
        "Contains omega-3 fatty acids from flaxseed",
        "High in fiber to help lower cholesterol",
        "Low in saturated fat",
        "Contains probiotics from yogurt for gut health"
      ],
      "tags": ["quick", "breakfast", "smoothie", "no-cook"],
      "image": "berry_smoothie.jpg",
      "equipment": []
    },
    {
      "id": "mediterranean-salad-004",
      "name": "Mediterranean Chickpea Salad",
      "category": ["lunch"],
      "dietaryType": ["vegetarian", "vegan"],
      "ingredients": [
        {
          "name": "chickpeas (cooked)",
          "amount": 400,
          "unit": "g"
        },
        {
          "name": "cucumber",
          "amount": 1,
          "unit": "medium"
        },
        {
          "name": "cherry tomatoes",
          "amount": 200,
          "unit": "g"
        },
        {
          "name": "red onion",
          "amount": 0.5,
          "unit": "medium"
        },
        {
          "name": "bell pepper",
          "amount": 1,
          "unit": "medium"
        },
        {
          "name": "kalamata olives",
          "amount": 50,
          "unit": "g"
        },
        {
          "name": "feta cheese (optional)",
          "amount": 50,
          "unit": "g"
        },
        {
          "name": "extra virgin olive oil",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "lemon juice",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "dried oregano",
          "amount": 1,
          "unit": "tsp"
        },
        {
          "name": "fresh parsley",
          "amount": 2,
          "unit": "tbsp"
        }
      ],
      "instructions": [
        "Drain and rinse chickpeas. Place in a large bowl.",
        "Dice cucumber, halve cherry tomatoes, finely slice red onion, and dice bell pepper. Add to the bowl.",
        "Add olives and crumbled feta cheese (if using).",
        "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
        "Pour dressing over salad and toss to combine.",
        "Garnish with fresh parsley and serve."
      ],
      "prepTime": 15,
      "cookTime": 0,
      "totalTime": 15,
      "servings": 4,
      "nutrition": {
        "calories": 320,
        "protein": 12,
        "carbs": 35,
        "fat": 15,
        "fiber": 10
      },
      "heartHealthBenefits": [
        "Rich in plant protein from chickpeas",
        "Contains heart-healthy monounsaturated fats from olive oil",
        "High in fiber to help lower cholesterol",
        "Rich in antioxidants from vegetables",
        "Low in saturated fat (especially if feta is omitted)"
      ],
      "tags": ["mediterranean", "salad", "no-cook", "quick"],
      "image": "mediterranean_salad.jpg",
      "equipment": []
    },
    {
      "id": "slow-cooker-beef-005",
      "name": "Slow-Cooker Braised Beef with Carrots & Turnips",
      "category": ["dinner"],
      "dietaryType": ["meat"],
      "ingredients": [
        {
          "name": "lean beef chuck",
          "amount": 700,
          "unit": "g"
        },
        {
          "name": "carrots",
          "amount": 3,
          "unit": "large"
        },
        {
          "name": "turnips",
          "amount": 2,
          "unit": "medium"
        },
        {
          "name": "onion",
          "amount": 1,
          "unit": "large"
        },
        {
          "name": "garlic",
          "amount": 3,
          "unit": "cloves"
        },
        {
          "name": "low-sodium beef broth",
          "amount": 500,
          "unit": "ml"
        },
        {
          "name": "tomato paste",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "Worcestershire sauce",
          "amount": 1,
          "unit": "tbsp"
        },
        {
          "name": "dried thyme",
          "amount": 1,
          "unit": "tsp"
        },
        {
          "name": "dried rosemary",
          "amount": 1,
          "unit": "tsp"
        },
        {
          "name": "bay leaves",
          "amount": 2,
          "unit": "whole"
        },
        {
          "name": "cornstarch",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "water",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "fresh parsley",
          "amount": 2,
          "unit": "tbsp"
        }
      ],
      "instructions": [
        "Trim excess fat from beef and cut into 5cm chunks. Season with salt and pepper.",
        "Peel and cut carrots and turnips into large chunks.",
        "Place beef, vegetables, garlic, and onion in slow cooker.",
        "In a bowl, mix broth, tomato paste, Worcestershire sauce, thyme, and rosemary. Pour over beef and vegetables.",
        "Add bay leaves. Cover and cook on low for 8 hours or high for 4 hours.",
        "30 minutes before serving, mix cornstarch and water to create a slurry. Stir into the slow cooker.",
        "Cover and cook on high for 30 more minutes until sauce thickens.",
        "Remove bay leaves, garnish with fresh parsley, and serve."
      ],
      "prepTime": 20,
      "cookTime": 240,
      "totalTime": 260,
      "servings": 6,
      "nutrition": {
        "calories": 310,
        "protein": 30,
        "carbs": 20,
        "fat": 12,
        "fiber": 4
      },
      "heartHealthBenefits": [
        "Uses lean cuts of beef",
        "Rich in vegetables for fiber and nutrients",
        "Low in sodium when using low-sodium broth",
        "Slow cooking method requires no added oils",
        "Root vegetables provide potassium for heart health"
      ],
      "tags": ["slow-cooker", "comfort food", "make ahead"],
      "image": "slow_cooker_beef.jpg",
      "equipment": ["slow-cooker"]
    },
    {
      "id": "greek-lamb-006",
      "name": "Greek-Style Roasted Lamb",
      "category": ["dinner"],
      "dietaryType": ["meat"],
      "ingredients": [
        {
          "name": "lamb leg or shoulder",
          "amount": 1.5,
          "unit": "kg"
        },
        {
          "name": "garlic cloves",
          "amount": 6,
          "unit": "cloves"
        },
        {
          "name": "lemon juice",
          "amount": 60,
          "unit": "ml"
        },
        {
          "name": "extra virgin olive oil",
          "amount": 60,
          "unit": "ml"
        },
        {
          "name": "fresh rosemary",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "dried oregano",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "fresh mint leaves",
          "amount": 1/4,
          "unit": "cup"
        },
        {
          "name": "potatoes",
          "amount": 800,
          "unit": "g"
        },
        {
          "name": "red onions",
          "amount": 2,
          "unit": "large"
        },
        {
          "name": "cherry tomatoes",
          "amount": 300,
          "unit": "g"
        },
        {
          "name": "feta cheese",
          "amount": 100,
          "unit": "g"
        }
      ],
      "instructions": [
        "Preheat oven to 160°C (fan-forced).",
        "Make small incisions all over the lamb with a sharp knife.",
        "Crush 4 garlic cloves and mix with 2 tbsp olive oil, half the lemon juice, rosemary, and oregano.",
        "Rub the mixture all over the lamb, pushing some into the incisions. Season with salt and pepper.",
        "Cut potatoes into large chunks and slice onions into wedges. Place in a large roasting pan.",
        "Slice remaining garlic and scatter over vegetables with remaining olive oil. Season with salt and pepper.",
        "Place lamb on top of vegetables and roast for 3 hours for medium doneness, or until internal temperature reaches 65°C.",
        "For the last 30 minutes, add cherry tomatoes to the roasting pan.",
        "Remove from oven, cover with foil and rest for 15-20 minutes.",
        "Sprinkle with crumbled feta cheese and fresh mint before serving.",
        "Drizzle with remaining lemon juice just before serving."
      ],
      "prepTime": 30,
      "cookTime": 180,
      "totalTime": 210,
      "servings": 6,
      "nutrition": {
        "calories": 520,
        "protein": 42,
        "carbs": 25,
        "fat": 28,
        "fiber": 3
      },
      "heartHealthBenefits": [
        "Uses heart-healthy olive oil instead of butter",
        "Includes garlic which may help lower blood pressure",
        "Contains herbs with anti-inflammatory properties",
        "Includes vegetables for additional nutrients",
        "Moderate portion size as a 'cheat day' option"
      ],
      "tags": ["greek", "mediterranean", "cheat day", "weekend"],
      "image": "greek_lamb.jpg",
      "equipment": ["oven"]
    },
    {
      "id": "salmon-bean-salad-007",
      "name": "Salmon and White Bean Salad",
      "category": ["lunch"],
      "dietaryType": ["seafood"],
      "ingredients": [
        {
          "name": "salmon fillets",
          "amount": 400,
          "unit": "g"
        },
        {
          "name": "olive oil",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "lemon juice",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "garlic",
          "amount": 2,
          "unit": "cloves"
        },
        {
          "name": "white beans (cannellini)",
          "amount": 400,
          "unit": "g"
        },
        {
          "name": "red onion",
          "amount": 0.5,
          "unit": "medium"
        },
        {
          "name": "cherry tomatoes",
          "amount": 200,
          "unit": "g"
        },
        {
          "name": "cucumber",
          "amount": 0.5,
          "unit": "medium"
        },
        {
          "name": "fresh dill",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "fresh parsley",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "name": "dijon mustard",
          "amount": 1,
          "unit": "tsp"
        },
        {
          "name": "mixed salad greens",
          "amount": 100,
          "unit": "g"
        }
      ],
      "instructions": [
        "Preheat oven to 200°C. Line a baking sheet with parchment paper.",
        "Place salmon fillets on the baking sheet. Drizzle with 1 tbsp olive oil and season with salt and pepper.",
        "Bake for 12-15 minutes until salmon flakes easily with a fork. Let cool slightly, then flake into large pieces.",
        "In a large bowl, whisk together remaining olive oil, lemon juice, minced garlic, and Dijon mustard.",
        "Drain and rinse white beans. Add to the bowl with dressing.",
        "Halve cherry tomatoes, dice cucumber, and thinly slice red onion. Add to the bowl.",
        "Add chopped dill and parsley. Toss gently to combine.",
        "Arrange mixed greens on plates or a serving platter. Top with bean mixture.",
        "Arrange salmon pieces on top of the salad.",
        "Serve immediately or refrigerate for up to 2 hours before serving."
      ],
      "prepTime": 15,
      "cookTime": 15,
      "totalTime": 30,
      "servings": 4,
      "nutrition": {
        "calories": 350,
        "protein": 28,
        "carbs": 25,
        "fat": 15,
        "fiber": 7
      },
      "heartHealthBenefits": [
        "Rich in omega-3 fatty acids from salmon",
        "High in fiber from beans and vegetables",
        "Contains heart-healthy monounsaturated fats from olive oil",
        "Low in saturated fat",
        "Provides plant protein from beans"
      ],
      "tags": ["seafood", "salad", "quick", "high-protein"],
      "image": "salmon_bean_salad.jpg",
      "equipment": ["oven"]
    }
  ]
};

// Helper functions for filtering recipes
export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipeDatabase.recipes.filter(recipe => recipe.category.includes(category));
};

export const getRecipesByDietaryType = (dietaryType: string): Recipe[] => {
  return recipeDatabase.recipes.filter(recipe => recipe.dietaryType.includes(dietaryType));
};

export const getRecipesByEquipment = (equipment: string): Recipe[] => {
  return recipeDatabase.recipes.filter(recipe => recipe.equipment.includes(equipment));
};

export const getRecipesByTimeRange = (maxTime: number): Recipe[] => {
  return recipeDatabase.recipes.filter(recipe => recipe.totalTime <= maxTime);
};

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipeDatabase.recipes.find(recipe => recipe.id === id);
};

// Time categories
export const getQuickRecipes = (): Recipe[] => {
  return recipeDatabase.recipes.filter(recipe => recipe.totalTime <= 30);
};

export const getMediumTimeRecipes = (): Recipe[] => {
  return recipeDatabase.recipes.filter(recipe => recipe.totalTime > 30 && recipe.totalTime <= 60);
};

export const getLongTimeRecipes = (): Recipe[] => {
  return recipeDatabase.recipes.filter(recipe => recipe.totalTime > 60);
};

// Generate a weekly meal plan based on filters
export interface MealPlanDay {
  day: string;
  breakfast?: Recipe;
  lunch?: Recipe;
  dinner: Recipe;
}

export interface WeeklyMealPlan {
  days: MealPlanDay[];
}

export const generateWeeklyMealPlan = (
  categories: string[] = [],
  dietaryTypes: string[] = [],
  equipment: string[] = [],
  maxTime: number = 1000,
  includeBreakfast: boolean = true,
  includeLunch: boolean = true
): WeeklyMealPlan => {
  // Filter recipes based on criteria
  let filteredRecipes = recipeDatabase.recipes;
  
  if (categories.length > 0) {
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.category.some(cat => categories.includes(cat))
    );
  }
  
  if (dietaryTypes.length > 0) {
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.dietaryType.some(type => dietaryTypes.includes(type))
    );
  }
  
  if (equipment.length > 0) {
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.equipment.some(equip => equipment.includes(equip))
    );
  }
  
  if (maxTime < 1000) {
    filteredRecipes = filteredRecipes.filter(recipe => recipe.totalTime <= maxTime);
  }
  
  // Separate recipes by category
  const breakfastRecipes = filteredRecipes.filter(recipe => recipe.category.includes('breakfast'));
  const lunchRecipes = filteredRecipes.filter(recipe => recipe.category.includes('lunch'));
  const dinnerRecipes = filteredRecipes.filter(recipe => recipe.category.includes('dinner'));
  
  // Create weekly meal plan
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const mealPlan: MealPlanDay[] = [];
  
  for (let i = 0; i < 7; i++) {
    const day = days[i];
    const mealPlanDay: MealPlanDay = { day, dinner: getRandomRecipe(dinnerRecipes) };
    
    if (includeBreakfast && breakfastRecipes.length > 0) {
      mealPlanDay.breakfast = getRandomRecipe(breakfastRecipes);
    }
    
    if (includeLunch && lunchRecipes.length > 0) {
      mealPlanDay.lunch = getRandomRecipe(lunchRecipes);
    }
    
    mealPlan.push(mealPlanDay);
  }
  
  return { days: mealPlan };
};

// Helper function to get a random recipe from an array
const getRandomRecipe = (recipes: Recipe[]): Recipe => {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
};

// Generate shopping list from meal plan
export interface ShoppingListItem {
  name: string;
  amount: number;
  unit: string;
}

export interface ShoppingListCategory {
  category: string;
  items: ShoppingListItem[];
}

export interface ShoppingList {
  categories: ShoppingListCategory[];
}

export const generateShoppingList = (mealPlan: WeeklyMealPlan, servings: number = 1): ShoppingList => {
  const ingredientMap = new Map<string, ShoppingListItem>();
  
  // Collect all ingredients from the meal plan
  mealPlan.days.forEach(day => {
    [day.breakfast, day.lunch, day.dinner].forEach(meal => {
      if (meal) {
        meal.ingredients.forEach(ingredient => {
          const key = `${ingredient.name}-${ingredient.unit}`;
          if (ingredientMap.has(key)) {
            const existingItem = ingredientMap.get(key)!;
            existingItem.amount += ingredient.amount * (servings / meal.servings);
          } else {
            ingredientMap.set(key, {
              name: ingredient.name,
              amount: ingredient.amount * (servings / meal.servings),
              unit: ingredient.unit
            });
          }
        });
      }
    });
  });
  
  // Categorize ingredients
  const categories: { [key: string]: ShoppingListItem[] } = {
    'Produce': [],
    'Proteins': [],
    'Dairy': [],
    'Grains': [],
    'Canned Goods': [],
    'Herbs & Spices': [],
    'Oils & Condiments': [],
    'Other': []
  };
  
  // Categorization logic
  const produceItems = ['apple', 'banana', 'berry', 'berries', 'carrot', 'celery', 'cucumber', 'garlic', 'ginger', 'lemon', 'lime', 'onion', 'potato', 'tomato', 'lettuce', 'spinach', 'kale', 'pepper', 'zucchini', 'squash', 'pumpkin', 'broccoli', 'cauliflower', 'mushroom', 'avocado', 'bok choy', 'turnip'];
  const proteinItems = ['beef', 'chicken', 'pork', 'lamb', 'turkey', 'fish', 'salmon', 'tuna', 'shrimp', 'tofu', 'tempeh', 'seitan'];
  const dairyItems = ['milk', 'yogurt', 'cheese', 'cream', 'butter', 'feta', 'greek yogurt'];
  const grainItems = ['rice', 'pasta', 'bread', 'flour', 'oat', 'quinoa', 'barley', 'couscous'];
  const cannedItems = ['bean', 'chickpea', 'tomato paste', 'broth', 'stock', 'canned'];
  const herbItems = ['basil', 'oregano', 'thyme', 'rosemary', 'parsley', 'cilantro', 'mint', 'dill', 'bay leaf', 'cinnamon', 'nutmeg', 'paprika', 'cumin', 'coriander', 'salt', 'pepper'];
  const oilItems = ['oil', 'vinegar', 'sauce', 'mustard', 'mayonnaise', 'ketchup', 'honey', 'maple syrup', 'soy sauce'];
  
  ingredientMap.forEach((item) => {
    if (produceItems.some(keyword => item.name.toLowerCase().includes(keyword))) {
      categories['Produce'].push(item);
    } else if (proteinItems.some(keyword => item.name.toLowerCase().includes(keyword))) {
      categories['Proteins'].push(item);
    } else if (dairyItems.some(keyword => item.name.toLowerCase().includes(keyword))) {
      categories['Dairy'].push(item);
    } else if (grainItems.some(keyword => item.name.toLowerCase().includes(keyword))) {
      categories['Grains'].push(item);
    } else if (cannedItems.some(keyword => item.name.toLowerCase().includes(keyword))) {
      categories['Canned Goods'].push(item);
    } else if (herbItems.some(keyword => item.name.toLowerCase().includes(keyword))) {
      categories['Herbs & Spices'].push(item);
    } else if (oilItems.some(keyword => item.name.toLowerCase().includes(keyword))) {
      categories['Oils & Condiments'].push(item);
    } else {
      categories['Other'].push(item);
    }
  });
  
  // Convert to shopping list format
  const shoppingList: ShoppingList = {
    categories: Object.entries(categories)
      .filter(([, items]) => items.length > 0)
      .map(([category, items]) => ({
        category,
        items: items.sort((a, b) => a.name.localeCompare(b.name))
      }))
  };
  
  return shoppingList;
};
