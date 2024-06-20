// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authService/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, password }  = this.registerForm.value;
      this.authService.register(username, email, password).subscribe(
        response => {
          console.log('Usuario creado exitosamente:', response);
          this.router.navigate(['/login']); // Redirige al login después de crear el usuario
        },
        error => {
          console.error('Error al crear usuario:', error);
        }
      );
    }
  }
}
