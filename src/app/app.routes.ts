import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./app.component').then(m => m.AppComponent)
    },
    {
        path: 'sonar',
        loadComponent: () => import('./sonar-demo/sonar-demo.component').then(m => m.SonarDemoComponent)
    },
];
