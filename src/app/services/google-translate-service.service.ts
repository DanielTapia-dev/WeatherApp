import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslationResponse } from '../interfaces/transalationResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer AIzaSyCuN8L_YMbFP_p3fyqWyknKedBdy8FXiug'
  });

  constructor(private http: HttpClient) {}

  translateText(text1: string, text2: string, targetLanguage: string) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyCuN8L_YMbFP_p3fyqWyknKedBdy8FXiug&q=${text1}&q=${text2}&target=${targetLanguage}`;
    return this.http.post<TranslationResponse>(url, {});
  }
}