import { type ReactNode } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

const Header = ({ title, subtitle, action }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-200/10 pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Dashboard</p>
        <h1 className="text-3xl font-semibold text-slate-950">{title}</h1>
        {subtitle ? <p className="mt-2 text-sm text-slate-600">{subtitle}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
};

export default Header;
