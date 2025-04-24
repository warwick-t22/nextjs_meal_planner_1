import React from 'react';

interface ServingSizeProps {
  servings: number;
  onChange: (size: number) => void;
}

const ServingSize: React.FC<ServingSizeProps> = ({
  servings,
  onChange
}) => {
  return (
    <div className="filter-section">
      <h3 className="filter-section-title">Serving Size</h3>
      <div className="mt-2">
        <select
          value={servings}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="notion-select"
        >
          <option value={1}>1 person</option>
          <option value={2}>2 people</option>
          <option value={3}>3 people</option>
          <option value={4}>4 people</option>
          <option value={5}>5 people</option>
          <option value={6}>6 people</option>
        </select>
      </div>
    </div>
  );
};

export default ServingSize;
