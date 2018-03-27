import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		MatListModule,
		MatMenuModule
	],
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		MatListModule,
		MatMenuModule
	],
	declarations: []
})
export class MaterialComponentsModule { }
