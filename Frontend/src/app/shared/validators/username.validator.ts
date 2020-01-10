import { FormControl } from '@angular/forms';

export class UsernameValidator {
  static validUsername(fc: FormControl) {
    if (fc.value) {
      console.log('fc:', fc);
      console.log('fc.value:', fc.value);

      if (
        fc.value.toLowerCase() === 'abc123' ||
        fc.value.toLowerCase() === '123abc'
      ) {
        return {
          validUsername: true
        };
      } else {
        return null;
      }
    }
  }
}
