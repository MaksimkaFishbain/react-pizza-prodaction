import React, {useContext, useRef} from 'react';
import {Slider} from "@mui/material";
import ThemeContext from "../../context";
// import {Slider} from "@mui/material";

const FilterPanel = () => {
    const [value, setValue] = React.useState([20, 37]);

    const {pizzas, setPizzas, jsonPizzas} = useContext(ThemeContext)

    const handleChange = (event, newValue) => {
        setValue(newValue)
        setPizzas(filterByFiller("all", "meat", "vegan").filter(i => i.price >= value[0] && i.price <= value[1]))
    }

    const filterByFiller = (filler) => {
        if (filler === "all") return jsonPizzas.slice(0,12)
        return jsonPizzas.filter(item => item.category === filler)
    }

    const sortByAbstract = (field) => {
        return setPizzas(field === 'popularity' ? [...pizzas].sort((a, b) => a[field] < b[field] ? 1 : -1) :
            [...pizzas].sort((a, b) => a[field] < b[field] ? -1 : 1))
    }

    return (
        <div className="manipulation-block">
            <div className="filter filler">
                <h1 className="filter-title">Фильтр</h1>
                <ul className="filter-content" id="fst-filter">
                    <li onClick={() => {
                        setPizzas(filterByFiller("all"))
                    }}>
                        <input type="radio" id="item1" name="item"/>
                        <label htmlFor="item1">Все</label>
                    </li>
                    <li onClick={() => {

                        setPizzas(filterByFiller("meat"))
                    }}>
                        <input type="radio" id="item2" name="item"/>
                        <label htmlFor="item2">Мясные</label>
                    </li>
                    <li onClick={() => {

                        setPizzas(filterByFiller("vegan"))
                    }}>
                        <input type="radio" id="item3" name="item"/>
                        <label htmlFor="item3">Вегетерианская</label>
                    </li>
                </ul>
            </div>
            <div className="filter price">
                <h1 className="filter-title">Ценовой диапазон</h1>
                <div className="filter-content">
                    {/*<div className="left-input">*/}
                    {/*    <span>От</span>*/}
                    {/*    <div className="input"><input type="number" value={value[0]} onChange={e => setValue(e.target.value)} maxLength="3" min="0" /></div>*/}
                    {/*</div>*/}
                    {/*<div className="right-input">*/}
                    {/*    <span>До</span>*/}
                    {/*    <div className="input"><input type="number" value={value[1]} onChange={e => setValue(e.target.value)} maxLength="2" min="0" /></div>*/}
                    {/*</div>*/}
                    <Slider
                        min={10}
                        max={50}
                        size={'small'}
                        style={{ color: "#611E2A", width: "70%" }}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        //getAriaValueText={valuetext}
                    />
                </div>
            </div>
            <div className="filter abstract">
                <h1 className="filter-title">Сортировка по</h1>
                <ul className="filter-content" id="sec-filter">
                    <li onClick={() => sortByAbstract("price")}>
                        <input type="radio" id="elem3" name="elem"/>
                        <label htmlFor="elem3">Цене</label>
                    </li>
                    <li onClick={() => sortByAbstract("title")}>
                        <input type="radio" id="elem1" name="elem"/>
                        <label htmlFor="elem1">Названию</label>
                    </li>
                    <li onClick={() => sortByAbstract("popularity")}>
                        <input type="radio" id="elem2" name="elem"/>
                        <label htmlFor="elem2">Популярности</label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterPanel;