import { MunicipiosModel } from './../../models/municipios.model';
import { ApiIbgeService } from './../../services/api-ibge.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

//objetos sao assincronos e observables, o valor dele é o que ele retorna
cidades$ = new Observable<MunicipiosModel[]>();
 
  constructor(private ibgeService: ApiIbgeService) { }

  ngOnInit(): void {}

  loadMunicipiosByUF(event: any){
    const uf = (event.target as HTMLSelectElement)?.value;
    if (uf) {
      this.cidades$ = this.ibgeService.getCidadesByUf(uf);
      this.ibgeService
        .getCidadesByUf(uf)
        .subscribe(
          (response) => {
            console.log(response);
          }
         );
       }
      }
  }
  
  