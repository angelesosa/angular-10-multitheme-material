export interface IFilter {
  key: string;
  label: string;
  hasOption?: boolean;
  options?: IOption[];
  hint?: string;
}

export interface IOption {
  key: string;
  label: string;
}


