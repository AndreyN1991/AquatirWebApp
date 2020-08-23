import { Component, Output, EventEmitter } from '@angular/core';
import { GooService, Goo } from 'src/app/services/goo.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';

@Component({
  selector: 'app-goocard',
  templateUrl: './goocard.component.html',
  styleUrls: ['./goocard.component.css'],
  animations: [
    trigger('zoomAnimation', [
      transition(
        'void => *',
        useAnimation(zoomIn, { params: { timing: 0.3 } })
      ),
    ]),
  ],
})
export class GoocardComponent {
  zoomIn: any;
  @Output() onAdd: EventEmitter<Goo> = new EventEmitter<Goo>();
  gooName: string = '';

  constructor(private gooService: GooService) {}

  Add(): void {
    if (this.gooName.trim()) {
      this.gooService.postGoo({ cGoo: this.gooName }).subscribe((goo) => {
        this.onAdd.emit(goo);
      });
    }
  }
}
