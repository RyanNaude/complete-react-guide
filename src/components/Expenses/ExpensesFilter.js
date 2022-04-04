import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearSelection = ["2022", "2021", "2020", "2019"];

  const dropdownChangeHandler = (event) => {
    props.onYearChangeHandler(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} >
          {yearSelection.map((year) => {
            return (
              <option value={year} key={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
