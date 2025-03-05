// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GoodDataType } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GoodDataType[]>
) {
  const url = "https://fakestoreapi.com/products";
  const data = await fetch(url);
  const json = await data.json();
  res.status(200).json(json);
}
