import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { EncryptionService } from '../../../services/encryption.service';

@Component({
  selector: 'app-load-img',
  templateUrl: './load-img.component.html',
  styleUrl: './load-img.component.scss',
})
export class LoadImgComponent implements OnInit {
  spinnerPath: string | undefined;

  constructor(private encryptionService: EncryptionService) {}

  ngOnInit(): void {
    this.spinnerPath = this.encryptionService.decrypt(environment.spinnerPath);
  }
}
