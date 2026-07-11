import * as React from "react";
import { cn } from "@/lib/utils";

export const inputClasses =
  "w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-muted/60 transition-colors duration-200 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500";

export function Field({
  label,
  htmlFor,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-fg">
        {label}
        {required ? <span className="text-navy-dynamic"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputClasses, props.className)} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(inputClasses, props.className)} />;
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea {...props} className={cn(inputClasses, "min-h-32 resize-y", props.className)} />
  );
}
