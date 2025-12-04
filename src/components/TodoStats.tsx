import { observer } from 'mobx-react-lite';
import { todoStore } from '../stores/TodoStore';

const TodoStats = observer(() => {
  const store = todoStore;

  return (
    <div className="stats">
      <div>
        <p className="label">Open</p>
        <strong>{store.remainingCount}</strong>
      </div>
      <div>
        <p className="label">Completed</p>
        <strong>{store.completedCount}</strong>
      </div>
      <div>
        <p className="label">Progress</p>
        <div className="progress">
          <span style={{ width: `${store.completionRate}%` }} />
          <small>{store.completionRate}%</small>
        </div>
      </div>
      <div className="actions">
        <button type="button" onClick={() => store.clearCompleted()} disabled={!store.completedCount}>
          Clear completed
        </button>
      </div>
    </div>
  );
});

export default TodoStats;
