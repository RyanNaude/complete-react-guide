import React, { useState } from "react";

/** Import Custom Components */
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
/** Import Custom Stylesheet */
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate expenses={props.expenses} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.expenses.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
