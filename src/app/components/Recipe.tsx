import React from 'react';

interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
}

interface RecipeProps {
  title: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  nutrition: NutritionInfo;
  isVisible: boolean;
  onClose: () => void;
}

const Recipe: React.FC<RecipeProps> = ({
  title,
  ingredients,
  instructions,
  prepTime,
  cookTime,
  servings,
  nutrition,
  isVisible,
  onClose
}) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 bg-neutral-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-notion max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="notion-subheading text-primary-600">{title}</h2>
            <button 
              className="text-neutral-500 hover:text-neutral-700"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-wrap text-sm text-neutral-600 mb-6">
            <div className="mr-6">
              <span className="font-medium">Prep:</span> {prepTime} min
            </div>
            <div className="mr-6">
              <span className="font-medium">Cook:</span> {cookTime} min
            </div>
            <div className="mr-6">
              <span className="font-medium">Total:</span> {prepTime + cookTime} min
            </div>
            <div>
              <span className="font-medium">Servings:</span> {servings}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-neutral-700 mb-3">Ingredients</h3>
              <ul className="space-y-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-1.5 mr-2"></span>
                    <span className="text-neutral-600">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-neutral-700 mb-3">Instructions</h3>
              <ol className="space-y-3">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-neutral-600">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-neutral-700 mb-3">Nutrition Information (per serving)</h3>
            <div className="bg-neutral-50 p-4 rounded-notion grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl font-medium text-primary-600">{nutrition.calories}</div>
                <div className="text-sm text-neutral-500">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-medium text-primary-600">{nutrition.protein}g</div>
                <div className="text-sm text-neutral-500">Protein</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-medium text-primary-600">{nutrition.carbs}g</div>
                <div className="text-sm text-neutral-500">Carbs</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-medium text-primary-600">{nutrition.fat}g</div>
                <div className="text-sm text-neutral-500">Fat</div>
              </div>
              {nutrition.fiber && (
                <div className="text-center col-span-4">
                  <div className="text-xl font-medium text-primary-600">{nutrition.fiber}g</div>
                  <div className="text-sm text-neutral-500">Fiber</div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button 
              className="notion-button-outline mr-3"
              onClick={onClose}
            >
              Close
            </button>
            <button className="notion-button-secondary">
              Print Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
