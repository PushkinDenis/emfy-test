import {
  ISendRequestOptions,
  fetchLeadsOptions,
  ILeadsResponse,
  fetchTotalLeadsOptions,
  fetchLeadByIdOptions,
} from '@/api';

// import { ACCESS_TOKEN } from '@constants';

interface ISendRequestProps {
  options: ISendRequestOptions;
  body?: unknown;
  param?: unknown;
}

export const sendRequest = async <R>({ options, body }: ISendRequestProps): Promise<R> => {
  const { method, path, param = '' } = options;
  const ACCESS_TOKEN =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIwZjBmNzhiOTJmNWQyMDNkYWM5NGE1MjFkZmRjNzVlZWI0M2MxNGE4YWEwZDFhZDZkOTFmODE5MjMzOWU0MjQzMjNkMzkxNjY2OTk5Zjc2In0.eyJhdWQiOiJkYjExMjhlYi04OTFjLTQwODgtOWFhZS1mN2M0ZWUxMzJiNmMiLCJqdGkiOiIyMGYwZjc4YjkyZjVkMjAzZGFjOTRhNTIxZGZkYzc1ZWViNDNjMTRhOGFhMGQxYWQ2ZDkxZjgxOTIzMzllNDI0MzIzZDM5MTY2Njk5OWY3NiIsImlhdCI6MTcyNjAyMDcwMCwibmJmIjoxNzI2MDIwNzAwLCJleHAiOjE3MjYxMDcxMDAsInN1YiI6IjExNDkyNTgyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTM5OTQyLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiYTk3ZjJkMjEtOTM2YS00YmU2LWI3YTQtYjgxMWIyYmRmNWJiIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.LMyacgFBBUF3_2pteZlA03gbwWOXqw65jVPqVnnQKd59LQnU5yACBe5zCZUyFHQTijm1HeK3Mym6KkpBxLFZL4ytqCGs8S51DckiUoiLidseRk3r04qmhRh5oEHJEtGSjYEjZz0oHJOEgHRHu3WVPTXsbWuE4W1pIXY3b6VymIxmmz5-4uLNbgwzaFvi4eabSRD5O_R49BsPLe3Psccy3t1RWgqOmkkxhOgi24jUPNzPEs_dQ8UeWIYUWxk26b9sZwUOMjAAriTbtzehqIujouJUgJRgiPej8JikUpINrgfLYQixLB2eB4REOwWLVFFDxdVr20ePsqrbA2vZ1_TgrQ';
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
