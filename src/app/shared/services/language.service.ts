import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'selectedLanguage';
  private languageSubject = new BehaviorSubject<string>(this.getStoredLanguage());

  language$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
    const initialLang = this.getStoredLanguage();
    this.translate.setDefaultLang('en');
    this.translate.use(initialLang);
  }

  private getStoredLanguage(): string {
    return localStorage.getItem(this.STORAGE_KEY) || 'en';
  }

  setLanguage(lang: 'en' | 'de') {
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.languageSubject.next(lang);
    this.translate.use(lang); 
  }

  getCurrentLanguage(): 'en' | 'de' {
    return this.languageSubject.value as 'en' | 'de';
  }
}
