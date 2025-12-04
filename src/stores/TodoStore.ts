import { action, computed, makeObservable, observable } from 'mobx';

export type TodoFilter = 'all' | 'active' | 'completed';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
}

export class TodoStore {
  todos: Todo[] = [];
  filter: TodoFilter = 'all';

  constructor() {
    makeObservable(this, {
      todos: observable,
      filter: observable,
      hasTodos: computed,
      completedCount: computed,
      remainingCount: computed,
      completionRate: computed,
      filteredTodos: computed,
      addTodo: action,
      toggleTodo: action,
      updateTitle: action,
      removeTodo: action,
      clearCompleted: action,
      setFilter: action,
    });
  }

  get hasTodos() {
    return this.todos.length > 0;
  }

  get completedCount() {
    return this.todos.filter((todo) => todo.completed).length;
  }

  get remainingCount() {
    return this.todos.length - this.completedCount;
  }

  get completionRate() {
    if (this.todos.length === 0) return 0;
    return Math.round((this.completedCount / this.todos.length) * 100);
  }

  get filteredTodos() {
    if (this.filter === 'active') {
      return this.todos.filter((todo) => !todo.completed);
    }
    if (this.filter === 'completed') {
      return this.todos.filter((todo) => todo.completed);
    }
    return this.todos;
  }

  addTodo = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    const id =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2);

    this.todos.push({
      id,
      title: trimmed,
      completed: false,
      createdAt: Date.now(),
    });
  };

  toggleTodo = (id: string) => {
    const todo = this.todos.find((item) => item.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };

  updateTitle = (id: string, title: string) => {
    const todo = this.todos.find((item) => item.id === id);
    if (todo) {
      todo.title = title.trim();
    }
  };

  removeTodo = (id: string) => {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  };

  clearCompleted = () => {
    this.todos = this.todos.filter((todo) => !todo.completed);
  };

  setFilter = (filter: TodoFilter) => {
    this.filter = filter;
  };
}

export const todoStore = new TodoStore();
