# State 관리하기[🔗](https://ko.react.dev/learn/managing-state)

## 1) State 사용해 Input 다루기

### UI를 선언적인 방식으로 생각하기

1️⃣ 컴포넌트의 다양한 시각적 state 확인하기

사용자가 볼 수 있는 UI의 모든 "state"를 시각화해야 한다.

```
- Empty: 폼의 비활성화된 제출 버튼
- Typing: 폼의 활성화된 제출 버튼
- Submitting: 폼은 비활성화되고 스피너 출력
- Success: 폼 대신 "감사합니다" 메세지
- Error: "Typing" state와 동일 + 오류메시지
```

<br/>

2️⃣ 무엇이 state 변화를 트리거하는지 알아내기

```
- human inputs: 버튼 클릭, 필드 입력, 링크 이동
- computer inputs: 네트워크 응답, 타임아웃, 이미지 로딩
```

<details><summary>ex)</summary>

- 텍스트 인풋을 변경하면(human) 텍스트 상자가 비었는지 여부에 따라 state를 Empty에서 Typing으로 또는 그 반대로 변경

- 제출 버튼을 클릭하면(human) Submitting state를 변경

- 네트워크 응답이 성공적으로 오면(computer) Success state를 변경

- 네트워크 요청이 실패하면(computer) 해당하는 오류 메세지와 함께 Error State를 변경

</details>

<br/>

3️⃣ 메모리의 state를 `useState`로 표현하기

`useState`를 사용하여 컴포넌트의 시각적 state를 표현한다. state는 적을수록 좋으니 반드시 필요한 state를 가지고 시작하는 것이 좋다.  
아직 잘 모르겠다면 가능한 모든 시각적 state를 커버할 수 있는 확실한 것을 state로 추가한다.

<details><summary>ex)</summary>

```
const [isEmpty, setIsEmpty] = useState(true);
const [isTyping, setIsTyping] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [isError, setIsError] = useState(false);
```

</details>

<br/>

4️⃣ 불필요한 state 변수 제거하기

state 구조를 리팩토링하면 컴포넌트는 더 이해하기 쉬워지고 불필요한 중복을 줄어들 것이다. 리팩토링의 목표는 <b>state가 사용자에게 유효한 UI를 보여주지 않는 경우를 방지하는 것이다.</b>

<details><summary>ex)</summary>

1.state가 역설을 일으키지는 않나요?

예를 들면 isTyping과 isSubmitting이 동시에 true일 수는 없다. 이러한 역설은 보통 state가 충분히 제한되지 않았음을 의미한다. 여기에는 두 boolean에 대한 네 가지 조합이 있지만 오직 유효한 state는 세 개뿐이다. 이러한 “불가능한” state를 제거하기 위해 세 가지 값 'typing', 'submitting', 'success'을 하나의 status로 합칠 수 있다.

2.다른 state 변수에 이미 같은 정보가 담겨있진 않나요?

isEmpty와 isTyping은 동시에 true가 될 수 없다. 이를 각각의 state 변수로 분리하면 싱크가 맞지 않거나 버그가 발생할 위험이 있다. 이 경우에는 isEmpty를 지우고 answer.length === 0으로 체크할 수 있다.

3.다른 변수를 뒤집었을 때 같은 정보를 얻을 수 있진 않나요?

isError는 error !== null로도 대신 확인할 수 있기 때문에 필요하지 않다.

📌 위 정리 과정을 거친 후의 변수들

```
const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);
const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'
```

</details>

<br/>

5️⃣ state 설정을 위해 이벤트 핸들러 연결하기

<details><summary>ex) 최종 폼</summary>

```
import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // 네트워크에 접속한다고 가정
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

```

</details>

<br/>

## 2) State 구조 선택하기

```
1. 연관된 state 그룹화하기
두 개 이상의 state 변수가 항상 함께 변경될 경우
```

```
2. State의 모순 피하기
여러 state 변수들이 모순되거나 불일치하지 않도록 구조 선택
```

```
3. 불필요한 state 피하기
렌더링 중에 컴포넌트의 props나 기존 state 변수로 계산 가능한 경우
```

```
4. State의 중복 피하기
여러 상태 변수 간 또는 중첩된 객체 내에서 동일한 데이터가 중복될 경우 동기화 유지가 어려움
```

