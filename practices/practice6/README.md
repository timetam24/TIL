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

<br/>

## 3. State를 보존하고 초기화하기

- State는 렌더 트리의 위치에 연결됩니다 실습 페이지: `/count`

  ```
  - React는 UI 안에 있는 트리 구조로 렌더 트리를 만든다.
  - React는 트리에서의 위치를 통해 각 state가 어떤 컴포넌트에 속하는지
    추적한다. 리렌더링마다 언제 state를 보존하고 또 state를 초기화할지
    컨트롤할 수 있다.

  - State는 컴포넌트 안이 아니라 "React 안"에 살고 있다.
    React는 컴포넌트의 UI 트리에서의 위치를 이용해 가지고 있는 State를
    알맞은 컴포넌트와 연결한다.

  - React는 컴포넌트가 UI 트리에서 계속 같은 위치에 렌더링된다면
    State를 보존한다.
  - 같은 위치에 다른 컴포넌트가 렌더링된다면 그의 전체 서브 트리의
    State는 초기화된다.

  - 같은 위치에서 State를 초기화하고 싶다면 key를 통해 React가
    컴포넌트를 구별하도록 할 수 있다.
  - 여기서 key는 전역적으로 유일하지 않다! 오직 부모안에서만 자리를 명시한다.
  ```

- `key`를 이용하여 폼의 State를 초기화하기 실습 페이지: `/messenger`

- 배열에서 순서 바꾸기 챌린지 페이지: `/reverse`
