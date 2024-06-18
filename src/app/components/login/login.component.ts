import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authService/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/barcos']);  // Redirigir a la página /barcos después de un login exitoso
        },
        error => {
          console.error('Error al autenticar', error);
          alert('Error al autenticar: ' + error.message); // Muestra un mensaje al usuario
        }
      );
    }
  }

  onSignup() {
    this.router.navigate(['/register']);
  }
}
