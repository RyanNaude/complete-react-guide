/** Import Custom Components */
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
/** Import Custom Stylesheet */
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Button Click");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenses={props.expenses} />
      <div className="expense-item__description">
        <h2>{props.expenses.title}</h2>
        <div className="expense-item__price">$ {props.expenses.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
