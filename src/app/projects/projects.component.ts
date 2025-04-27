import { Component } from '@angular/core';
import { UpperPartComponent } from './upper-part/upper-part.component'; 
import { LowerPartComponent } from './lower-part/lower-part.component';

@Component({
  selector: 'app-projects',
  imports: [UpperPartComponent, LowerPartComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
