import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService{

    private _personajes:Personaje[]=[
        {
          nombre:'Homero',
          poder:400
        },
        {
          nombre:'Marge',
          poder:750
        },
        {
          nombre:'Jefe Gorgory',
          poder:1400
        },
      ];

      get personajes():Personaje[]{
          return [... this._personajes]
      }

    constructor(){
        console.log('SERVICIO up...')
    }

    //metodo 
    agregarPersonaje(personjae:Personaje){
        this._personajes.push(personjae)
    }

}