import { Router } from '@angular/router';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    const user = {
      userName: this.usuario,
      password: this.senha,
    };
    this.authService.autenticar(user).subscribe(
      (response) => {
        console.log("logou");
        this.router.navigate(['animais'])
      },
      (error) => {
        alert('usuario ou senha invalido');
      }
    );
  }
}
