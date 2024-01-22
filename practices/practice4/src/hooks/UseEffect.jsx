import React, { useState, useEffect } from "react";

// useEffect
// 생명주기 메서드를 대체하기 위해 만들어진 훅 (x)
// 애플리케이션 내 컴포넌트의 여러값들을 활용해 동기적으로 부수효과를 만드는 메커니즘 (o)

// 렌더링할 때마다 의존성에 있는 값을 보면서 이 값이 이전과 다른 게 하나라도 있으면 부수효과를 실행한다
// 즉, state와 props의 변화 속에서 일어나는 렌더링 과정에서 실행되는 부수 효과 함수이다
const UseEffect = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    function addMouseEvent() {
      console.log(count);
    }

    window.addEventListener("click", addMouseEvent);

    // 클린업 함수
    return () => {
      // 새로운 값을 기반으로 렌더링 뒤에 실행되지만 이 변경된 값을 읽는 것이 아니라
      // 함수가 정의 됐을 당시에 선언된 이전 값을 보고 실행된다
      // 즉 클린업 함수는 이전 count 값, 이전 state를 참조해 실행된다
      console.log("클린업 함수 실행!", count);
      window.removeEventListener("click", addMouseEvent);
    };
  }, [count]);

  return (
    <div>
      <h1>count</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default UseEffect;
// useEffect는 컴포넌트가 렌더링된 후에 어떠한 부수 효과를 일으키고 싶을 때 사용하는 훅이라는 점 헷갈리지 말자!

// useEffect 사용 시 주의할 점
// 1. 거대한 useEffect 만들지 않기
// 2. 불필요한 외부 함수 만들지 않기!
// => useEffect 내에서 사용할 부수 효과라면 내부에서 만들어 정의해 사용할 것!
