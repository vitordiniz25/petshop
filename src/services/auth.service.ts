import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Security } from 'src/app/utils/security.util';

@Injectable()
export class AuthService implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const token = Security.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
