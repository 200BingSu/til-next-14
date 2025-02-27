# Page Router

## http://localhost:3000

- /src/pages/index.tsx

```tsx
export default function Home() {
  return <h1>home</h1>;
}
```

## http://localhost:3000/search (쿼리스트링)

- /src/pages/search.tsx

```tsx
// 앱 라우터 버전 import {useRouter} from "next/navigation"
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { keyword } = router.query;
  return (
    <div>
      검색 <b>{keyword}</b> 페이지
    </div>
  );
}
```

## http://localhost:3000/good/1 (params)

- /src/pages/good/[id].tsx

```tsx
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
```

## http://localhost:3000/gogo (not Found 이동시)

- /src/pages/404.tsx (`파일명이 정해져있음`)

# 네비게이트

## Link를 이용해서 라우터를 이동하는 주메뉴

- Link로 연결된 주소는