```
5. 깊게 중첩된 state 피하기
깊게 계층화된 state는 업데이트가 쉽지 않으므로 가능한 평탄하게 state 구조 선택
```

<br/>

⚠️ Props를 state에 미러링하지 않기

```
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor); ❌
```

여기서 color state 변수는 messageColor prop로 초기화된다. 문제는 부모 컴포넌트가 나중에 다른 값의 messageColor를 전달한다면 (예를 들어, 'blue' 대신 'red'), color state 변수 가 업데이트되지 않는다! State는 첫 번째 렌더링 중에만 초기화되기 때문이다.
따라서 state 변수의 일부 prop을 미러링하는 것이 아니라 messageColor prop을 직접 사용하자! 더 짧은 이름을 지정하려면 상수 사용하기!

```
function Message({ messageColor }) {
  const color = messageColor; ✅
```

이렇게 수정하면 부모 컴포넌트에서 전달된 prop과 동기화를 잃지 않는다.

<br/>

prop을 상태로 '미러링'하는 것은 <b>특정 prop에 대한 모든 업데이트를 무시</b>하기 원할 때만 의미가 있다. 관례에 따라 prop 이름을 initial 또는 default로 시작하여 새로운 값이 무시됨을 명확히 한다.

```
function Message({ initialColor }) {
  const [color, setColor] = useState(initialColor);
```

<br/>

## 3) 컴포넌트 간 State 공유하기

<b>State 끌어올리기</b>  
두 컴포넌트의 state가 항상 함께 변경되기를 원할 때 가장 가까운 공통의 부모 컴포넌트로 state를 옮긴 후 두 컴포넌트에게 props로 전달한다.

<details><summary>ex)</summary>

두 패널 중 하나의 패널만 활성화되고, 이는 부모 컴포넌트에서 제어한다.

```
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

```

</details>

<br/>

## 4) State를 보존하고 초기화하기

리렌더링할 때 state를 유지하고 싶다면, <b>트리구조가 같아야 한다.</b>  
만약 구조가 다르다면 React가 트리에서 컴포넌트를 지울 때 state로 지우기 때문에 state가 유지되지 않는다.

```
- React는 같은 컴포넌트가 같은 자리에 렌더링될 때 state를 유지한다.
- state는 JSX 태그에 저장되는 것이 아니다. JSX으로 만든 트리 위치와 연관있다.
- 중첩해서 컴포넌트를 정의하면 원치 않게 state가 초기화될 수 있다.
- 컴포넌트에 다른 key를 주어서 그 하위 트리를 초기화하도록 할 수 있다.
```

```
📌 key를 명시하면 React는 부모 내에서의 순서 대신에 key 자체를 위치의 일부로 사용한다. 주의할 점은 key는 전역적으로 유일하지 않다는 것이다.
key는 오직 부모 안에서만 자리를 명시한다.
```

<details><summary>ex) 두 Field 컴포넌트 맞바꾸기</summary>

```
import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field key="lastName"✨ label="Last name" />
        <Field key="firstName"✨ label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key="firstName"✨ label="First name" />
        <Field key="lastName"✨ label="Last name" />
        {checkbox}
      </>
    );
  }
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}
```

`if`와 `else`문 안의 두 `<Field>` 컴포넌트에게 key를 준다. 이로써 부모 안에서의 순서가 바뀌더라도 React에게 각 `<Field>`의 올바른 state를 어떻게 “맞출지” 알려줄 수 있다.

</details>

<details><summary>ex) 다음 이미지가 로딩 중일 때 이전 이미지 안 보이게 하기</summary>

```
import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <img key={image.src}✨ src={image.src} />
      <p>
        {image.place}
      </p>
    </>
  );
}

let images = [{
  place: 'Penang, Malaysia',
  src: 'https://i.imgur.com/FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: 'https://i.imgur.com/dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: 'https://i.imgur.com/z08o2TS.jpg'
}];
```

Next 버튼을 클릭하고 다음 이미지가 불러와지는 동안 기존 이미지가 보이면 안 된다. React가 DOM을 재사용하지 않고 새로 만들게 할 수 있는 방법은?

