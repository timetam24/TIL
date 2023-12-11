# 이미지 크롭 기능

React를 사용하는 팀 프로젝트 내에서 이미지 크롭 기능을 추가하기 위해 아래의 라이브러리를 공부했다.

<br/>

1. [react-easy-crop](https://www.npmjs.com/package/react-easy-crop)
2. [react-image-crop](https://www.npmjs.com/package/react-image-crop)

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
