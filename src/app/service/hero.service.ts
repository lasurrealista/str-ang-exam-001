import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {
      id: 1,
      name: 'Wonder Woman',
      superPower: 'superhuman strength',
      address: 'Themyscira, home to the Amazons',
    },
    {
      id: 2,
      name: 'Captain America',
      superPower: 'immune to fatigue',
      address: 'Lower East Side of Manhattan, New York City',
    },
    {
      id: 3,
      name: 'Thor',
      superPower: 'owner of Mjolnir, the enchanted hammer',
      address: 'Asgard',
    },
    {
      id: 4,
      name: 'Pepper Potts',
      superPower: 'intelligence, kindness',
      address: 'New York City, New York',
    },
    {
      id: 5,
      name: 'James "Logan" Howlett aka Wolverine',
      superPower: 'accelerated healing factor',
      address: 'Canada',
    },
    {
      id: 6,
      name: 'Natasha Romanoff aka Black Widow',
      superPower: 'espionage',
      address: 'Soviet Union',
    },
    {
      id: 7,
      name: 'Carol Danvers aka Captain Marvel',
      superPower: 'cosmic powers',
      address: 'Boston, Massachusetts',
    },
    {
      id: 8,
      name: 'Clinton Francis Barton aka Hawkeye',
      superPower: 'master archer',
      address: 'Waverly, Iowa',
    },

  ]

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  getAll(): void {
    this.list$.next(this.list);
  }

  constructor() { }
}
