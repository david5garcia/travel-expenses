import { Expenses } from "./features/ExpensesList/components/Expenses";
import {
  ExpenseSubmission,
  SubmittedExpense,
} from "./features/ExpenseSubmission/components/ExpenseSubmission";
import { useEffect, useState } from "react";
import {useSubmittedExpenses} from "./hooks/useSubmittedExpenses";

const App = () => {
  const {submittedExpenses, setSubmittedExpenses} = useSubmittedExpenses();

  const handleSubmittedExpense = (submittedExpense: SubmittedExpense) => {
    setSubmittedExpenses((submittedExpenses) => {
      const allSubmittedExpenses = submittedExpenses
        ? [submittedExpense, ...submittedExpenses]
        : [submittedExpense];
      localStorage.setItem(
        "submittedExpenses",
        JSON.stringify(allSubmittedExpenses)
      );
      return allSubmittedExpenses;
    });
  };

  return (
    <>
      <ExpenseSubmission onSubmittedExpense={handleSubmittedExpense} />
      <Expenses submittedExpenses={submittedExpenses} />
    </>
  );
};

export default App;
