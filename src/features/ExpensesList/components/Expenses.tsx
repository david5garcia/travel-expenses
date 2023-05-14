import { SubmittedExpense } from "../../ExpenseSubmission/components/ExpenseSubmission";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.scss";

export const Expenses = ( props : {submittedExpenses: SubmittedExpense[]}) => {
  return (
    <div className="expenses">
      {props.submittedExpenses.length ? (
        props.submittedExpenses.map((expenseItem: SubmittedExpense) => (
          <ExpenseItem expenseItem={expenseItem} />
        ))
      ) : (
        <p>No expenses added.</p>
      )}
    </div>
  );
};
