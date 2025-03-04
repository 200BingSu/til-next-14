import { GoodDataType } from "@/types";

export const fetchGoods = async (): Promise<GoodDataType[]> => {
  const url = "http://localhost:3000/api/getallgood";
  try {
    // axios 사용해도 괜찮지만 next에서는 fetch를 권장
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