`<img>` 태그에 key를 준다. key가 바뀌면 React는 `<img>` DOM 노드를 새로 다시 만든다. 이미지를 불러오는 동안 이미지가 잠깐 깜박이는데 앱의 모든 이미지가 이처럼 작동하기를 원하지는 않을 것이다. 하지만 이미지와 설명이 항상 일치하도록 할 때는 일리 있는 방법이다.

</details>

<br/>

## 5) State 로직을 reducer로 작성하기

한 컴포넌트에서 state 업데이트가 여러 이벤트 핸들러로 분산되는 경우가 있다. 이 경우 컴포넌트를 관리하기 어려워진다. 따라서, 이 문제 해결을 위해 state를 업데이트하는 모든 로직을 reducer를 사용해 컴포넌트 외부로 단일 함수로 통합해 관리할 수 있다.

### 1️⃣ 변경: state 설정 ➡️ action을 dispatch 함수로 전달

<details><summary>ex)</summary>

before: state 설정

```
function handleAddTask(text) {
  setTasks([...tasks, {
    id: nextId++,
    text: text,
    done: false
  }]);
}

function handleChangeTask(task) {
  setTasks(tasks.map(t => {
    if (t.id === task.id) {
      return task;
    } else {
      return t;
    }
  }));
}

function handleDeleteTask(taskId) {
  setTasks(
    tasks.filter(t => t.id !== taskId)
  );
}
```

<br/>
after: action을 dispatch 함수로 전달

```
function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId
  });
}
```

`dispatch` 함수 안의 객체를 "action"이라고 한다. action 객체는 어떤 형태든 될 수 있다. 일반적으로는 발생한 일을 설명하는 문자열 type 을 넘겨주고 이외의 정보는 다른 필드에 담아서 전달하도록 작성한다. type은 컴포넌트에 따라 값이 다르며 이 예시의 경우 'added' 또는 'added_task'가 들어갈 수 있다. 무슨 일이 일어나는지 설명할 수 있는 이름이면 충분하다.

</details>

<br/>

### 2️⃣ reducer 함수 작성

reducer 함수는 state에 대한 로직을 넣는 곳이다. 이 함수는 현재의 state 값과 action 객체, 이렇게 두 개의 인자를 받고 다음 state 값을 반환한다.

```
function yourReducer(state, action) {
  // React가 설정하게될 다음 state 값을 반환
}
```

<details><summary>ex)</summary>

```
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
```

reducer 함수는 state(`tasks`)를 인자로 받고 있기 때문에, 이를 컴포넌트 외부에서 선언할 수 있다. 이렇게 하면 들여쓰기 수준이 줄어들고 코드를 더 쉽게 읽을 수 있다.

</details>

<br/>

### 3️⃣ 컴포넌트에서 reducer 사용

React에서 `useReducer` hook 불러와서 사용하기

```
import { useReducer } from 'react';
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
```

<br/>

`useReducer` 훅은 두 개의 인자를 받는다.

```
1. reduer 함수
2. 초기 state 값
```

그리고 아래와 같이 반환한다.

```
1. state를 담을 수 있는 값
2. dispatch 함수 (사용자의 action을 reducer 함수에게 “전달하게 될”)
```

<details><summary>ex)</summary>

```
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];
```

</details>

<br/>

### 📌 reducer 잘 작성하기

```
1. Reducers는 반드시 순수해야 한다.
reducer는 렌더링 중에 실행된다! (action은 다음 렌더링까지 대기) 입력 값이 같다면 결과 값도 항상 같아야 한다. 요청을 보내거나 timeout을 스케쥴링하거나 사이드 이펙트(컴포넌트 외부에 영향을 미치는 작업)을 수행해서는 안 된다. 오직 다음 state값을 계산하기 위한 작업만 해야 하고 reducer는 objects와 arrays을 변이 없이 업데이트해야 한다.

2. 각 action은 단일 사용자 상호작용을 설명해야 한다.
예를 들어, 사용자가 reducer가 관리하는 5개의 필드가 있는 양식에서 ‘재설정’을 누른 경우, 5개의 개별 set_field action보다는 하나의 reset_form action을 전송하는 것이 더 합리적이다. 모든 action을 reducer에 기록하면 어떤 상호작용이나 응답이 어떤 순서로 일어났는지 재구성할 수 있을 만큼 로그가 명확해야 한다. 이는 디버깅에 도움이 된다!
```

<br/>
