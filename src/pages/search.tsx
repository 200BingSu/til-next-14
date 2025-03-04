// 앱 라우터 버전 import {useRouter} from "next/navigation"
import GoodItem from "@/components/good-item";
import SearchLayout from "@/components/search-layout";
import { fetchSearchGood } from "@/lib/fetch-search-good";
import styles from "@/pages/search.module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

// SSR과 데이터 패치 적용
// 쿼리스트링을 읽고 데이터 패치 적용
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // 쿼리스트링이 context에 담김
  const { keyword } = context.query;
  const goods = await fetchSearchGood(keyword as string);
  return {
    props: { goods },
  };
}

export default function Page({
  goods,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { keyword } = router.query;
  return (
    <div className={styles.container}>
      <h4>
        검색 <strong>{keyword}</strong> 페이지
      </h4>
      <div>
        {goods.map((item) => {
          return <GoodItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

Page.getLayout = (page: React.ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
