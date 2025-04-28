
import React, { lazy, Suspense, ComponentType } from 'react';

interface DynamicOptions {
  ssr?: boolean;
  loading?: () => JSX.Element;
}

function dynamic<T extends object = any>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  { ssr = true, loading }: DynamicOptions = {}
): React.FC<T> {
  const LazyComponent = lazy(importFunc);
  
  return function DynamicComponent(props: T): JSX.Element {
    return (
      <Suspense fallback={loading ? loading() : <div>Loading...</div>}>
        {(!ssr && typeof window === 'undefined') ? null : <LazyComponent {...props as any} />}
      </Suspense>
    );
  };
}

export default dynamic;
