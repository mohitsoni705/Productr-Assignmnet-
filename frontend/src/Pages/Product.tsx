import { useState } from "react";
import PageShell from "../Components/PageShell";
import ProductCard from "../Components/ProductCard";
import PrimaryButton from "../Components/PrimaryButton";

interface ProductItem {
  id: string;
  name: string;
  sku: string;
  price: string;
  status: "Published" | "Unpublished";
  branch: string;
}

const sampleProducts: ProductItem[] = [
  {
    id: "p1",
    name: "Helix Smart Lamp",
    sku: "PDT-0043",
    price: "$46.00",
    status: "Published",
    branch: "Downtown",
  },
  {
    id: "p2",
    name: "Nova Cable Pack",
    sku: "PDT-0047",
    price: "$18.00",
    status: "Unpublished",
    branch: "North Hub",
  },
];

const Product = () => {
  const [products] = useState<ProductItem[]>(sampleProducts);

  return (
    <PageShell title="Products" subtitle="Manage all products in one place">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Products</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">Product catalog</h2>
          </div>
          <PrimaryButton>Add New Product</PrimaryButton>
        </div>

        {products.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-slate-200 bg-white p-12 text-center">
            <p className="text-sm text-slate-500">Feels a little empty over here...</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">You can create products without connecting a store.</h3>
            <p className="mt-2 text-sm text-slate-500">Add products to your store anytime and publish them when ready.</p>
            <PrimaryButton className="mt-8">Add your Products</PrimaryButton>
          </div>
        )}
      </div>
    </PageShell>
  );
};

export default Product;
