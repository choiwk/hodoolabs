<h1 align= "center"> HodooLabs 메인페이지 구현 과제</h1>

### :house: 배포 URL
https://hodoolabs.vercel.app/
![캡쳐](https://user-images.githubusercontent.com/85682854/154102208-ef02b9a7-0053-44eb-8c55-d6687439cc2b.png)



### :exclamation: 설치방법

```
1. npm install
2. npm run dev
```

### :clapper: 구현내용

#### 1. 대화목록 데이터 모델 구성

```
- 메시지의 데이터 모델에는 userId, userName, profileImage, content, date
- typescript를 이용하여 각각 데이터 모델에 type을 지정해 주었습니다.
```
#### 2. 로그인 유저 관리

```
- redux를 이용하여, 로그인 유저 상태 관리
- 현재 로그인된 유저, 채팅창에서 *표시
```
#### 3. 채팅 기능

```
- redux를 이용하여, 메시지 Post,Delete 기능 구현
- shift + enter는 줄바꿈 , enter는 메시지 보내기 기능 구분
- 입력창이 빈칸일시 메시지 보내기 기능 작동안함.
- 답장 버튼 누를시, 회신 메시지 
- 채팅 입력 컴포넌트 UI 구현
- textarea 글자 입력 길이에 따라 textarea의 height 값이 변경되는 기능.
- 텍스트 줄바꿈 또는 작성한 텍스트 수정할 때 textarea의 높이 값이 변경됩니다.
```
![채팅 기능](https://user-images.githubusercontent.com/77766718/153698875-9bcf2d93-435a-472c-882f-37c6df39ed77.gif)





#### 4. nav바 및 side바 UI 구현

```
- nav바 및 aside바 전체 UI 구현
- nav바에 로그인한 유저의 프로필 이미지가 표시됩니다.
```

