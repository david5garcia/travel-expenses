import { FormEvent, SyntheticEvent, useRef, useState } from "react";
import "./ExpenseSubmission.scss";
import { Input } from "./Input";

export type SubmittedExpense = {
  date: Date;
  name: string;
  price: number;
};

export const ExpenseSubmission = ({ onSubmittedExpense }: any) => {
  const dateEntered = useRef<HTMLInputElement>(null);
  const nameEntered = useRef<HTMLInputElement>(null);
  const priceEntered = useRef<HTMLInputElement>(null);

  const expenseSubmissionHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (
      dateEntered.current === null ||
      nameEntered.current === null ||
      priceEntered.current === null
    )
      return;

    const submittedExpense: SubmittedExpense = {
      date: new Date(dateEntered.current.value),
      name: nameEntered.current.value,
      price: Number(priceEntered.current.value),
    };
    onSubmittedExpense(submittedExpense);
    dateEntered.current.value = "";
    nameEntered.current.value = "";
    priceEntered.current.value = "";
  };

  return (
    <div>
      <form onSubmit={expenseSubmissionHandler}>
        <div className="flex items-center">
          <label className="shrink-0 w-300" htmlFor="date">
            Date
          </label>
          <Input type="date" forwardRef={dateEntered} required name="date" />
        </div>
        <div className="flex items-center">
          <label htmlFor="name">Name</label>
          <Input type="text" forwardRef={nameEntered} required name="name" />
        </div>
        <div className="flex items-center">
          <label htmlFor="price">Price</label>
          <Input
            type="number"
            forwardRef={priceEntered}
            min="0.01"
            step="0.01"
            name="price"
          />
        </div>
        <div className="justify-center">
          <button
            className="bg-white text-gray-800 font-medium py-2 px-8 rounded-xl shadow-md hover:bg-orange-300 active:translate-y-1 transition-all"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
