import React from 'react';

interface TimeFilterProps {
  minTime: number;
  maxTime: number;
  currentTime: number;
  onChange: (time: number) => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({
  minTime,
  maxTime,
  currentTime,
  onChange
}) => {
  return (
    <div className="filter-section">
      <h3 className="filter-section-title">Maximum Preparation Time</h3>
      <div className="mt-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-neutral-500">{minTime} min</span>
          <span className="text-xs text-neutral-500">{currentTime} min</span>
          <span className="text-xs text-neutral-500">{maxTime} min</span>
        </div>
        <input
          type="range"
          min={minTime}
          max={maxTime}
          value={currentTime}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #38bc74 0%, #38bc74 ${((currentTime - minTime) / (maxTime - minTime)) * 100}%, #e5e7eb ${((currentTime - minTime) / (maxTime - minTime)) * 100}%, #e5e7eb 100%)`
          }}
        />
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <button 
            className="text-xs text-neutral-600 hover:text-primary-600"
            onClick={() => onChange(15)}
          >
            Quick (15 min)
          </button>
          <button 
            className="text-xs text-neutral-600 hover:text-primary-600"
            onClick={() => onChange(30)}
          >
            Medium (30 min)
          </button>
          <button 
            className="text-xs text-neutral-600 hover:text-primary-600"
            onClick={() => onChange(60)}
          >
            Slow (60 min)
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeFilter;
