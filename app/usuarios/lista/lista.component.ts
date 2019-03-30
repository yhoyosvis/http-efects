import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  constructor( public usuarioservice: UsuarioService) { }

  ngOnInit() {
    this.usuarioservice.getUsers()
    .subscribe(data => {
      console.log(data);
      
    })
  }

}
