import {Injectable, Injector} from '@angular/core';
import {Api, ApiService, Field, SerializerService} from 'angular-django';
import 'reflect-metadata';
import {HttpClient} from '@angular/common/http';


///////////////////////////////////////
// Region API
///////////////////////////////////////
export class Region extends SerializerService {
  @Field() url: string;
  @Field() identifier: string;
  @Field() id: number;
}


@Api(Region)
@Injectable({
  providedIn: 'root'
})
export class RegionApi extends ApiService {
// export class RegionApi extends ApiService {

  url = '/api/regions/';
  serializer = Region;

  constructor(injector: Injector) {
    super(injector);
  }
}


///////////////////////////////////////
// Generation API
///////////////////////////////////////
export class Generation extends SerializerService {
  @Field() url: string;
  @Field() identifier: string;
  @Field() main_region: string;
  @Field() id: number;

  getName(): string {
    return this.identifier;
  }
}

@Api(Generation)
@Injectable({
  providedIn: 'root'
})
export class GenerationApi extends ApiService {

  url = '/api/generations/';
  serializer = Generation;

  constructor(injector: Injector) {
    super(injector);
  }
}


///////////////////////////////////////
// Habitat API
///////////////////////////////////////
export class Habitat extends SerializerService {
  @Field() url: string;
  @Field() identifier: string;
  @Field() id: number;

  getName(): string {
    return this.identifier;
  }

}

@Api(Habitat)
@Injectable({
  providedIn: 'root'
})
export class HabitatApi extends ApiService {

  url = '/api/habitats/';
  serializer = Habitat;

  constructor(injector: Injector) {
    super(injector);
  }
}


///////////////////////////////////////
// Shape API
///////////////////////////////////////
export class Shape extends SerializerService {
  @Field() url: string;
  @Field() identifier: string;
  @Field() id: number;

  getName(): string {
    return this.identifier;
  }

}

@Api(Shape)
@Injectable({
  providedIn: 'root'
})
export class ShapeApi extends ApiService {

  url = '/api/shapes/';
  serializer = Shape;

  constructor(injector: Injector) {
    super(injector);
  }
}


///////////////////////////////////////
// GrowthRate API
///////////////////////////////////////
export class GrowthRate extends SerializerService {
  @Field() url: string;
  @Field() identifier: string;
  @Field() formula: string;
  @Field() id: number;

  getName(): string {
    return this.identifier;
  }

}

@Api(GrowthRate)
@Injectable({
  providedIn: 'root'
})
export class GrowthRateApi extends ApiService {

  url = '/api/growth_rates/';
  serializer = GrowthRate;

  constructor(injector: Injector) {
    super(injector);
  }
}


///////////////////////////////////////
// Specie API
///////////////////////////////////////
export class Specie extends SerializerService {
  @Field() url: string;
  @Field() growth_rate: GrowthRate;
  @Field() shape: Shape;
  @Field({widget: 'autocomplete'}) habitat: Habitat;
  @Field() generation: Generation;
  @Field() identifier: string;
  @Field({widget: 'select'}) color: string;
  @Field() gender_rate: string;
  @Field() capture_rate: number;
  @Field() base_happiness: number;
  @Field({defaultValue: false}) is_baby: boolean;
  @Field() hatch_counter: number;
  @Field() has_gender_differences: boolean;
  @Field() forms_switchable: boolean;
  @Field() order: number;
  @Field() conquest_order: number;
  @Field() evolves_from_specie: string;
  @Field() id: number;

  getName(): string {
    return this.identifier;
  }
}


@Api(Specie)
@Injectable({
  providedIn: 'root'
})
export class SpecieApi extends ApiService {

  url = '/api/species/';
  serializer = Specie;

  constructor(injector: Injector) {
    super(injector);
  }
}


///////////////////////////////////////
// Pokemon API
///////////////////////////////////////
export class Pokemon extends SerializerService {
  @Field() url: string;
  @Field() specie: Specie;
  @Field() identifier: string;
  @Field() height: number;
  @Field() weight: number;
  @Field() base_experience: number;
  @Field() order: number;
  @Field() is_default: boolean;
  @Field() id: number;
}

@Api(Pokemon)
@Injectable({
  providedIn: 'root'
})
export class PokemonApi extends ApiService {

  url = '/api/pokemon/';
  serializer = Pokemon;

  constructor(injector: Injector) {
    super(injector);
  }
}


///////////////////////////////////////
// User API
///////////////////////////////////////
export class User extends SerializerService {
  @Field() url: string;
  @Field() id: number;
  @Field() username: string;
  @Field() email: string;
  @Field() is_active: boolean;
  @Field() date_joined: Date;

  getName(): string {
    return this.username;
  }
}

@Api(User)
@Injectable({
  providedIn: 'root'
})
export class UserApi extends ApiService {

  url = '/api/users/';
  serializer = User;

  constructor(injector: Injector) {
    super(injector);
  }
}
