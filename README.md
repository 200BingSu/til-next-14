# CSS

## 인라인 스타일 시트

- /src/pages/index.tsx

```tsx
export default function Home() {
  return <h1 style={{ color: "red" }}>home</h1>;
}
```

## 외부 css 연결 파일(Next에서는 page에 연결할 수 없다)

- /src/pages/index.css
- `_app.tsx` 이외에는 절대로 `.css`를 사용할 수 없다.

```css
.title {
  color: green;
}
```

- 오류 발생 예

```tsx
import "./index.css";

export default function Home() {
  return <h1 className="title">home</h1>;
}
```

## Next에서는 module css를 사용한다.

- index.module.css로 수정

```tsx
import styles from "./index.module.css";

export default function Home() {
  return <h1 className={styles.title}>home</h1>;
}
```
