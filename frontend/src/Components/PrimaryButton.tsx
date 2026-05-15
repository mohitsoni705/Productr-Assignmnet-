import type { ButtonHTMLAttributes } from "react";

const PrimaryButton = ({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-3xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800 ${className}`}
      {...props}
    />
  );
};

export default PrimaryButton;
