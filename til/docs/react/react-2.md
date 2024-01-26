# 상호작용 추가하기[🔗](https://ko.react.dev/learn/adding-interactivity)

## 1) 이벤트에 응답하기

이벤트 핸들러는 해당 컴포넌트가 가진 어떤 자식 컴포넌트의 이벤트를 수신할 수도 있다. 이를 이벤트가 트리를 따라 “bubble” 되거나 “전파된다”고 표현한다. 이때 이벤트는 발생한 지점에서 시작하여 트리를 따라 위로 전달된다.

<details>
  <summary>버튼 클릭 시 어느 핸들러가 작동할까?</summary>

<br/>

```
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>

      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      // ⭐ ①'Playing!' ②'You clicked on the toolbar!'

      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
      // ⭐ ①'Uploading!' ②'You clicked on the toolbar!'

    </div>
  );
}
```

⚠️ 부여된 JSX 태그 내에서만 실행되는 onScroll을 제외한 React 내의 모든 이벤트는 전파된다

</details>

<br/>

<details>
  <summary>이벤트 전파 멈추려면?</summary>

<br/>

```
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation(); //⭐
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

```

→ 이벤트 핸들러가 매개변수로 받는 이벤트 오브젝트를 사용하여 전파를 막을 수 있다. `e.stopPropagation()` 호출하여 이벤트 핸들러가 상위 태그에서 실행되지 않도록 멈추기!

</details>

<br/>

## 2) State: 컴포넌트의 기억 저장소

컴포넌트가 다시 렌더링 될 때 기억해야 하는 정보가 있다면 state 변수를 사용한다.

컴포넌트에서 서로 연관이 없는 경우 여러 개의 state 변수를 가지는 것이 좋다. 하지만 두 state 변수가 자주 함께 변경된다면 하나로 합치는 것이 더 좋을 수 있다.  
ex. 필드가 많은 폼의 경우 필드 별로 state 변수를 사용하는 것보다 하나의 객체 state 변수를 사용하는 것이 더 편리하다.

State는 컴포넌트 인스턴스에 지역적이다. 동일한 컴포넌트를 두 번 렌더링한다면 각각의 복사본은 고유한 state를 가진다.

<details>
  <summary>state1️⃣과 state2️⃣는 서로 독립적이다.</summary>

  <br/>

```
import Gallery from './Gallery.js';

export default function Page() {
  return (
    <div className="Page">
      <Gallery /> 컴포넌트 안의 state1️⃣
      <Gallery /> 컴포넌트 안의 state2️⃣
    </div>
  );
}
```

⭐ 추가로, Page 컴포넌트는 Gallery의 state에 대해 아무것도 “알지” 못하며 심지어 그것이 있는지도 모른다. Props와 달리, state는 선언한 컴포넌트에 완전히 비공개이다. 부모 컴포넌트는 이를 변경할 수 없다.

</details>

<br/>

## 3) 렌더링 그리고 커밋

컴포넌트를 화면에 표시하기 이전에 React에서 렌더링을 해야 한다.

```
<React 앱의 화면 업데이트를 위한 3단계>

1️⃣ 렌더링 트리거
2️⃣ React 컴포넌트 렌더링
3️⃣ React가 DOM에 변경사항을 커밋
```

<br>

### 1단계: 렌더링 트리거

① 컴포넌트의 초기 렌더링인 경우  
② 컴포넌트의 state가 업데이트된 경우

<br/>

### 2단계: React 컴포넌트 렌더링

렌더링을 트리거한 후 React는 컴포넌트를 호출하여 화면에 표시할 내용을 파악한다.  
렌더링은 React에서 <b>컴포넌트를 호출</b>하는 것이다.

- 초기 렌더링에서 React는 루트 컴포넌트를 호출한다.
- 이후 렌더링에서 React는 state 업데이트가 일어나 렌더링을 트리거한 컴포넌트를 호출한다.

<details>
  <summary>ex)</summary>

<br/>

```
import Gallery from './Gallery.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Gallery />);
```

```
export default function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

```

초기 렌더링 하는 동안 React는 `<section>`, `<h1>` 그리고 3개의 `<img>` 태그에 대한 DOM 노드를 생성한다.  
리렌더링하는 동안 React는 이전 렌더링 이후 변경된 속성을 계산한다. 다음 단계인 커밋 단계까지는 해당 정보로 아무런 작업도 수행하지 않는다.

</details>

<br/>

### 3단계: React가 DOM에 변경사항을 커밋

컴포넌트를 렌더링(호출)한 후 React는 DOM을 수정한다.

- 초기 렌더링의 경우 React는 `appendChild()` DOM API를 사용하여 생성한 모든 DOM 노드를 화면에 표시한다.
- 리렌더링의 경우 React는 필요한 최소한의 작업(렌더링하는 동안 계산된 것!)을 적용하여 DOM이 최신 렌더링 출력과 일치하도록 한다.

<br/>

<details><summary>❗React는 렌더링 간에 차이가 있는 경우에만 DOM  노드를 변경한다! </summary>

<br/>

매초 부모로부터 전달된 다른 props로 다시 렌더링하는 컴포넌트가 있다. `<input>`에 텍스트를 입력하여 `value`를 업데이트하지만 컴포넌트가 리렌더링될 때 텍스트는 사라지지 않는다.

