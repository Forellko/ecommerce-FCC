"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`btn btn-primary ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && <span className="loading loading-ring loading-lg" />}
      {children}
    </button>
  );
}
