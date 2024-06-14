// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userService/user-service.service'; // Ajusta la ruta según tu estructura de proyecto
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const newUser = this.registerForm.value;
      this.userService.createUser(newUser).subscribe(
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
