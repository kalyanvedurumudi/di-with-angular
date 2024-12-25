import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sample-app';
  private sampleService = inject(SampleService);

  constructor() {
    this.sampleService.sayHello();
    new SampleService().sayHello();

  }
}
