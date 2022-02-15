<h1 align= "center"> HodooLabs 메인페이지 구현 과제</h1>

### :house: 배포 URL
https://hodoolabs.vercel.app/
![캡쳐](https://user-images.githubusercontent.com/85682854/154102208-ef02b9a7-0053-44eb-8c55-d6687439cc2b.png)

<br/>

### 🏗 프로젝트 구조도

```html
├── Appdownload
│   ├── AppDownload.tsx
│   └── Appdownload.module.scss
├── Banner
│   ├── Banner.module.scss
│   └── Banner.tsx
├── BookChoice
│   ├── Book.tsx
│   ├── BookChoice.module.scss
│   ├── BookChoice.tsx
│   └── RefCheck.tsx
├── Diary
│   ├── Diary.module.scss
│   └── Diary.tsx
├── Footer
│   ├── Footer.module.scss
│   └── Footer.tsx
├── Header
│   ├── Header.module.scss
│   └── Header.tsx
├── LanLive
│   ├── LanLive.module.scss
│   └── LanLive.tsx
├── Live
│   ├── Live.module.scss
│   └── Live.tsx
├── Nav
│   ├── Nav.module.scss
│   └── Nav.tsx
├── ReviewSlider
│   ├── Review.module.scss
│   └── Review.tsx
└── Slidebooks
    ├── ImageWrap.tsx
    ├── SlideBooks.module.scss
    └── SlideBooks.tsx
```
<br/>

### :exclamation: 설치방법

```
1. npm install
2. npm run dev
```

<br/>

### :clapper: 구현내용

#### 1. 마크업과 반응형 공용 스타일 코드. 
https://github.com/wanted-pre-onboarding-Team-13/hodoolabs/pull/1#issue-1137505332
```
- 웹페이지의 사이즈에 따라 특정 아이템이 보이거나 사라지도록 기능을 돕는 고용 스타일 작성하였습니다.
- 마크업 진행시 화면에 나타내고 싶지 않지만 텍스트를 브라우저에게 전달해야 하는 케이스들을 다룰 수 있도록 하였습니다.
```
#### 2. Nav 스크롤 style 컨트롤.

![nav바](https://user-images.githubusercontent.com/77766718/154122918-9d738590-b4cd-4ded-9d36-51ee51ad0740.gif)

```
- 웹페이지에 스크롤 동작을 감지하여 여부에 따라 nav의 배경색,폰트색,이미지 로고 색이 변하는 기능을 구현하였습니다.
```

#### 3. 이용자 후기 레이아웃

![slider](https://user-images.githubusercontent.com/77766718/154124480-80609f9f-ee9a-416d-98c1-cc3e404783b3.gif)

```
- 이용자의 정보, 리뷰 데이터를 받아와 UI에 출력하였습니다.
- swiper을 적용해 autoplay 슬라이더를 구현하였습니다.
```

