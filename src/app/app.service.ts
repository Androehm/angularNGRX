import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LaureateService {
  private url = 'https://api.nobelprize.org/2.1/laureates';
  constructor(private httpClient: HttpClient) {}

  getLaureates() {
    return this.httpClient.get(this.url);
  }
}
