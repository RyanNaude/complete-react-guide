import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredData, setEnteredData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    //Deviate from joHAN's coding
    switch (event.target.id) {
      case "title":
        setEnteredData((prevstate) => {
          return { ...prevstate, title: event.target.value };
        });
        break;

      case "amount":
        setEnteredData((prevstate) => {
          return { ...prevstate, amount: event.target.value };
        });
        break;

      case "date":
        setEnteredData((prevstate) => {
          return { ...prevstate, date: event.target.value };
        });
        break;

      default:
        console.log("Invalid input: " + event.target);
        break;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredData.title,
      amount: enteredData.amount,
      date: new Date(enteredData.date),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredData({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            id="title"
            value={enteredData.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={titleChangeHandler}
            id="amount"
            value={enteredData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019/01/01"
            max="2022/12/31"
            onChange={titleChangeHandler}
            id="date"
            value={enteredData.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
