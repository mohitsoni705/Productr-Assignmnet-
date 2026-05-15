const AuthHero = () => {
  return (
    <div className="relative flex h-full min-h-[600px] w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-700 p-8 text-white shadow-2xl shadow-slate-950/20">
      <div>
        <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-200">
          Productr
        </div>
        <h1 className="text-4xl font-semibold leading-tight">Login to your Productr Account</h1>
        <p className="mt-4 max-w-md text-sm text-slate-300">
          Manage your product catalog, publish listings, and keep all product updates in one central dashboard.
        </p>
      </div>

      <div className="relative mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
        <div className="h-72 rounded-[1.75rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),transparent_50%),linear-gradient(135deg,_rgba(96,165,250,0.15),rgba(99,102,241,0.1))] p-4">
          <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-6">
            <div className="space-y-2">
              <div className="h-2 w-16 rounded-full bg-slate-600" />
              <div className="h-2 w-10 rounded-full bg-slate-600" />
            </div>
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[1.5rem] bg-slate-800 text-center text-sm text-slate-200">
              Uplist your product to market
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>100+ products</span>
              <span>1 store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthHero;
