# UI 표현하기[🔗](https://ko.react.dev/learn/describing-the-ui)

## 1) 컴포넌트 정의

컴포넌트는 다른 컴포넌트를 렌더링할 수 있지만, 그 정의를 중첩해서는 안 된다.

```
export default function Gallery () {
  // (❌)
  function Profile(){
    // ...
  }
  // ...
}
```

→ 위 스니펫은 매우 느리고 버그를 촉발한다. <b>최상위 레벨</b>에서 모든 컴포넌트를 정의할 것!

<br/>

## 2) JSX로 마크업 작성하기

<b>React 컴포넌트</b>는 브라우저에 마크업을 렌더링 할 수 있는 <b>JavaScript 함수</b>이다. 구문 확장자 'JSX'를 사용하여 해당되는 마크업을 표현한다.

JSX는 HTML보다 조금 더 엄격하고 동적으로 정보를 표시할 수 있다. 여러 JSX 태그를 하나로 감싸줘야 하는 이유는 뭘까?

- <b>JSX</b>는 HTML처럼 보이지만 내부적으로는 <b>JavaScript 객체</b>로 변환되기 때문이다. 하나의 배열로 감싸지 않은 하나의 함수에서는 두 개의 객체를 반환할 수 없다.

<br/>

## 3) JSX에서 JavaScript 사용하기

JSX를 사용하면 JavaScript 파일 내에 HTML과 유사한 마크업을 작성하여 렌더링 로직과 콘텐츠를 같은 곳에 둘 수 있다.

JSX는 중괄호 `{}`를 사용하여 마크업에서 바로 JavaScript를 사용할 수 있다.

<br/>

## 4) 컴포넌트에 props 전달하기

React 컴포넌트는 props를 이용하여 서로 통신한다. 부모 컴포넌트는 props를 통하여 몇몇 정보를 자식 컴포넌트에게 전달할 수 있는데 props에는 모든 <b>JavaScript 값</b>이 담길 수 있다.

<details>
  <summary>Q. 내가 만든 컴포넌트끼리 중첩하고 싶을 때는?</summary>

A. children prop 사용

```
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={170}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

```

</details>

<br/>

## 5) 조건부 렌더링

<details>
  <summary> Challenge: 삼항 조건 연산자 사용하기</summary>

```
function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
```

</details>

<details>
  <summary>Refactor: 정보를 객체에 담아 조건 제거하기</summary>

```
const drinks = {
  tea: {
    part: 'leaf',
    caffeine: '15–70 mg/cup',
    age: '4,000+ years'
  },
  coffee: {
    part: 'bean',
    caffeine: '80–185 mg/cup',
    age: '1,000+ years'
  }
};

function Drink({ name }) {
  const info = drinks[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

```

</details>

<br/>

## 6) 컴포넌트 순수성 유지❗

```
< 순수함수 >
호출되기 전에 존재했던 객체나 변수를 변경하지 않는다.
동일한 입력, 동일한 출력
```

<br/>

React는 작성되는 모든 컴포넌트가 순수함수라고 가정한다. 내가 작성한 React 컴포넌트는 동일한 입력이 주어졌을 때 항상 동일한 JSX를 반환해야 한다.

React의 렌더링 프로세스는 항상 순수해야 한다.
컴포넌트는 오로지 JSX만 반환해야 하고, 렌더링 전에 존재했던 객체나 변수를 변경해서는 안 된다!

컴포넌트가 특정 순서로 렌더링될 것이라고 기대해서는 안 된다. 각 컴포넌트는 렌더링 중에 다른 컴포넌트에게 의존하지 않고 스스로 JSX를 계산해야 한다!

<details>
  <summary>예시 코드 ✅ </summary>

```
export default function StoryTray({ stories }) {

  // 복사한 배열을 사용함으로써 기존 배열에 영향 ❌
  let storiesToDisplay = stories.slice();

  storiesToDisplay.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {storiesToDisplay.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}

```

→ 렌더링 함수의 순수성을 유지하면서 변이는 로컬에서만 일어난다. 주의해야 할 점은 배열의 기존 항목을 변경하려고 하면 해당 항목도 복제해야 한다는 것이다.

</details>

<br/>

```
기존 배열 변경: `push`, `pop`, `reverse`, `sort`
새 배열 생성: `slice`, `filter`, `map`
```

<br/>
