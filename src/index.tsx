import { createRoot } from 'react-dom/client';

import { StoreProvider } from '@/app/providers/StoreProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

import App from './app/App';
import '@/app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Root container was not found. It was not possible to mount the React application'
  );
}

const root = createRoot(container);

root.render(
  <StoreProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StoreProvider>
);
