import path from "path";

export interface ISoul {
  name: string;
  address: string;
  img?: any;
  totalAum?: number;
  members?: number;
  diversity?: number;
  cases?: number;
  positive?: number;
  negative?: number;
  upvotes?: number;
  downvotes?: number;
  pending?: number;
  denied?: number;
}

export interface IModule {
  name: string;
  amountProjects: number;
  img?: any;
}

export interface IJurisdiction {
  name: string;
  address: string;
  slogan?: string;
  img?: any;
  pending: number;
  positive: number;
  negative: number;
  denied: number;
  upvotes: number;
  downvotes: number;
  cases?: object[];
  officials?: object[];
  citizen?: object[];
  rules?: object[];
}

export interface ILinks {
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface ISoulProfile {
  soul: ISoul;
  description?: string;
  links?: ILinks;
}
