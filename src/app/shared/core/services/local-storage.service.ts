import { Injectable } from '@angular/core';
import { isObject } from '../core-util';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	constructor() {}

	setItem(key: any, value: any, jsonParse = false): void {
		if (!key) throw new Error('key is required');
    if(jsonParse) {
      value = JSON.stringify(value);
    }
		localStorage.setItem(key, btoa(value));
	}

	getItem(key: string, jsonParse = false) {
		if (!key) throw new Error('key is required');
		const value = localStorage.getItem(key);
		if (!value) return undefined;
		return jsonParse ? JSON.parse(atob(value)) : atob(value);
	}

	remove(key: string) {
		if (!key) throw new Error('key is required');
		localStorage.removeItem(key);
	}
}
