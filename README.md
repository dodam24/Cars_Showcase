해당 프로젝트는 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)으로 시작된 [Next.js](https://nextjs.org/) 프로젝트입니다.
<br><br>

## 메인 페이지 (Hero Section)
<img src="https://github.com/dodam24/cars_showcase/assets/121652059/38c76005-d215-47dd-a4ae-9163634e94b0">
<br><br>

## 자동차 Card 컴포넌트
> #### 검색 필터링 적용 X
<img width="1423" alt="필터링 적용 전" src="https://github.com/dodam24/Cars_Showcase/assets/121652059/9ee2e11f-bc20-463e-bd43-982f46698ecc">
<br><br>

> #### 검색 필터링 적용 O
<img width="1423" alt="검색 조건 적용" src="https://github.com/dodam24/Cars_Showcase/assets/121652059/b6bcf4dc-8ac7-4472-ad98-1ba21b0a3a04">
<br><br>

## 검색창
> #### 제조업체 아이콘을 클릭하면 API를 통해 가져온 제조업체 목록을 드롭다운 형태로 표시
<img src="https://github.com/dodam24/Cars_Showcase/assets/121652059/4e37beb9-6f60-4b36-9045-e0346fe41729">
<br><br>

## 모달 창 (Car Details)
<img src="https://github.com/dodam24/cars_showcase/assets/121652059/4095deec-ebab-414c-a708-d704df096076">
<br><br>

## Footer
<img src="https://github.com/dodam24/Cars_Showcase/assets/121652059/a136ba3e-8ed7-49c5-a4bd-8f528235bac3">
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

## 구현한 페이지
> #### 메인 페이지
> #### 자동차 Card 컴포넌트
> #### 검색창
> #### 모달 창 (Car Details)
> #### Footer
<br>

## 구현한 기능 
- `@apply`를 활용한 코드의 재사용

- CSR 렌더링 방식 적용
    - SSR 방식으로 구현 후, CSR 방식으로 변경 

- 타입스크립트 `인터페이스` 구현
    - CarProps, CarCardProps, CustomButtonProps 등

- 자동차 카드(Card) 컴포넌트

- 자동차 세부 정보(Details) 모달 창
    - 카드 클릭 시, 자동차 세부 정보를 보여주는 모달 창 띄우기
    - 해당 자동차의 세부 정보 데이터 가져오기

- 더 보기 기능 구현
    - 버튼 클릭 시, 다음 페이지에 해당하는 데이터 목록 불러오기
<br>

> #### 검색창
- 제조업체 아이콘 클릭 시, API를 통한 자동차 제조업체 데이터 불러오기
- `fetch API`를 이용한 자동차 정보 가져오기

- 콤보 박스 옵션의 활성화 여부에 따른 동적인 스타일
    - 옵션 선택 시, 폰트 강조 및 색상 변경, 활성 상태에 따라 파란색 배경 표시
 
- 조건에 따른 동적 이미지 로드
    - 제조업체, 모델명, 연료 유형, 제조 연도에 해당하는 자동차 이미지 가져오기

- 검색 버튼에 `반응형` 웹 디자인 적용
<br>

- 자동차 정보 관련 유틸리티(Utility) 함수 구현
    - 기본 렌탈 비용, 주행 거리 및 차량 연식을 기반으로 일일 자동차 렌트 비용 계산
    - 자동차 정보 및 각도를 바탕으로 이미지 URL 생성
    - 현재 페이지의 URL에 대한 검색어 매개변수를 업데이트 

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
