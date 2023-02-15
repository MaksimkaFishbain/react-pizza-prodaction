import React, {useEffect, useState} from 'react';

const FilterPanel = ({ pizzas, setPizzas, jsonPizzas }) => {
    console.log(pizzas)

    const filterByFiller = (filler) => {
        return setPizzas(jsonPizzas.filter(item => item.category === filler))
    }
    // console.log(filterByFiller("meat"), "\n")
    console.log(pizzas)
    return (
        <div className="manipulation-block">
            <div className="filter filler">
                <div className="filter-title">Фильтр</div>
                <ul className="filter-content" id="fst-filter">
                    <li onClick={() => {
                        setPizzas(jsonPizzas.slice(0,12))
                    }}>
                        <input type="radio" id="item1" name="item"/>
                        <label htmlFor="item1">Все</label>
                    </li>
                    <li onClick={() => {
                        filterByFiller("meat")
                    }}>
                        <input type="radio" id="item2" name="item"/>
                        <label htmlFor="item2">Мясные</label>
                    </li>
                    <li onClick={() => {
                        filterByFiller("vegan")
                    }}>
                        <input type="radio" id="item3" name="item"/>
                        <label htmlFor="item3">Вегетерианская</label>
                    </li>
                </ul>
            </div>
            <div className="filter price">
                <div className="filter-title">Ценовой диапазон</div>
                <div className="filter-content">

                </div>
            </div>
            <div className="filter abstract">
                <div className="filter-title">Сортировка по</div>
                <ul className="filter-content" id="sec-filter">
                    <li>
                        <input type="radio" id="elem3" name="elem"/>
                        <label htmlFor="elem3">Цене</label>
                    </li>
                    <li>
                        <input type="radio" id="elem1" name="elem"/>
                        <label htmlFor="elem1">Названию</label>
                    </li>
                    <li>
                        <input type="radio" id="elem2" name="elem"/>
                        <label htmlFor="elem2">Популярности</label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterPanel;