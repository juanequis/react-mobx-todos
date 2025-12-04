import { FormEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { todoStore } from '../stores/TodoStore';

const TodoInput = observer(() => {
  const [title, setTitle] = useState('');
  

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    todoStore.addTodo(title);
    setTitle('');
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo and hit Enter"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
})

export default TodoInput;
