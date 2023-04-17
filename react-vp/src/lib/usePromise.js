/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useState } from 'react';

export default function usePromise(promiseCraetor, deps) {
  // 대기중, 완료, 실패 결과
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCraetor();
        setResolved(resolved);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
}
