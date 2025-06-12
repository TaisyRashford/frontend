import React from 'react';

interface FoodItemProps {
    name: string;
    calories: number;
    description: string;
}

const FoodItem: React.FC<FoodItemProps> = ({ name, calories, description }) => {
    return (
        <div className="food-item">
            <h2>{name}</h2>
            <p>Calories: {calories}</p>
            <p>{description}</p>
        </div>
    );
};

export default FoodItem;