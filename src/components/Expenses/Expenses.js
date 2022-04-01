/** Import Custom Components */
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
/** Import Custom Stylesheet */
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenseArray.map((expenseItem, index) => {
        return <ExpenseItem expenses={expenseItem} key={index} />;
      })}
    </Card>
  );
};

export default Expenses;
