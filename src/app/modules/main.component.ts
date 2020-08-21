import { Component, OnInit } from '@angular/core';
import { IProject } from '@common/models/project';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  menuGroupListOpened = true;
  sideNavOpened = true;
  menuGroups = [
    {
      menuid: '1',
      name: 'Pagina principal',
      items: [
        { icon: 'home', link: '/home', label: 'Home' },
        { icon: 'person_pin_circle', link: '/countries', label: 'Countries' },
        { icon: 'memory', link: '/products', label: 'Products' },
        { icon: 'highlight_alt', link: '/tabexample', label: 'Tabs Example' },
      ],
    },
    {
      menuid: '2',
      name: 'Cloud build',
      items: [
        {
          icon: 'anchor',
          link: 'homeXz',
          label: 'Panel',
        },
        {
          icon: 'assignment',
          link: 'securityQW',
          label: 'Historial',
        },
        {
          icon: 'book_online',
          link: 'homeXz',
          label: 'Activadores',
        },
        {
          icon: 'comment_bank',
          link: 'securityQW',
          label: 'Configuracion',
        },
      ],
    },
    {
      menuid: '3',
      name: 'Kubernetes engine',
      items: [
        {
          icon: 'compare_arrows',
          link: 'homeXz',
          label: 'Clusteres',
        },
        {
          icon: 'event_seat',
          link: 'securityQW',
          label: 'Cargas de trabajo',
        },
        {
          icon: 'highlight_alt',
          link: 'homeXz',
          label: 'Ingress y servicios',
        },
        {
          icon: 'important_devices',
          link: 'securityQW',
          label: 'Aplicaciones',
        },
      ],
    },
    {
      menuid: '4',
      name: 'Container registry',
      items: [
        {
          icon: 'mediation',
          link: 'homeXzasd',
          label: 'Imagenes',
        },
        {
          icon: 'play_for_work',
          link: 'securityQWasdasd',
          label: 'Configuracion',
        },
      ],
    },
    {
      menuid: '5',
      name: 'Compute Engine',
      items: [
        {
          icon: 'published_with_changes',
          link: 'homeXzasdasd',
          label: 'Instancias de VM',
        },
        {
          icon: 'settings_brightness',
          link: 'securityQWasdaasdassd',
          label: 'Grupos de instancias',
        },
        {
          icon: 'swap_horiz',
          link: 'homeXasdzasdasd',
          label: 'Plantillas de instancias',
        },
        {
          icon: 'timeline',
          link: 'securiasdtyQWasdaasdassd',
          label: 'Nodos de usuarios unicos',
        },
      ],
    },
    {
      menuid: '6',
      name: 'Deployment manager',
      items: [
        {
          icon: 'wifi_protected_setup',
          link: 'homeasdXzasdasd',
          label: 'Implementaciones',
        },
        {
          icon: 'airplay',
          link: 'secuasdrityQWasdaasdassd',
          label: 'Registro de tipos',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  menuGroupListOpenedChange(opened: boolean) {
    this.menuGroupListOpened = opened;
  }

  sideNavOpenedChange(opened: boolean) {
    this.sideNavOpened = opened;
  }

  onChangeProjectSelected(project: IProject) {
    console.log(project);
  }
}
