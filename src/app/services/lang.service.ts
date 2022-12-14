import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
	providedIn: 'root'
})
export class LangService {
	private currentLang:string = "es";

	constructor(private translate :TranslateService) {
		this.translate.setDefaultLang("es");
	}
	public setLang(lang :string) {
		this.currentLang = lang;
		this.translate.use(lang);
	}
}
