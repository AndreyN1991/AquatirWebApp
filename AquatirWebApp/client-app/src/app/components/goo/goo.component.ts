import { Component, OnInit } from '@angular/core';

import { GooService } from 'src/app/services/goo.service';
import { Goo } from 'src/app/models/goo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-goo',
  templateUrl: './goo.component.html',
  styleUrls: ['./goo.component.css'],
})
export class GooComponent implements OnInit {
  displayedColumns: string[] = ['uGoo', 'cGoo', 'action'];
  dataSource: Observable<Goo[]>;

  constructor(private gooService: GooService) {}

  ngOnInit(): void {
    this.refresh();
  }

  delete(id: number): void {
    this.gooService.deleteGoo(id).subscribe(() => {
      this.refresh();
    });
  }

  refresh(): void {
    this.dataSource = this.gooService.getGoo();
  }
}
