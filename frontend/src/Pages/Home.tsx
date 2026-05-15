import { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../Components/PageShell";
import PrimaryButton from "../Components/PrimaryButton";

const Home = () => {
  const [activeTab, setActiveTab] = useState<"Published" | "Unpublished">("Published");

  return (
    <PageShell
      title="Home"
      subtitle="Your product dashboard overview"
      action={
        <Link to="/products">
          <PrimaryButton>Add your Products</PrimaryButton>
        </Link>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Products</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">Published Products</h2>
            </div>
            <div className="flex rounded-full bg-slate-100 p-2">
              {(["Published", "Unpublished"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-slate-200"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6">
            <div className="rounded-[2rem] border border-dashed border-slate-200 p-10 text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-100 text-2xl text-slate-500">
                +
              </div>
              <h3 className="text-xl font-semibold text-slate-950">No Published Products</h3>
              <p className="mt-3 text-sm text-slate-500">
                Your published products will appear here. Create your first product to publish it instantly.
              </p>
              <Link to="/products">
                <PrimaryButton className="mt-8">Add Product</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>

        <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Welcome Back</p>
            <h2 className="mt-4 text-3xl font-semibold">Keep stock moving</h2>
            <p className="mt-3 text-sm text-slate-300">Create and manage products without connecting a store. Everything is ready for you.</p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Total Products</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">0</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Published</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">0</p>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default Home;
