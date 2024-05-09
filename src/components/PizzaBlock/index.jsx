import React, { useState } from 'react';

function PizzaBlock({ item }) {
    const { category, description, image, price, rating, size, title, _id } = item;
    const [activeSize, setActiveSize] = useState(30); 
    const [activeType, setActiveType] = useState('традиционное'); 

    const handleSizeChange = (newSize) => {
        setActiveSize(newSize);
    };

    const handleTypeChange = (newType) => {
        setActiveType(newType);
    };

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={`https://react-pizza-v2-psi.vercel.app/assets/img/products/${image}`}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    <li className={activeType === 'тонкое' ? 'active' : ''} onClick={() => handleTypeChange('тонкое')}>тонкое</li>
                    <li className={activeType === 'традиционное' ? 'active' : ''} onClick={() => handleTypeChange('традиционное')}>традиционное</li>
                </ul>
                <ul>
                    <li className={activeSize === 26 ? 'active' : ''} onClick={() => handleSizeChange(26)}>26 см.</li>
                    <li className={activeSize === 30 ? 'active' : ''} onClick={() => handleSizeChange(30)}>30 см.</li>
                    <li className={activeSize === 40 ? 'active' : ''} onClick={() => handleSizeChange(40)}>40 см.</li>
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    );
}

export default PizzaBlock;
