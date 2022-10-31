import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  offHeight = 0;
  offTop = 0;

  constructor(private router:Router,
    private mainComponent: AppComponent,
    private el: ElementRef,
    ) { }

  ngOnInit(): void {
  }


  calculateHeight(elem: HTMLElement) {
    this.offHeight = elem.offsetHeight;
    this.offTop = elem.offsetTop;
  }
}
