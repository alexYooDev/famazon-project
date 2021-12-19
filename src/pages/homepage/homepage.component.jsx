import React, { Suspense } from 'react';

import './homepage.styles.scss';

const Directory = React.lazy(() =>
  import('../../components/directory/directory.component')
);

const HomePage = () => (
  <div className='homepage'>
    <Suspense fallback={<div>loading...</div>}>
      <Directory />
    </Suspense>
  </div>
);
export default HomePage;