```
export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}
```

→ 마지막 단계에서 React가 `<h1>`의 내용만 새로운 time으로 업데이트하기 때문이다.  
`<input>`이 JSX에서 이전과 같은 위치로 확인되므로 React는 `<input>` 또는 `value`를 건드리지 않는다!

</details>

<br/>

## 4) 스냅샷으로서의 State

렌더링은 그 시점의 스냅샷을 찍는다.

"렌더링"이란 React가 컴포넌트, 즉 함수를 호출한다는 뜻이다. 해당 함수에서 반환하는 JSX는 시간상 UI의 스냅샷과 같다.
prop, 이벤트 핸들러, 로컬 변수는 모두 렌더링 당시의 state를 사용해 계산된다.

컴포넌트의 메모리로써 state는 함수가 반환된 후 사라지는 일반 변수와 다르다. state는 실제로 함수 외부에 마치 선반에 있는 것처럼 React 자체에 “존재”한다. React가 컴포넌트를 호출하면 특정 렌더링에 대한 state의 스냅샷을 제공한다.

```
⭐ state 변수의 값은 이벤트 핸들러의 코드가 비동기적이더라도 렌더링 내에서 절대 변경되지 않는다.
```

<details>
<summary>ex)</summary>

<br/>

```
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}

```

→ 해당 렌더링의 onClick 내에서, setNumber(number + 5)가 호출된 후에도 number의 값은 계속 0이다.  
이 값은 컴포넌트를 호출해 React가 UI의 “스냅샷을 찍을” 때 “고정”된 값이다.

 </details>

<br/>

## 5) State 업데이트 큐

state 변수를 설정하면 다음 렌더링이 큐에 들어간다. 그러나 다음 렌더링을 큐에 넣기 전에, 값에 대해 여러 작업을 수행하고 싶을 때도 있다. 이럴 때는 어떻게 해야할까?

<details>
<summary>batching: React는 이벤트 핸들러가 실행을 마친 후 state 업데이트를 처리한다.</summary>

<br/>

React는 state 업데이트를 하기 전에 이벤트 핸들러의 모든 코드가 실행될 때까지 기다린다. 이 때문에 리렌더링은 모든 set함수() 호출이 완료된 이후에만 일어난다.

이렇게 하면 너무 많은 리렌더링이 발생하지 않고도 여러 컴포넌트에서 나온 다수의 state 변수를 업데이트할 수 있다. 하지만 이는 이벤트 핸들러와 그 안에 있는 코드가 완료될 때까지 UI가 업데이트되지 않는다는 의미이기도 하다. batching라고도 하는 이 동작은 React 앱을 훨씬 빠르게 실행할 수 있게 해준다. 또한 일부 변수만 업데이트된 “반쯤 완성된” 혼란스러운 렌더링을 처리하지 않아도 된다.

</details>

<br/>

### 다음 렌더링 전에 동일한 state 변수를 여러 번 업데이트 하려면?

```
setNumber(number + 1) 와 같이 다음 state 값을 전달하는 대신, setNumber(n => n + 1) 처럼 이전 큐의 state를 기반으로 다음 state를 계산하는 업데이터 함수를 전달한다.
```

<br/>

이벤트 핸들러가 완료되면 React는 리렌더링을 실행한다. 리렌더링하는 동안 React는 큐를 처리한다.

<br/>

⚠️ 업데이터 함수(`n => n + 1`)는 렌더링 중에 실행되므로, <b>업데이터 함수는 순수해야 하며 결과만 반환</b> 해야 한다. 업데이터 함수 내부에서 state를 변경하거나 다른 사이드 이팩트를 실행해서는 안 된다!

<br/>

## 6) 객체 State 업데이트하기

객체를 <b>변경</b>하는 대신 새로운 객체를 <b>생성</b>하여 state를 설정함으로써 리렌더링을 일으켜야 한다.

```
const [position, setPosition] = useState({ x: 0, y: 0 });

position.x = 5; ❌
setPosition({...position, x: 5}); ✅
```

<details>
<summary>여러 필드에 단일 이벤트 핸들러 사용하기 </summary>

<br/>

```
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value //⭐
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
```

</details>

<br/>

### 복잡한 state 구조, 편하게 중첩 전개하는 방법 없을까?

<details>
<summary>라이브러리 Immer</summary>

<br/>

```
import { useImmer } from 'use-immer';

export default function Form() {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  );
}
```

→ Immer는 업데이트 핸들러를 간결하게 관리할 수 있으며 특히 state가 중첩되어 있고 객체를 복사하는 것이 중복되는 코드를 만들 때 유용하다.

 </details>

 <br/>

## 7) 배열 State 업데이트하기

배열을 업데이트할 때마다 배열을 변경하는 것이 아니라 새 배열을 state 설정 함수에 전달해야 한다.

|           | 원본 배열을 수정하지 않고 새 배열 반환 |
| :-------: | :------------------------------------: |
| 항목 추가 |          `concat`, `[...arr]`          |
| 항목 제거 |           `filter`, `slice`            |
| 항목 교체 |                 `map`                  |

<details>
<summary>ex)</summary>

<br/>

```
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter(p =>
      p.count > 0
    );
    setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

```

</details>
