
import { Component, ChangeDetectionStrategy, output, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  loginSuccess = output<User>();
  
  private authService = inject(AuthService);

  isLoginView = signal(true);
  email = signal('');
  password = signal('');
  errorMessage = signal<string | null>(null);

  toggleView(): void {
    this.isLoginView.update(v => !v);
    this.errorMessage.set(null);
  }

  onSubmit(): void {
    this.errorMessage.set(null);
    const email = this.email();
    const password = this.password();

    if (!email || !password) {
      this.errorMessage.set('Por favor, rellena todos los campos.');
      return;
    }

    const response = this.isLoginView()
      ? this.authService.login(email, password)
      : this.authService.register(email, password);

    if (response.success) {
      this.loginSuccess.emit(this.authService.currentUser()!);
    } else {
      this.errorMessage.set(response.message);
    }
  }
}
