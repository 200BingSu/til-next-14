import type { NextApiRequest, NextApiResponse } from "next";
import { seedData } from "./alldata";
import { GoodDataType } from "@/types";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GoodDataType | null>
) {
  // 요청(req)에 의한 파람 처리하기
  // uri는 무조건 문자열로 처리된다.
  const { id } = req.query;
  const filterGoods = seedData.find((item) => {
    return item.id === Number(id);
  });
  res.status(200).json(filterGoods || null);
}
