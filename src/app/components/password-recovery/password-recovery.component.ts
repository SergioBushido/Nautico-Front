import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordRecoveryService } from '../../services/password-recovery.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {
  recoveryForm: FormGroup;

  constructor(private fb: FormBuilder, private passwordRecoveryService: PasswordRecoveryService) { 
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    // No necesitas inicializar recoveryForm aquí, ya está inicializado en el constructor.
  }

  onSubmit(): void {
    if (this.recoveryForm.valid) {
      this.passwordRecoveryService.sendRecoveryEmail(this.recoveryForm.value.email)
        .subscribe(response => {
          console.log('Correo de recuperación enviado:', response);
        }, error => {
          console.error('Error al enviar el correo de recuperación:', error);
        });
    }
  }
}
