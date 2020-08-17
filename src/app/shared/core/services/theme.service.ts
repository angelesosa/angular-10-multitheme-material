import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {

	static keyStorage = 'apptheme';
	constructor(
		@Inject(DOCUMENT) private document: Document,
		private lsSvc: LocalStorageService
	) {}

	apply(nameTheme: string) {
		this.document.body.className = `mat-app-background ${nameTheme}`;
		this.lsSvc.setItem(ThemeService.keyStorage, nameTheme);
	}

	current() {
		return this.lsSvc.getItem(ThemeService.keyStorage);
	}

	reset() {
		this.document.body.className = 'mat-app-background';
		this.lsSvc.remove(ThemeService.keyStorage);
	}
}
