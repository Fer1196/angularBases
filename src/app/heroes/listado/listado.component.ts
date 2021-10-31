import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  
  herores:string[]=['Batman', 'Guason', 'Super man','Harley Queen'];
  heroeBorrado:string ='';

  borrarHeroe(){
    //console.log("Borrando......");
    //this.herores.pop();

    this.heroeBorrado =this.herores.shift()|| '';
   
   

  }

}
