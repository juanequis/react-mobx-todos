import TodoFilters from './components/TodoFilters';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import { observer } from 'mobx-react-lite';
import { useTodoStore } from './stores/TodoContext';

const App = observer(() => {
  const store = useTodoStore();

  return (
    <div className="page">
      <main className="app-shell">
        <header className="hero">
          <div>
            <p className="eyebrow">MobX ready</p>
            <h1>Todo Lab (your turn)</h1>
            <p className="lede">Plain React state for now—swap in MobX observables, actions, and computed values.</p>
          </div>
          <div className="hero-card">
            <div>
              <p className="label">Observables</p>
              <strong>{store.todos.length} tasks</strong>
            </div>
            <div>
              <p className="label">Computed</p>
              <strong>{store.completionRate}% complete</strong>
            </div>
          </div>
        </header>

        <section className="panel">
          <TodoInput />
          <TodoFilters />
        </section>

        <section className="panel">
          <TodoList />
          <TodoStats />
        </section>
      </main>
    </div>
  );
});

export default App;
