import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SheetDTO } from '../models/sheet.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  apiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetSheet(id: number, sk: string, page: number = 1): Observable<SheetDTO> {
    return this.http.get<SheetDTO>
      (this.apiUrl + `/sheets?courseId=${id}&sk=${sk}&pageNumber=${page}`);
  }
}
