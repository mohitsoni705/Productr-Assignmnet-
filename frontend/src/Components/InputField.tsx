import type { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField = ({ label, className = "", ...props }: InputFieldProps) => {
  return (
    <label className="block text-sm text-slate-700">
      <span className="mb-2 block font-medium text-slate-900">{label}</span>
      <input
        className={`w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 ${className}`}
        {...props}
      />
    </label>
  );
};

export default InputField;
