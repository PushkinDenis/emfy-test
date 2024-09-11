import { ISendRequestOptions, fetchLeadsOptions, ILeadsResponse } from '@/api';
import { ACCESS_TOKEN } from '@constants';

interface ISendRequestProps {
  options: ISendRequestOptions;
  body?: unknown;
}

export const sendRequest = async <R>({ options, body }: ISendRequestProps): Promise<R> => {
  const { method, path } = options;

  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  });

  const url = `https://thingproxy.freeboard.io/fetch/https://denisp9831.amocrm.ru/`;

  const response = await fetch(`${url}${path}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};

export const fetchLeads = async (): Promise<ILeadsResponse> => {
  return await sendRequest<ILeadsResponse>({
    options: fetchLeadsOptions,
  });
};
// const subdomain = 'denisp9831';
//const url = `https://cors-anywhere.herokuapp.com/https://${subdomain}.amocrm.ru/${}`;
