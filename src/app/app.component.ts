import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

interface ArreglitoItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-avanzado';
  condition = true;
  opciones: string[] = ['Carolina', 'Tata', 'Marciela', 'Ferxxo'];
  selectedOption = 'Ferxxo';
  arreglito: ArreglitoItem[] = [
    { id: 1, name: 'uno' },
    { id: 2, name: 'dos' },
    { id: 3, name: 'tres' },
    { id: 4, name: 'cuatro' },
  ];

  trackByFn(item: any) {
    return item.id;
  }
}
