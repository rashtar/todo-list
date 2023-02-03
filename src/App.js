import './App.css';
import { Container,Row } from 'react-bootstrap';
import { TodoInput } from './components/TodoInput';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TodoList } from './components/TodoList';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MainPage } from './pages/MainPage';

const queryClient = new QueryClient()
 
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
