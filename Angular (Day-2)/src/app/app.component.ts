import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { PhotoFrameComponent } from '../photo-frame/photo-frame.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, PhotoFrameComponent],
  template: `<FormComponent />`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shrey Prajapati';
}
