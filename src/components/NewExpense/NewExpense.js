import react, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [displayNewExpense, setDisplayNewExpense] = useState(false);

  const handleNewExpenseChange = () => {
    setDisplayNewExpense(!displayNewExpense);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayNewExpense(!displayNewExpense);
  };
  return (
    <div className="new-expense">
      {!displayNewExpense ? (
        <button onClick={handleNewExpenseChange} type="submit">
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          setDisplayNewExpense={setDisplayNewExpense}
          displayNewExpense={displayNewExpense}
          handleNewExpenseChange={handleNewExpenseChange}
        />
      )}
    </div>
  );
};

export default NewExpense;
