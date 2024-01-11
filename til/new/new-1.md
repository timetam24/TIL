# 이미지 크롭 기능

React를 사용하는 팀 프로젝트 내에서 이미지 크롭 기능을 추가하기 위해 아래의 라이브러리를 공부했다.

<br/>

🔗 [react-easy-crop](https://www.npmjs.com/package/react-easy-crop)  
🔗 [react-image-crop](https://www.npmjs.com/package/react-image-crop)

<br/>

훗날을 위해 두 라이브러리의 차이점을 표로 정리했다.

|                         | react-easy-crop | react-image-crop |
| ----------------------- | :-------------: | :--------------: |
| 이미지 확대, 축소, 회전 |        O        |        X         |
| 종속성                  |      작음       |       없음       |
| 번들 크기               |      작음       |    상대적 큼     |
| 구형 브라우저 지원      |        X        |        O         |

<br/>

두 라이브러리를 사용해봤을 때,  
react-easy-crop은 마우스 스크롤로 이미지 확대와 축소되는 점이 확실히 편하다고 느꼈다.  
react-image-crop은 구형 브라우저 지원이 가능하다는 점이 끌린다.

어떤 라이브러리를 선택할지는 조금 더 커스텀하며 사용한 후 결정해야겠다!

<br/>

---

<br/>

## 성공🎉

react-easy-crop 라이브러리를 사용하여 이미지 크롭 기능에 성공했다!

👉 [팀프로젝트에 적용 완료한 PR 보러가기](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/pull/331)

<br/>

## 참고 레퍼런스

🔗 [react-easy-crop 공식 레포](https://github.com/ValentinH/react-easy-crop)

<br/>
  
🔗 [Learn How to Crop Images With React Easy Crop](https://www.youtube.com/watch?v=E_AHkWHhUz4&t=369s)
  - react-easy-crop을 사용해서 application 만들기
  - 해당 라이브러리를 어떻게 사용해야 하는지 흐름과 방향성을 이해하는데 도움 받았다
 
<br/>
    
🔗 [Image Manipulation With React-Easy-Crop](https://blog.openreplay.com/image-manipulation-with-react-easy-crop/)
  - 커스텀할 때 유용했던 포스트
  - Cropper의 다양한 props를 어떻게 쓰는지 배울 수 있다
 
<br/>
    
🔗 [Creating an Image Upload Modal with Crop and Rotate Functionality in React](https://dev.to/mizanrifat/creating-an-image-upload-modal-with-crop-and-rotate-functionality-in-react-5cbd)
  - 크롭 완료한 이미지가 원형이 아닌 사각형으로 떠서 헤매던 중 발견한 포스트
  - canvas로 어떻게 그려야 원형으로 나오는지 크롭된 이미지 크기를 어떻게 고정해야할지 배울 수 있었다

<br/>
<br/>

## 테스트 결과물

|                                            크롭 이미지 저장                                            |                                     취소 & 기본 프로필 이미지 리셋                                     |
| :----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
| ![image-crop1](https://github.com/timetam24/TIL/assets/135303974/e8f94573-d62e-4f69-8081-282302dc81e5) | ![image-crop2](https://github.com/timetam24/TIL/assets/135303974/30390b95-a3f2-4680-8798-f93e16ba0354) |
