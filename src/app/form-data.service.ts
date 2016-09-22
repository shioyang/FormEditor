import { Injectable } from '@angular/core';
import { FormData } from './form-data';
import { FormDataMock } from './form-data.mock';

@Injectable()
export class FormDataService {
    getAllData(): FormData[] {
        return FormDataMock;
    };
}
