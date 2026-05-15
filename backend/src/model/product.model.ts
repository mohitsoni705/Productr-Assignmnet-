import { Schema, model, type Document, type Types } from "mongoose";

export interface IProduct extends Document {
  owner: Types.ObjectId;
  productName: string;
  productType: string;
  quantity: number;
  mrp: number;
  sellingPrice: number;
  imageUrl?: string;
  branchName: string;
  exchangeOrReturn: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInput {
  owner: Types.ObjectId | string;
  productName: string;
  productType: string;
  quantity: number;
  mrp: number;
  sellingPrice: number;
  imageUrl?: string;
  branchName: string;
  exchangeOrReturn: string;
}

const productSchema = new Schema<IProduct>(
  {
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    productName: { type: String, required: true, trim: true },
    productType: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 0 },
    mrp: { type: Number, required: true, min: 0 },
    sellingPrice: { type: Number, required: true, min: 0 },
    imageUrl: { type: String },
    branchName: { type: String, required: true, trim: true },
    exchangeOrReturn: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const ProductModel = model<IProduct>("Product", productSchema);

export const createProduct = async (payload: ProductInput) => {
  return ProductModel.create(payload);
};

export const getProductsByOwner = async (ownerId: string) => {
  return ProductModel.find({ owner: ownerId }).sort({ createdAt: -1 }).exec();
};

export const getProductById = async (id: string, ownerId: string) => {
  return ProductModel.findOne({ _id: id, owner: ownerId }).exec();
};

export const updateProductById = async (id: string, ownerId: string, update: Partial<ProductInput>) => {
  return ProductModel.findOneAndUpdate({ _id: id, owner: ownerId }, update, { new: true }).exec();
};

export const deleteProductById = async (id: string, ownerId: string) => {
  return ProductModel.findOneAndDelete({ _id: id, owner: ownerId }).exec();
};
