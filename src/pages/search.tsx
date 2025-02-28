// 앱 라우터 버전 import {useRouter} from "next/navigation"
import GoodItem from "@/components/good-item";
import { useRouter } from "next/router";
import goods from "@/mock/goods.json";
import styles from "@/pages/search.module.css";
import SearchLayout from "@/components/search-layout";

export default function Page() {
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
