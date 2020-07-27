import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { City } from '../models/city';
import { CityDbService } from '../services/city-db.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: Observable<City[]>;
  selectedId: number;
  constructor(
    private service: CityDbService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCities();
  }

  //get array of all cities
  getCities(){
    this.cities = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = + params.get('id');
        return this.service.GetAll();
      })
    );
  }

}
