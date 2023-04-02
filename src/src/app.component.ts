import { Component, AfterViewChecked, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { BehaviorSubject } from 'rxjs';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked {
  title = 'LoansApp';

  isLoading = false;//new BehaviorSubject<boolean>(false);// = this.loaderService.isLoading;

  constructor(private httpClient: HttpClient, private loaderService: LoaderService, private cdRef: ChangeDetectorRef) { }

  //callApi() {
  //  this.http.get(){

  //  }
  //}

  ngAfterViewChecked() {
    this.isLoading = this.loaderService.isLoading;
    console.log('loading - ' + this.isLoading);
    this.cdRef.detectChanges();

    console.log($('#testdiv'))
  }
}
