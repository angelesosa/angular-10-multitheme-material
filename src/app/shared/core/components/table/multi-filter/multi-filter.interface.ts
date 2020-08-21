export interface IFilter {
  id: string;
  name: string;
  hasOption?: boolean;
  options?: IOption[];
  reglas?: string;
}

export interface IOption {
  id: string;
  name: string;
}


