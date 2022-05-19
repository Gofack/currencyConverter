import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ConverterComponent } from './components/converter/converter.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ConverterComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ReactiveFormsModule,
		MatInputModule,
		MatSelectModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
