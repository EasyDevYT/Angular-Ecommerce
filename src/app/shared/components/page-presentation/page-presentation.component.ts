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
  @Input() actionButton!: ButtonConfig;

  @Output() actionFired = new EventEmitter()

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get bgImageUrl() {
    return `url('../../../../assets/images/${this.bgImage}') center/cover no-repeat`
  }

  fireAction(): void {
    this.actionFired.emit();

    if ( this.actionButton.redirectTo )
      this.router.navigate([ this.actionButton.redirectTo ])
  }

}
