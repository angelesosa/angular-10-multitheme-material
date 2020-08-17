import { Component } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage.service';
import { ThemeService } from '@core/services/theme.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-multitheme-material';

	constructor(
		public lsSvc: LocalStorageService,
		public themeSvc: ThemeService,
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer,
	) {
    this.matIconRegistry.addSvgIcon(
			`chart-bubble`,
			this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/chart-bubble.svg`)
    );
    this.matIconRegistry.addSvgIcon(
			`shield-account`,
			this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/shield-account.svg`)
    );

	}

	ngAfterViewInit(): void {
		// cargando el tema configurado
		const theme = this.lsSvc.getItem(ThemeService.keyStorage);
    theme && this.themeSvc.apply(theme);
	}
}
