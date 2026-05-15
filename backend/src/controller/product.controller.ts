import type { Request, Response } from "express";
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProductsByOwner,
  updateProductById,
} from "../model/product.model.js";

export const addProduct = async (req: Request, res: Response) => {
  const rawUserId = req.user?.userId;
  if (!rawUserId || Array.isArray(rawUserId)) {
    return res.status(401).json({ message: "Authentication required." });
  }
  const userId = rawUserId;
  const { productName, productType, quantity, mrp, sellingPrice, imageUrl, branchName, exchangeOrReturn } = req.body;

  if (!productName || !productType || quantity == null || mrp == null || sellingPrice == null || !branchName || !exchangeOrReturn) {
    return res.status(400).json({ message: "All product fields are required." });
  }

  const product = await createProduct({
    owner: userId,
    productName,
    productType,
    quantity,
    mrp,
    sellingPrice,
    imageUrl,
    branchName,
    exchangeOrReturn,
  });

  return res.status(201).json({ message: "Product created", product });
};

export const getProducts = async (req: Request, res: Response) => {
  const rawUserId = req.user?.userId;
  if (!rawUserId || Array.isArray(rawUserId)) {
    return res.status(401).json({ message: "Authentication required." });
  }
  const products = await getProductsByOwner(rawUserId);
  return res.json({ products });
};

export const getProduct = async (req: Request, res: Response) => {
  const rawUserId = req.user?.userId;
  if (!rawUserId || Array.isArray(rawUserId)) {
    return res.status(401).json({ message: "Authentication required." });
  }
  const userId = rawUserId;
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Product ID is required." });
  }

  const product = await getProductById(id, userId);
  if (!product) {
    return res.status(404).json({ message: "Product not found." });
  }
  return res.json({ product });
};

export const updateProduct = async (req: Request, res: Response) => {
  const rawUserId = req.user?.userId;
  if (!rawUserId || Array.isArray(rawUserId)) {
    return res.status(401).json({ message: "Authentication required." });
  }
  const userId = rawUserId;
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Product ID is required." });
  }

  const updated = await updateProductById(id, userId, req.body);
  if (!updated) {
    return res.status(404).json({ message: "Product not found or not owned by user." });
  }
  return res.json({ message: "Product updated", product: updated });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const rawUserId = req.user?.userId;
  if (!rawUserId || Array.isArray(rawUserId)) {
    return res.status(401).json({ message: "Authentication required." });
  }
  const userId = rawUserId;
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Product ID is required." });
  }

  const deleted = await deleteProductById(id, userId);
  if (!deleted) {
    return res.status(404).json({ message: "Product not found or not owned by user." });
  }
  return res.json({ message: "Product deleted." });
};
