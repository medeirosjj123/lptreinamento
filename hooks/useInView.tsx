
import { useState, useEffect, useRef, RefObject } from 'react';

const useInView = (ref: RefObject<Element>, options?: IntersectionObserverInit): boolean => {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    const { current: observer } = observerRef;
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if(currentRef) {
        observer.disconnect();
      }
    };
  }, [ref, options]);

  return isInView;
};

export default useInView;
