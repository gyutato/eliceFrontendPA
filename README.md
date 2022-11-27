# elice Frontend Team PA

엘리스 Web Frontend팀 Programming Assignment를 구현하였습니다.

<br/>

## 기술 스택

- React hooks + Functional Components
- TypeScript, eslint, prettier
- emotion
- axios
- react-router-dom

## 폴더 구조

```bash
src
├── index.tsx
├── App.tsx
├── components
│   ├── atoms
│   │   ├── Buttons
│   │   ├── Cards
│   │   ├── filters
│   │   ├── headers
│   │   └── searchAreas
│   ├── organisms
│   │   ├── CourseFilter.tsx
│   │   ├── EmptyResult.tsx
│   │   ├── Pagination.tsx
│   │   └── Results.tsx
│   └── templates
│       └── Layout.tsx
├── pages
│   └── Body.tsx
├── api
│   ├── axios.custom.ts
│   └── axios.instance.ts
├── hooks
│   ├── useCourses.tsx
│   └── useDebounce.ts
├── styles
│   └── globalStyle.tsx
└── types
    ├── apiDto.ts
    └── filterOptions.ts
```

### 디렉토리 상세

- `components` : 프로젝트 내부에서 재사용되는 컴포넌트 폴더로, atomic design pattern을 간소화하여 차용했습니다.
  - `atoms` : 기존 atomic design pattern의 atom과 molecule 단위를 통합했습니다.
  - `organisms` : 필터, 페이지네이션 등 사용자에게 의미와 역할이 존재하는 단위로, molecule의 결합입니다.
  - `templates` : 데이터를 연결하지 않은 organism의 배치입니다.
- `pages` : 데이터가 결합되어 사용자에게 전달되는 영역입니다.
- `api` : API URL, axios 인스턴스 및 로직이 정의되어 있습니다.
- `hooks` : 커스텀 훅 폴더입니다.
- `styles` : reset.css 를 포함한 전역 스타일링 속성을 정의했습니다.
- `types` : API 응답 형태, 필터 옵션 등 통일되어야 하는 타입이 정의되어 있습니다.

## 컴포넌트 구상

![componentVisual](public/components.png)

- `Layout`
  - 헤더를 제외하고 페이지의 모든 요소를 감싼 컴포넌트로, UI 배치를 결정합니다.
- `CourseFilter`
  - 검색창 및 Chips 필터 쿼리를 종합한 정보를 갖고 있도록 구상한 영역입니다.
  - 구현 과정에서 `useSearchParams` 및 `useState` 를 사용하여 각 컴포넌트가 각각 쿼리를 반영하게 되었지만, 추후 필터가 더욱 복잡해질 경우를 위해 남겨두었습니다.
- `SearchArea`
  - 사용자에게 보여지는 검색창으로, 입력한 키워드를 URL query에 반영합니다.
- `ChipsFilter`
  - 사용자에게 보여지는 Chips 필터로, 선택한 키워드를 URL query에 반영합니다.
- `Body`
  - API를 요청하고 해당 응답에 대한 정보를 갖고 있는 컴포넌트입니다.
- `Card`
  - `Body` 컴포넌트로부터 과목 정보를 받아 각 과목에 대해 정보를 시각화한 컴포넌트입니다.

## 요구사항 구현

### 1. 상태 관리

### 2. Search Area의 debounced search

### 3. URL query 동기화

### 4. filter_conditions 파라미터 생성

### 5. query에 따른 API 호출

### 6. 페이지네이션

## 구현 중 발생한 문제 및 해결 과정
