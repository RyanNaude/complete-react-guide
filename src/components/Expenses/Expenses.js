import react, {useState} from "react";
/** Import Custom Components */
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
/** Import Custom Stylesheet */
import "./Expenses.css";

const Expenses = (props) => {
  const[pickYear, setPickYear] = useState("2020");

  const onYearChangeHandler = (event) => {
    setPickYear(event);
  };

  return (
    <div>
      <ExpensesFilter pickYear={pickYear} onYearChangeHandler={onYearChangeHandler}/>
      <Card className="expenses">
        {props.expenseArray.map((expenseItem, index) => {
          return <ExpenseItem expenses={expenseItem} key={index} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
