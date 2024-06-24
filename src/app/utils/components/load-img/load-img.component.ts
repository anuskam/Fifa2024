import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-load-img',
  templateUrl: './load-img.component.html',
  styleUrl: './load-img.component.scss'
})
export class LoadImgComponent {
  spinnerPath: string  = environment.spinnerPath;


}
