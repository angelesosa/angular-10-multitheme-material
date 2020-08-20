import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  ViewEncapsulation,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges,
  HostBinding,
} from '@angular/core';
import { IMenu } from '@common/models/menu';
import { RouterLinkActive, Router } from '@angular/router';
import {
  MatTooltipDefaultOptions,
  MAT_TOOLTIP_DEFAULT_OPTIONS,
} from '@angular/material/tooltip';
import { LocalStorageService } from '@core/services/local-storage.service';

@Component({
  selector: 'app-side-nav-menu-group',
  templateUrl: './side-nav-menu-group.component.html',
  styleUrls: ['./side-nav-menu-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavMenuGroupComponent implements OnInit {
  keyStorage = 'M3nU';
  showSubmenu: boolean = false;
  summary = '';
  @Input() menuid: string = '';
  @Input() name: string = '';
  @Input() items: IMenu[] = [];
  @Input() menuGroupListOpened: boolean = true;
  @Input() showChanges: boolean = false;
  @HostBinding('class.sidenav__menugroup__pinned') pinned: boolean = false;

  constructor(
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private lsSvc: LocalStorageService
  ) {}

  ngOnInit(): void {
    // resumen del menu
    this.summary = this.items.map((i) => i.label).join(', ');

    // validamos si tenemos un favorito para fijarlo
    const menuPinnedLs = this.lsSvc.getItem(this.keyStorage, true);
    if(!menuPinnedLs) return;
    this.pinned = menuPinnedLs.includes(this.menuid);
  }

  ngAfterViewInit() {
    const itemActive = this.items.find((i) =>
      this.router.isActive(i.link, false)
    );
    if (itemActive) {
      this.showSubmenu = true;
      this.cdRef.detectChanges();
    }
  }

  onclickMenu(event) {
    // validamos si ha dado click al pin
    if (
      event.target.classList.contains('sidenav__menugroup__icon__favorite') &&
      this.menuid
    ) {
      this.pinned = !this.pinned;
      this.pinned ? this.addMenuLocalStorage() : this.removeMenuLocalStorage();
      return;
    }
    this.showSubmenu = !this.showSubmenu;
  }

  runChangeDetection() {
    if (!this.showChanges) return '';
    console.info('SideNavMenuComponent - Checking the view', this.menuid);
  }

  addMenuLocalStorage() {
    let menuPinnedLs = this.lsSvc.getItem(this.keyStorage, true) || [];
    menuPinnedLs.push(this.menuid);
    this.lsSvc.setItem(this.keyStorage, menuPinnedLs, true);
  }

  removeMenuLocalStorage() {
    this.lsSvc.remove(this.keyStorage);
  }
}
