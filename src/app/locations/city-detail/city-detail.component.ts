import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { City } from '../models/city';
import { CityDbService } from 'src/app/locations/services/city-db.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  @Input() city: Observable<City>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CityDbService
  ) { }

  ngOnInit(): void {
    this.getCity();
  }

  getCity(): void {
    //get id from url and feed to api to retrieve city observable
    //switchmap allows it to pull the id and discard if a change was made to it before rendering
    //this is also best practice if the id will be reused to populate this component without
    //rendering the entire page again.
    this.city = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.Get(+params.get('id')))
    )
  }

  gotoCities(city: City): void {
    let cityId = city ? city.id : null;
    //pass along the city id if available
    //CitiesComponent can select that city
    this.router.navigate(['/city', { id: city.id }]);
  }

}
