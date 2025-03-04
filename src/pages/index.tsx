import GoodItem from "@/components/good-item";
import SearchLayout from "@/components/search-layout";
import { fetchGoods } from "@/lib/fetch-good";
import { fetchRandomGood } from "@/lib/fetch-random-good";
import styles from "@/pages/index.module.css";
import { InferGetServerSidePropsType } from "next";
import { ReactNode } from "react";

// Next 에는 약속이 된 함수가 있다.
// SSR 데이터 패칭을 위한 함수명이 정해져 있다.
// 아래의 함수 부터 서버에서 실행하고 그 결과를 다시 보여준다.
export const getServerSideProps = async () => {
  // 항상 객체를 리턴하고, 반드시 prop 라는 속성이 있어야 한다.
  // 데이터를 미리 호출하여서 html을 완성 리턴한다.
  const [allGoods, randomGoods] = await Promise.all([
    fetchGoods(),
    fetchRandomGood(),
  ]);
  return {
    props: {
      allGoods: allGoods,
      randomGoods: randomGoods,
    },
  };
};

export default function Home({
  allGoods,
  randomGoods,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 상품</h3>
        {/* 3개만 랜덤하게 출력 */}
        {randomGoods.map((item) => {
          return <GoodItem key={item.id} {...item} />;
        })}
      </section>
      <section>
        <h3>등록된 모든 상품</h3>
        {/* 전체 상품 출력 */}
        {allGoods.map((item) => (
          <GoodItem key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
}

// JS 에서는 함수도 객체다.
// 객체는 속성을 추가할 수 있다.
Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
