import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/@core/interfaces/login.interface';
import { AuthService } from 'src/app/@core/services/auth.service';
import { CartService } from 'src/app/@core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  //access = false;
  role: string;
  userLabel = '';
  nombre: string;
  
 
  constructor(private auth: AuthService, private cartService: CartService ) {
    this.auth.accessVar$.subscribe((result) => {
      if (result === null) {
        this.userLabel = '';
        return;
      }

      this.userLabel = `${result.usuario!.nombre} ${result.usuario!.apellido}`;
      this.role = result.usuario.rol;

    });
  }


  ngOnInit(): void {
this.asignarVariablesNavBar();

  }

  clase(){

    const clase = document.querySelector('sticky-top');
  }

  asignarVariablesNavBar ( ) {

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    
    if (usuario) {
      this.role = usuario.rol;

      this.userLabel = `${usuario.nombre} ${usuario.apellido}`;
    } 

  }


  

  logout() {
    this.auth.logout();
    this.userLabel = undefined;
    this.role = undefined;
  }

  renovarToken() {
    this.auth.actualizarToken().subscribe(resp => {
      
    });
  }

  open(){
    console.log('navbar open cart');
    this.cartService.open();
  }
}
