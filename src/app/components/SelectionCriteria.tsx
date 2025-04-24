import React from 'react';

interface SelectionCriteriaProps {
  children: React.ReactNode;
  onGenerate: () => void;
  isGenerating?: boolean;
}

const SelectionCriteria: React.FC<SelectionCriteriaProps> = ({
  children,
  onGenerate,
  isGenerating = false
}) => {
  return (
    <section className="notion-card fade-in">
      <h2 className="notion-subheading text-primary-600">Selection Criteria</h2>
      <p className="notion-text mb-6">
        Customize your meal plan by selecting your preferences below. Your selections will be used to generate
        a personalized heart-healthy meal plan that fits your needs.
      </p>
      
      <div className="space-y-6">
        {children}
      </div>
      
      <div className="mt-8 flex justify-center">
        <button 
          className="notion-button-primary px-6 py-3 text-base flex items-center"
          onClick={onGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating Meal Plan...
            </>
          ) : (
            'Generate Meal Plan'
          )}
        </button>
      </div>
    </section>
  );
};

export default SelectionCriteria;
