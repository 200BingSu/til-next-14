import styles from "@/pages/index.module.css";
import goods from "@/mock/goods.json";
import GoodItem from "@/components/good-item";
import React from "react";
import SearchLayout from "@/components/search-layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 상품</h3>
        {/* 3개만 랜덤하게 출력 */}
        {goods.slice(0, 3).map((item) => {
          return <GoodItem key={item.id} {...item} />;
        })}
      </section>
      <section>
        <h3>등록된 모든 상품</h3>
        {/* 전체 출력 */}
        {goods.map((item) => {
          return <GoodItem key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
}

// js에서는 함수도 객체다.
// 객체는 속성을 추가할 수 있다.
Home.getLayout = (page: React.ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
