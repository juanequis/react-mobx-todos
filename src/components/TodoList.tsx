import TodoItem from './TodoItem';
import { observer } from 'mobx-react-lite';
import { useTodoStore } from '../stores/TodoContext';

const TodoList = observer(() => {
  const store = useTodoStore();

  if (!store.hasTodos) {
    return <p className="empty">Start by adding a todo.</p>;
  }

  if (store.filteredTodos.length === 0) {
    return <p className="empty">Nothing matches this filter.</p>;
  }

  return (
    <ul className="todo-list">
      {store.filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});

export default TodoList;
