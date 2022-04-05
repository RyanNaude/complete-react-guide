import react, { useState } from "react";
/** Import Custom Components */
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
/** Import Custom Stylesheet */
import "./Expenses.css";

const Expenses = (props) => {
  const [pickYear, setPickYear] = useState("2022");

  const onYearChangeHandler = (event) => {
    setPickYear(event);
  };

  const filteredExpenses = props.expenseArray.filter((expense) => {
    return expense.date.getFullYear().toString() === pickYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          pickYear={pickYear}
          onYearChangeHandler={onYearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
