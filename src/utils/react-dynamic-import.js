
import { lazy, Suspense } from 'react';

const dynamic = (importFunc, { ssr = true, loading } = {}) => {
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={loading ? loading() : <div>Loading...</div>}>
      {(!ssr && typeof window === 'undefined') ? null : <LazyComponent {...props} />}
    </Suspense>
  );
};

export default dynamic;
