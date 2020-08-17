import { IMenu } from './menu';

export interface IMenuGroup {
  menuid: string;
	name: string;
	items: IMenu[];
}
