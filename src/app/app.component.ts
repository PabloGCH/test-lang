import { Component} from '@angular/core';
import { LangService } from './services/lang.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private lang :LangService) {}
	public changeLang(data:any) :void {
		this.lang.setLang(data.target.value);
	}
}
