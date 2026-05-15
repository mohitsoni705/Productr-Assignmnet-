interface ProductCardProps {
  name: string;
  sku: string;
  price: string;
  status: "Published" | "Unpublished";
  branch: string;
}

const ProductCard = ({ name, sku, price, status, branch }: ProductCardProps) => {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{sku}</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">{name}</h2>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${status === "Published" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"}`}>
          {status}
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
        <span>Branch: {branch}</span>
        <span>Price: {price}</span>
      </div>
    </article>
  );
};

export default ProductCard;
