import React, { useState } from "react";

const UseState = () => {
  // 일반적인 useState 사용
  // 최초 렌더링과 리렌더링 시 계속 해당 값에 접근하여 console이 출력된다
  const [height, setHeight] = useState(
    console.log(window.innerHeight.toString())
  );

  // 게으른 초기화: useState에 변수 대신 함수를 넘긴다
  // 위 코드와의 차이점: '함수를 실행해서 값을 반환'한다
  // state가 처음 만들어질 때만 사용되고 리렌더링이 발생된다면 이 함수의 실행은 무시된다
  const [width, setWidth] = useState(() => {
    console.log("초기값이 복잡하거나 무거운 연산일 때 사용할 것");
    // localStorage나 sessionStorage에 대한 접근, 배열에 대한 접근(map, filter, find),
    // 초기값 계산을 위해 함수 호출이 필요할 때와 같이 무거운 연산을 포함해
    // 실행 비용이 많이 드는 경우에 게으른 초기화를 사용하는 것이 좋다
    return 0;
  });

  const handleClick = () => setWidth((prev) => prev + 1);

  return (
    <div>
      <p>{width}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default UseState;
