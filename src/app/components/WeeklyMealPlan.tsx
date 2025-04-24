import React from 'react';

interface MealType {
  id: string;
  name: string;
  recipe: string;
  time?: string;
}

interface DayPlan {
  day: string;
  meals: MealType[];
}

interface WeeklyMealPlanProps {
  mealPlan: DayPlan[];
  onViewRecipe: (recipe: string) => void;
  isVisible: boolean;
}

const WeeklyMealPlan: React.FC<WeeklyMealPlanProps> = ({
  mealPlan,
  onViewRecipe,
  isVisible
}) => {
  if (!isVisible) return null;
  
  return (
    <section className="notion-card fade-in mt-8">
      <h2 className="notion-subheading text-primary-600">Your Weekly Meal Plan</h2>
      <p className="notion-text mb-6">
        Here&apos;s your personalized heart-healthy meal plan for the week. Click on any recipe to view detailed
        instructions and nutritional information.
      </p>
      
      <div className="space-y-4">
        {mealPlan.map((day) => (
          <div key={day.day} className="meal-plan-day">
            <div className="meal-plan-day-header">
              <h3 className="meal-plan-day-title">{day.day}</h3>
            </div>
            <div className="space-y-3">
              {day.meals.map((meal) => (
                <div key={meal.id} className="meal-plan-meal">
                  <h4 className="meal-plan-meal-title">{meal.name}</h4>
                  <div className="meal-plan-meal-recipe">
                    <span>{meal.recipe}</span>
                    <div className="flex items-center">
                      {meal.time && (
                        <span className="text-sm text-neutral-500 mr-3">{meal.time}</span>
                      )}
                      <button 
                        className="text-sm text-secondary-600 hover:text-secondary-700"
                        onClick={() => onViewRecipe(meal.recipe)}
                      >
                        View Recipe
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-between">
        <button className="notion-button-outline">
          Regenerate Plan
        </button>
        <button className="notion-button-secondary">
          Save as Favorite
        </button>
      </div>
    </section>
  );
};

export default WeeklyMealPlan;
