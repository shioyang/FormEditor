import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormData } from './form-data';
import { FormDataService } from './form-data.service';

import '../../public/css/styles.css';

@Component({
  selector: 'fe-list',
  templateUrl: './fe-list.component.html',
  styleUrls: ['./fe-list.component.css'],
  providers: [ FormDataService ]
})
export class FeListComponent implements OnInit {
  formData: FormData[];
  formDataService: FormDataService;

  constructor(private fds: FormDataService){
    this.formDataService = fds;
  }

  ngOnInit(){
    this.getData();
  }

  getData(): void {
    this.formData = this.formDataService.getAllData();
  }
}
