import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

export interface ButtonConfig {
  text: string;
  redirectTo?: string;
  bgColor: 'primary' | 'secondary'
}

@Component({
  selector: 'page-presentation',
  templateUrl: './page-presentation.component.html',
  styleUrls: ['./page-presentation.component.scss']
})
export class PagePresentationComponent implements OnInit {
  
  @Input() bgImage: string = 'phone_cases_1.jpg';
  @Input() title: string = 'Stoless';
  @Input() secondaryText!: string;

  @Input() actionButton: ButtonConfig = {
    text: '¡Comprá ya!',
    bgColor: 'primary'
  }

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
