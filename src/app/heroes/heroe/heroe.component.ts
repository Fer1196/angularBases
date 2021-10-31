import { Component } from "@angular/core";



@Component({
    selector:'app-heroe', 
    templateUrl:'heroe.component.html'
})
export class HereoComponent{
    nombre:string='Tony Stark';
    edad:number=45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtnerNombre():string{
        
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNimbre():void{
        this.nombre='Spiderman';

    }

    cambiarEdad():void{
        this.edad==45 ? this.edad=28 : this.edad=45;
        

    }


}