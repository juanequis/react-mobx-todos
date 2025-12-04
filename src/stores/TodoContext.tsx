import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { TodoStore } from './TodoStore';

const TodoStoreContext = createContext<TodoStore | null>(null);

type ProviderProps = {
  value: TodoStore;
  children: ReactNode;
};

export function TodoStoreProvider({ value, children }: ProviderProps) {
  return <TodoStoreContext.Provider value={value}>{children}</TodoStoreContext.Provider>;
}

export function useTodoStore(): TodoStore {
  const store = useContext(TodoStoreContext);
  if (!store) {
    throw new Error('TodoStore missing from context. Wrap components in <TodoStoreProvider>.');
  }
  return store;
}
