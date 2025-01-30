import { Component, Input } from '@angular/core';
import { Tab0Page } from '../tab0/tab0.page';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: false,
})
export class ExploreContainerComponent {

  component = Tab0Page;
  @Input() name?: string;

}
