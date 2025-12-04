import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import type { Todo } from '../stores/TodoStore';
import { todoStore } from '../stores/TodoStore';

type Props = {
  todo: Todo;
};

const TodoItem = observer(({ todo }: Props) => {
  const store = todoStore;
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(todo.title);

  useEffect(() => {
    setDraftTitle(todo.title);
  }, [todo.title]);

  const commitEdit = () => {
    store.updateTitle(todo.id, draftTitle);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'done' : ''}`}>
      <label className="checkbox" aria-label="Toggle todo">
        <input type="checkbox" checked={todo.completed} onChange={() => store.toggleTodo(todo.id)} />
        <span></span>
      </label>

      {isEditing ? (
        <form
          className="edit-form"
          onSubmit={(event) => {
            event.preventDefault();
            commitEdit();
          }}
        >
          <input
            autoFocus
            value={draftTitle}
            onBlur={commitEdit}
            onChange={(event) => setDraftTitle(event.target.value)}
          />
        </form>
      ) : (
        <button className="title" type="button" onClick={() => setIsEditing(true)}>
          {todo.title}
        </button>
      )}

      <time className="meta" dateTime={new Date(todo.createdAt).toISOString()}>
        {new Date(todo.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </time>

      <button className="icon" type="button" aria-label="Delete todo" onClick={() => store.removeTodo(todo.id)}>
        ×
      </button>
    </li>
  );
});

export default TodoItem;
