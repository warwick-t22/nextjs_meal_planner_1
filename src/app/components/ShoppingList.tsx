import React from 'react';

interface ShoppingItem {
  name: string;
  quantity: string;
  category: string;
}

interface ShoppingListProps {
  items: ShoppingItem[];
  isVisible: boolean;
}

const ShoppingList: React.FC<ShoppingListProps> = ({
  items,
  isVisible
}) => {
  if (!isVisible) return null;
  
  // Group items by category
  const groupedItems: Record<string, ShoppingItem[]> = {};
  items.forEach(item => {
    if (!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
  });
  
  return (
    <section className="notion-card fade-in mt-8">
      <h2 className="notion-subheading text-primary-600">Shopping List</h2>
      <p className="notion-text mb-6">
        Here&apos;s everything you&apos;ll need for your weekly meal plan. Items are organized by category
        to make your shopping trip more efficient.
      </p>
      
      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category} className="shopping-list-category">
            <h3 className="shopping-list-category-title">{category}</h3>
            <div className="mt-2">
              {categoryItems.map((item, index) => (
                <div key={index} className="shopping-list-item">
                  <input type="checkbox" className="notion-checkbox" id={`item-${category}-${index}`} />
                  <label htmlFor={`item-${category}-${index}`} className="shopping-list-item-name">
                    {item.name}
                  </label>
                  <span className="shopping-list-item-quantity">{item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-between">
        <button className="notion-button-outline">
          Print Shopping List
        </button>
        <button className="notion-button-secondary">
          Email Shopping List
        </button>
      </div>
    </section>
  );
};

export default ShoppingList;
