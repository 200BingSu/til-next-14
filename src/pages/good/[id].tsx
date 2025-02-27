import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  return (
    <div>
      제품 <b>{id}</b>번 정보
    </div>
  );
}
