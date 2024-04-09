import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardChildComponent } from './components/dashboard-child/dashboard-child.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DashboardChildComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  text = 'Voy a cambiar en 5s!';
  text2 = 'Pulsa el botón para cambiar el texto';

  handleButtonClick() {
    this.text2 = 'Texto cambiado con éxito! Padre';
  }

  constructor(cd: ChangeDetectorRef) {
    setTimeout(() => {
      this.text = 'He cambiado mi texto!';
      cd.detectChanges();
    }, 5000);
  }
}
