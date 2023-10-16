import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.length>0)
  {
    return true;
  }
  return false;
};
