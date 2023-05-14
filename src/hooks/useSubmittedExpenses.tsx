import React, { useEffect, useState } from "react";
import { SubmittedExpense } from "../features/ExpenseSubmission/components/ExpenseSubmission";

export const useSubmittedExpenses = () => {
  const [submittedExpenses, setSubmittedExpenses] = useState<SubmittedExpense[]>([]);

  useEffect(() => {
    const expenses = localStorage.getItem("submittedExpenses");
    if (expenses) {
      setSubmittedExpenses(JSON.parse(expenses));
    }
  }, []);

  return {submittedExpenses, setSubmittedExpenses};
}
