export interface IFilter {
  id: string;
  name: string;
  hasOption?: boolean;
  options?: IOption[];
}

export interface IOption {
  id: string;
  name: string;
}


