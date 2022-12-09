import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Buscador CIP', url: '/buscador', icon: 'search' },
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Servicios', url: '/folder/Servicios', icon: 'layers' },
    { title: 'Capítulos', url: '/folder/Capítulos', icon: 'list' },
    { title: 'Equipo', url: '/folder/Equipo', icon: 'people' },
    { title: 'Contacto', url: '/folder/Contacto', icon: 'search' },
  ];
  public labels = [ 'Login',  '/folder/Login',  'log-in'];
  constructor() {}
}
