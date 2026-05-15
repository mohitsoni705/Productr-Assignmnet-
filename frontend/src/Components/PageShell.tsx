import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface PageShellProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
}

const PageShell = ({ title, subtitle, action, children }: PageShellProps) => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 px-6 py-8 lg:px-10">
          <Header title={title} subtitle={subtitle} action={action} />
          <div className="mt-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default PageShell;
