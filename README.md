# Styleshare 상품 목록 페이지 구현 과제

## 실행

- 환경 변수 설정: `.env.local.defaults` 파일의 환경변수 키를 참고하여 `.env.local` 파일을 작성
  - 과제에서 사용할 환경 변수는 모두 정적이므로 내부에서 기본값으로 주입되어있음.
- 패키지 설치: `npm install`
- 개발 환경 실행: `npm run dev`
- 빌드: `npm run build`
- 운영 서버 실행: `npm run start`

## 프로젝트 구성

### 주요 기술 스택

- React
- Next.js
- Typescript
- Sass

### 폴더 구성

- assets: 이미지 등 정적 리소스
  - svgs: 아이콘 용으로 사용되는 svg 파일
- components: React 컴포넌트
  - atoms: 데이터 도메인에 의존하지 않는 단일 요소로서의 컴포넌트
  - icons: 아이콘 컴포넌트
  - parts: 데이터 도메인을 의존할 수 있는(optional) 구조적 단위 요소 컴포넌트
  - templates: 데이터 도메인에 의존하지만, 데이터 상태를 관리하지 않고 주입 받는 컴포넌트
  - views: 화면에 보여줄 데이터 상태를 관리하고, template의 UI구성요소와 결합하는 컴포넌트
- consts: 데이터나 뷰 로직에서 도메인이 정해진 값에 대한 선언적 로직
- hooks: 컴포넌트에서 사용할 코드 분리 및 재사용을 위한 react hooks
- libs: react 등의 기술적 의존요소 없이 일반 코드로직을 분리시켜 놓은 함수들
- pages: next.js의 route별 진입 페이지
- styles: 스타일 관련 사항의 분리된 코드
- typings: js 코드 의존성이 없는 순수 타입 관련 코드
