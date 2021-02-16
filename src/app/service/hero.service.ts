import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Heroes } from '../model/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Heroes[] = [
    {
      id: 1,
      name: 'RubberMan',
      superPower: 'flexible',
      address: 'New York'
    },
    {
      id: 2,
      name: 'Tornado',
      superPower: 'fast',
      address: 'Los Angeles'
    },
    {
      id: 3,
      name: 'Dr IQ',
      superPower: 'smart',
      address: 'Washington'
    },
    {
      id: 4,
      name: 'Dr Nice',
      superPower: 'gentle',
      address: 'Boston'
    },
    {
      id: 5,
      name: 'Magneta',
      superPower: 'magnetic',
      address: 'San Francisco'
    }

  ]

  list$: BehaviorSubject<Heroes[]> = new BehaviorSubject<Heroes[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }

}
