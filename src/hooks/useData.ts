import { useAtom } from 'jotai';

import { fetchData } from '../api/fetchData';
import { loadingAtom } from '../atoms/loading';

export const useConfig = () => {
  const [loading, setLoading] = useAtom(loadingAtom);

  const loadData = async () => {
    setLoading(true);
    await fetchData()
      .then((res) => {
        if (res) {
          console.log('loadData', res);
        }
      })
      .catch((err) => {
        console.error('loadData', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loadData };
};
