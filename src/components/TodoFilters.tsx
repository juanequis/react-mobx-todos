import { observer } from 'mobx-react-lite';
import { todoStore } from '../stores/TodoStore';
import type { TodoFilter } from '../stores/TodoStore';

const FILTERS: { value: TodoFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

const TodoFilters = observer(() => {
  const store = todoStore;

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
