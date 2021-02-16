import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Heroes } from 'src/app/model/heroes';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroList$: BehaviorSubject<Heroes[]> = this.heroService.list$;
  phrase: string = '';
  columnKey: string = '';

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getAll();
  }

  onSelect(key: string): void {
    this.columnKey = key;
  }

}
