import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/home" },
  { label: "Products", path: "/products" },
];

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-[#161d2d] text-slate-100 flex flex-col px-6 py-8">
      <div className="mb-10">
        <div className="mb-6 text-3xl font-bold tracking-tight">Productr</div>
        <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-4 text-slate-300">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Search</div>
          <input
            className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-500"
            placeholder="Search"
          />
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-3xl px-4 py-4 text-sm font-medium transition ${
                isActive ? "bg-slate-100 text-slate-950" : "text-slate-300 hover:bg-slate-800/90"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-3xl border border-slate-700 bg-slate-900/70 p-4 text-slate-300">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Account</div>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-slate-700/70" />
          <div>
            <div className="text-sm font-semibold text-slate-50">Productr User</div>
            <div className="text-xs text-slate-500">Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
