import { Page } from '@strapi/strapi/admin';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Route, Routes } from 'react-router-dom';

import { DetailPage } from './DetailPage';
import { OverviewPage } from './OverviewPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path={`/`} index Component={OverviewPage} />
          <Route path={`/:documentId`} Component={DetailPage} />
          <Route path={`/*`} Component={Page.Error} />
        </Routes>
      </DndProvider>
    </QueryClientProvider>
  );
};

export default App;
