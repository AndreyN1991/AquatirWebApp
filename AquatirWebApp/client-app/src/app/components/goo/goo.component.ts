import { Component, OnInit } from '@angular/core';

import { Goo, GooService } from 'src/app/services/goo.service';
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
    this.dataSource = this.gooService.getGoo();
  }

  delete(id: number): void {
    this.gooService.deleteGoo(id).subscribe();
  }
}
