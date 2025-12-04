import { observer } from 'mobx-react-lite';
import type { TodoFilter } from '../stores/TodoStore';
import { useTodoStore } from '../stores/TodoContext';

const FILTERS: { value: TodoFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

const TodoFilters = observer(() => {
  const store = useTodoStore();

  return (
    <div className="filters">
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          className={filter.value === store.filter ? 'active' : ''}
          type="button"
          onClick={() => store.setFilter(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
});

export default TodoFilters;
