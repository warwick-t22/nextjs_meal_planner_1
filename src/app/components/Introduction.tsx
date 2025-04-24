import React from 'react';

interface IntroductionProps {
  title?: string;
}

const Introduction: React.FC<IntroductionProps> = ({ 
  title = "Heart-Healthy Meal Planner"
}) => {
  return (
    <section className="notion-card fade-in">
      <h2 className="notion-subheading text-primary-600">{title}</h2>
      <p className="notion-text">
        This meal planner is designed specifically to address high cholesterol and arterial calcification concerns 
        while fitting into a busy lifestyle. It incorporates Mediterranean, Eastern European, and Asian cuisines, 
        and makes use of time-saving equipment like a slow cooker and air fryer.
      </p>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium text-neutral-700 mb-3">Health Benefits</h3>
        <p className="notion-text">
          The recipes in this meal plan include foods that are scientifically proven to help:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600 mb-4">
          <li>Lower LDL (bad) cholesterol levels</li>
          <li>Reduce inflammation in arteries</li>
          <li>Improve arterial function</li>
          <li>Provide essential nutrients for heart health</li>
          <li>Support overall cardiovascular wellness</li>
        </ul>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium text-neutral-700 mb-3">How It Works</h3>
        <p className="notion-text">
          Use the selection criteria below to customize your meal plan based on your preferences.
          Once you&apos;ve made your selections, click the &ldquo;Generate Meal Plan&rdquo; button to create a
          personalized weekly plan with heart-healthy recipes.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
