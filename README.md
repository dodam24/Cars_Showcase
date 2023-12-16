해당 프로젝트는 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)으로 시작된 [Next.js](https://nextjs.org/) 프로젝트입니다.
<br><br>

## 메인 페이지 (Hero Section)
<img src="https://github.com/dodam24/cars_showcase/assets/121652059/38c76005-d215-47dd-a4ae-9163634e94b0">
<br><br>

## 자동차 Card 컴포넌트
<img src="https://github.com/dodam24/cars_showcase/assets/121652059/ea4a5d56-17fa-426c-b1b3-cb8cb7c140e9">
<br><br>

## 자동차 Modal 컴포넌트 (Car Details)
<img src="https://github.com/dodam24/cars_showcase/assets/121652059/4095deec-ebab-414c-a708-d704df096076">
<br><br><br>

# 기술 스택
- JavaScript
- TypeScript
- React
- Tailwind CSS
- Axios
- Node.js
- Express
- Rapid API
- Next.js
- MongoDB
- Mongoose
<br><br><br>

# 구현한 기능 
- `@apply`를 활용한 코드의 재사용

- CSR(Client Side Rendering) 방식 적용

- 자동차 카드(Card) 컴포넌트

- 자동차 세부 정보(Details) 모달 컴포넌트

- '더 보기' 기능 구현

- `fetch API`를 이용한 자동차 정보 가져오기

- 조건에 따른 동적 이미지 로드

- 콤보 박스의 동적인 스타일 구현
    - 옵션의 활성화 여부에 따른 동적인 스타일링

- 타입스크립트 `인터페이스` 구현
    - 자동차 정보, 카드 컴포넌트, 사용자 정의 버튼 등

- 검색 버튼에 `반응형` 웹 디자인 적용

- 자동차 정보 관련 유틸리티(Utility) 함수 구현

- Vercel을 활용한 프로젝트 배포
<br><br><br>

## 시작하기

먼저, 개발 서버를 실행하세요:

```bash
npm run dev
```

브라우저에서 http://localhost:3000을 열어 결과를 확인할 수 있습니다.

`app/page.tsx` 파일을 수정하여 페이지를 편집할 수 있습니다. 파일을 편집하는 동안 페이지는 자동으로 업데이트됩니다.

이 프로젝트는 Inter라는 사용자 정의 구글 폰트를 자동으로 최적화하고 로드하기 위해 [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)를 사용합니다.


## Vercel에 배포하기

Next.js 앱을 배포하기 위해 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하였습니다.
