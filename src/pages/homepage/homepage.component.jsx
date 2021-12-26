import React, { Suspense } from 'react';
import { HomePageContainer } from './homepage.styles';

const Directory = React.lazy(() =>
  import('../../components/directory/directory.component')
);

const HomePage = () => (
  <HomePageContainer>
    <Suspense fallback={<div>loading...</div>}>
      <Directory />
    </Suspense>
  </HomePageContainer>
);

export default HomePage;
