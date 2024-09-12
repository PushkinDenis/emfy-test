import {
  ISendRequestOptions,
  fetchLeadsOptions,
  ILeadsResponse,
  fetchTotalLeadsOptions,
  fetchLeadByIdOptions,
} from '@/api';
import { ACCESS_TOKEN } from '@constants';

interface ISendRequestProps {
  options: ISendRequestOptions;
  body?: unknown;
  param?: unknown;
}

export const sendRequest = async <R>({ options, body }: ISendRequestProps): Promise<R> => {
  const { method, path, param = '' } = options;

  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  });

  const url = `https://thingproxy.freeboard.io/fetch/https://denisp9831.amocrm.ru/`;

  const response = await fetch(`${url}${path}${param}`, {
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

export const fetchTotalLeads = async (): Promise<ILeadsResponse> => {
  return await sendRequest<ILeadsResponse>({
    options: fetchTotalLeadsOptions,
  });
};

export const fetchLeads = async (param: string): Promise<ILeadsResponse> => {
  const options = fetchLeadsOptions(param);

  return await sendRequest<ILeadsResponse>({
    options: options,
  });
};

export const fetchLeadById = async (id: string): Promise<ILeadsResponse> => {
  const options = fetchLeadByIdOptions(id);

  return await sendRequest<ILeadsResponse>({
    options: options,
  });
};

// const subdomain = 'denisp9831';
//const url = `https://cors-anywhere.herokuapp.com/https://${subdomain}.amocrm.ru/${}`;
