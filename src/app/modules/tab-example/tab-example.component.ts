import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-example',
  templateUrl: './tab-example.component.html',
  styleUrls: ['./tab-example.component.scss']
})
export class TabExampleComponent implements OnInit {

    navLinks = [
    {
      label: 'General',
      link: '/tabexample/tabone',
    },
    {
      label: 'Usuarios y Permisos',
      link: '/tabexample/tabtwo',
    },
    {
      label: 'Roles',
      link: '/tabexample/tabthree',
    },
    {
      label: 'Privilegios',
      link: '/tabexample/tabthree',
    },
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.router.navigate(['tabexample/tabone']);
  }

}
