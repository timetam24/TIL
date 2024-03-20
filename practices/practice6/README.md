# State 관리하기

## 1. State를 사용해 Input 다루기

- UI를 선언적인 방식으로 생각하기 실습 페이지: `/color`

  ```
  컴포넌트 개발할 때

  1. 모든 시각적 state를 확인한다.
  2. 사람이나 컴퓨터가 state 변화를 어떻게 트리거하는지 알아낸다.
  3. useState로 state를 모델링한다.
  4. 버그를 피하기 위해 불필요한 state는 제거한다.
  5. state 설정을 위해 이벤트 핸들러를 연결한다.
  ```

  - 학습 전 필요하다고 생각한 상태

    - status: `empty`, `typing`, `submitting`, `success`
    - color: 사용자가 입력한 input 상태 값

  - 학습 후 다시 정리한 상태

    - status: `typing`, `submitting`, `success`
    - color: 사용자가 입력한 input 상태 값
    - error: 폼 제출 실패 시 에러 메세지

  - description
    - status의 `empty`는 `color.length === 0`으로 대체 가능하다.
    - 폼 제출 실패 시 에러 메세지를 출력해야 한다.

<br/>

- 프로필 편집기 챌린지 페이지: `/profile`

<br/>

## 2. 컴포넌트 간 State 공유하기

```
State 끌어올리기

- 두 컴포넌트의 state가 항상 함께 변경되어야 한다면
  가장 가까운 공통의 부모 컴포넌트로 state를 옮긴다.
- props를 통해 state를 두 컴포넌트에게 전달한다.
- props를 통해 이벤트 핸들러를 전달하여
  자식 컴포넌트가 state를 변경할 수 있다.
```

- 목록 필터링하기 챌린지 페이지: `/food`
