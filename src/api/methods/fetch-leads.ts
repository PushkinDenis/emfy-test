import { ISendRequestOptions } from '@/api/types';

export interface ILead {
  account_id: number;
  closed_at: null;
  closest_task_at: number;
  created_at: number;
  created_by: number;
  custom_fields_values: null;
  group_id: number;
  id: number;
  is_deleted: false;
  labor_cost: null;
  loss_reason_id: null;
  name: 'Сделка #24953739';
  pipeline_id: number;
  price: number;
  responsible_user_id: number;
  score: null;
  status_id: number;
  updated_at: number;
  updated_by: number;
}

export interface IEmbeddedLeads {
  leads: ILead[];
}

export interface ILinks {
  self: {
    href: string;
  };
}

export interface ILeadsResponse {
  _page: number;
  _links: ILinks;
  _embedded: IEmbeddedLeads;
}

interface IFetchLeadById {
  method: 'GET';
  path: string;
}

export const fetchTotalLeadsOptions: ISendRequestOptions = {
  method: 'GET',
  path: '/api/v4/leads',
};

export const fetchLeadsOptions = (param: string): ISendRequestOptions => ({
  method: 'GET',
  path: `/api/v4/leads?limit=3&page=`,
  param: param,
});

export const fetchLeadByIdOptions = (id: string): IFetchLeadById => ({
  method: 'GET',
  path: `/api/v4/leads/${id}`,
});
