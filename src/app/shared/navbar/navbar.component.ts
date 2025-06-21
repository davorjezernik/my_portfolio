import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, TranslateModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sliderValue = 1;
  isDropdownVisible = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    const lang = this.languageService.getCurrentLanguage();
    this.sliderValue = lang === 'en' ? 1 : 2;
  }

  setLanguage(value: number): void {
  this.sliderValue = value;
  const lang = value === 1 ? 'en' : 'de';
  this.languageService.setLanguage(lang);  
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
}

}
