import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.scss'],
})
export class DashboardChildComponent implements OnInit {
  @Input() text: string = '';
  @Input() text2: string = '';
  @Output() text2Change = new EventEmitter<string>();

  constructor() {}

  handleButtonClick() {
    this.text2 = 'Texto cambiado con éxito! Hijo';
    this.text2Change.emit(this.text2);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambio en el DashboardChildComponent');
  }

  ngOnInit() {
    console.log('Inicializado el DashboardChildComponent');
  }
}
