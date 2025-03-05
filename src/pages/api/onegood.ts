// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { seedData } from "./alldata";
import { GoodDataType } from "@/types";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GoodDataType | null>
) {
  const { id } = req.query;
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await data.json();
  res.status(200).json(json || null);
}
