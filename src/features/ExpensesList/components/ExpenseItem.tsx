import { SubmittedExpense } from "../../ExpenseSubmission/components/ExpenseSubmission";
import "./ExpenseItem.scss";

export const ExpenseItem = (props: { expenseItem: SubmittedExpense }) => {
  const date = new Date(props.expenseItem.date);
  return (
    <div className="flex justify-around rounded-md max-w-md text-white py-4 px-4 transition-all hover:translate-y-0.5 cursor-pointer shadow-md">
      <p>{`${date.toLocaleDateString("pt-PT")}`}</p>
      <p className="flex-grow flex justify-center">{props.expenseItem.name}</p>
      <p>
        {props.expenseItem.price.toLocaleString(navigator.language, {
          style: "currency",
          currency: "EUR",
        })}
      </p>
    </div>
  );
};
