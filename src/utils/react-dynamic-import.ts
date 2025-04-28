
import { lazy, Suspense } from 'react';

const dynamic = (importFunc: () => Promise<any>, { ssr = true, loading }: { ssr?: boolean, loading?: () => JSX.Element } = {}) => {
  const LazyComponent = lazy(importFunc);
  
  return (props: any) => (
    <Suspense fallback={loading ? loading() : <div>Loading...</div>}>
      {(!ssr && typeof window === 'undefined') ? null : <LazyComponent {...props} />}
    </Suspense>
  );
};

export default dynamic;
