import axios from 'axios';

import { API_URL } from './API';

export type IData = {
  id: number;
};

export type IDataApiResponse = {
  data: IData[];
  meta: {
    count: number;
  };
};

export const fetchData = async () => {
  const endpoint = `${API_URL}`;

  const headers = {
    accept: 'text/plain',
    'Cache-Control': 'no-cache',
  };

  const response = await axios.get<IDataApiResponse>(endpoint, {
    headers,
  });
  return response.data;
};
