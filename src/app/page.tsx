'use client';

import { useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import SelectionCriteria from './components/SelectionCriteria';
import FilterSection from './components/FilterSection';
import TimeFilter from './components/TimeFilter';
import ServingSize from './components/ServingSize';
import WeeklyMealPlan from './components/WeeklyMealPlan';
import Recipe from './components/Recipe';
import ShoppingList from './components/ShoppingList';
import { 
  recipeDatabase, 
  Recipe as RecipeType,
  generateWeeklyMealPlan, 
  generateShoppingList,
  WeeklyMealPlan as WeeklyMealPlanType,
  ShoppingList as ShoppingListType
} from './data/recipes';

interface ShoppingItem {
  name: string;
  quantity: string;
  category: string;
}

export default function Home() {
  // State for filters
  const [mealTypes, setMealTypes] = useState<string[]>(['breakfast', 'lunch', 'dinner']);
  const [dietaryTypes, setDietaryTypes] = useState<string[]>([]);
  const [equipmentTypes, setEquipmentTypes] = useState<string[]>([]);
  const [maxPrepTime, setMaxPrepTime] = useState<number>(60);
  const [servings, setServings] = useState<number>(2);
  
  // State for meal plan generation
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [mealPlan, setMealPlan] = useState<WeeklyMealPlanType | null>(null);
  const [shoppingList, setShoppingList] = useState<ShoppingListType | null>(null);
  
  // State for UI visibility
  const [showMealPlan, setShowMealPlan] = useState<boolean>(false);
  const [showShoppingList, setShowShoppingList] = useState<boolean>(false);
  const [showRecipe, setShowRecipe] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | null>(null);
  
  // Filter options
  const mealTypeOptions = [
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'lunch', label: 'Lunch' },
    { id: 'dinner', label: 'Dinner' }
  ];
  
  const dietaryTypeOptions = [
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'meat', label: 'Meat' },
    { id: 'poultry', label: 'Poultry' },
    { id: 'seafood', label: 'Seafood' }
  ];
  
  const equipmentOptions = [
    { id: 'stovetop', label: 'Stovetop' },
    { id: 'oven', label: 'Oven' },
    { id: 'slow-cooker', label: 'Slow Cooker' },
    { id: 'air-fryer', label: 'Air Fryer' }
  ];
  
  // Handle filter changes
  const handleMealTypeChange = (id: string) => {
    setMealTypes(prev => {
      if (prev.includes(id)) {
        return prev.filter(type => type !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  const handleDietaryTypeChange = (id: string) => {
    setDietaryTypes(prev => {
      if (prev.includes(id)) {
        return prev.filter(type => type !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  const handleEquipmentChange = (id: string) => {
    setEquipmentTypes(prev => {
      if (prev.includes(id)) {
        return prev.filter(type => type !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  // Generate meal plan
  const handleGenerateMealPlan = () => {
    setIsGenerating(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const includeBreakfast = mealTypes.includes('breakfast');
      const includeLunch = mealTypes.includes('lunch');
      
      const generatedMealPlan = generateWeeklyMealPlan(
        mealTypes,
        dietaryTypes,
        equipmentTypes,
        maxPrepTime,
        includeBreakfast,
        includeLunch
      );
      
      setMealPlan(generatedMealPlan);
      
      // Generate shopping list based on meal plan
      const generatedShoppingList = generateShoppingList(generatedMealPlan, servings);
      setShoppingList(generatedShoppingList);
      
      setShowMealPlan(true);
      setShowShoppingList(true);
      setIsGenerating(false);
      
      // Scroll to meal plan
      setTimeout(() => {
        const mealPlanElement = document.getElementById('meal-plan');
        if (mealPlanElement) {
          mealPlanElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }, 1500); // Simulate loading time
  };
  
  // Handle recipe view
  const handleViewRecipe = (recipeId: string) => {
    const recipe = recipeDatabase.recipes.find(r => r.id === recipeId);
    if (recipe) {
      setSelectedRecipe(recipe);
      setShowRecipe(true);
    }
  };
  
  // Format meal plan for UI component
  const formatMealPlanForUI = () => {
    if (!mealPlan) return [];
    
    return mealPlan.days.map(day => {
      const meals = [];
      
      if (day.breakfast) {
        meals.push({
          id: `${day.day}-breakfast`,
          name: 'Breakfast',
          recipe: day.breakfast.id,
          time: `${day.breakfast.totalTime} min`
        });
      }
      
      if (day.lunch) {
        meals.push({
          id: `${day.day}-lunch`,
          name: 'Lunch',
          recipe: day.lunch.id,
          time: `${day.lunch.totalTime} min`
        });
      }
      
      if (day.dinner) {
        meals.push({
          id: `${day.day}-dinner`,
          name: 'Dinner',
          recipe: day.dinner.id,
          time: `${day.dinner.totalTime} min`
        });
      }
      
      return {
        day: day.day,
        meals
      };
    });
  };
  
  // Format shopping list for UI component
  const formatShoppingListForUI = () => {
    if (!shoppingList) return [];
    
    const formattedItems: ShoppingItem[] = [];
    
    shoppingList.categories.forEach(category => {
      category.items.forEach(item => {
        formattedItems.push({
          name: item.name,
          quantity: `${item.amount.toFixed(1)} ${item.unit}`,
          category: category.category
        });
      });
    });
    
    return formattedItems;
  };
  
  return (
    <div className="notion-container">
      <Header 
        title="Heart-Healthy Meal Planner" 
        subtitle="Create a personalized meal plan to support your heart health"
      />
      
      <Introduction />
      
      <SelectionCriteria onGenerate={handleGenerateMealPlan} isGenerating={isGenerating}>
        <FilterSection 
          title="Meal Types" 
          options={mealTypeOptions} 
          selectedOptions={mealTypes} 
          onChange={handleMealTypeChange} 
        />
        
        <FilterSection 
          title="Dietary Preferences" 
          options={dietaryTypeOptions} 
          selectedOptions={dietaryTypes} 
          onChange={handleDietaryTypeChange} 
        />
        
        <FilterSection 
          title="Cooking Equipment" 
          options={equipmentOptions} 
          selectedOptions={equipmentTypes} 
          onChange={handleEquipmentChange} 
        />
        
        <TimeFilter 
          minTime={5} 
          maxTime={240} 
          currentTime={maxPrepTime} 
          onChange={setMaxPrepTime} 
        />
        
        <ServingSize 
          servings={servings} 
          onChange={setServings} 
        />
      </SelectionCriteria>
      
      <div id="meal-plan">
        <WeeklyMealPlan 
          mealPlan={formatMealPlanForUI()} 
          onViewRecipe={handleViewRecipe} 
          isVisible={showMealPlan} 
        />
      </div>
      
      <ShoppingList 
        items={formatShoppingListForUI()} 
        isVisible={showShoppingList} 
      />
      
      {selectedRecipe && (
        <Recipe 
          title={selectedRecipe.name}
          ingredients={selectedRecipe.ingredients.map(ing => `${ing.amount} ${ing.unit} ${ing.name}`)}
          instructions={selectedRecipe.instructions}
          prepTime={selectedRecipe.prepTime}
          cookTime={selectedRecipe.cookTime}
          servings={selectedRecipe.servings}
          nutrition={selectedRecipe.nutrition}
          isVisible={showRecipe}
          onClose={() => setShowRecipe(false)}
        />
      )}
    </div>
  );
}
