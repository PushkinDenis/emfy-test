import { ISendRequestOptions } from '@/api/types';

interface ILead {
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

export const fetchLeadsOptions: ISendRequestOptions = {
  method: 'GET',
  path: '/api/v4/leads',
};
