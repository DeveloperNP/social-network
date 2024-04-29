import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader.tsx';

export const withSuspense = (Component) => {
  return (props) => {
    return <Suspense fallback={<Preloader />}>
      <Component {...props} />
    </Suspense>
  }
}