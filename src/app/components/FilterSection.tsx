import React from 'react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedOptions: string[];
  onChange: (id: string) => void;
  type?: 'checkbox' | 'radio';
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedOptions,
  onChange,
  type = 'checkbox'
}) => {
  return (
    <div className="filter-section">
      <h3 className="filter-section-title">{title}</h3>
      <div className="filter-options">
        {options.map((option) => (
          <div key={option.id} className="filter-option">
            <input
              type={type}
              id={option.id}
              name={type === 'radio' ? title.toLowerCase().replace(/\s+/g, '-') : option.id}
              className={type === 'checkbox' ? 'notion-checkbox' : 'notion-radio'}
              checked={selectedOptions.includes(option.id)}
              onChange={() => onChange(option.id)}
            />
            <label htmlFor={option.id} className="filter-option-label">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
