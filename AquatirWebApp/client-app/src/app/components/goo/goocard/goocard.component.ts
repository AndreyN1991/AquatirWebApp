import { Component, Output, EventEmitter } from '@angular/core';
import { GooService, Goo } from 'src/app/services/goo.service';

@Component({
  selector: 'app-goocard',
  templateUrl: './goocard.component.html',
  styleUrls: ['./goocard.component.css'],
})
export class GoocardComponent {
  @Output() onAdd: EventEmitter<Goo> = new EventEmitter<Goo>();
  gooName: string = '';

  constructor(private gooService: GooService) {}

  Add(): void {
    if (this.gooName.trim()) {
      this.gooService.postGoo({ cGoo: this.gooName }).subscribe(goo => {
        this.onAdd.emit(goo);
      });
    }
  }
}
