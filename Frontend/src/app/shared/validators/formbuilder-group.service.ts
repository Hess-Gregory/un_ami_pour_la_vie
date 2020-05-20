import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormbuilderGroupService {
  genders = ['Homme', 'Femme', 'Autre'];

  constructor(private fb: FormBuilder) {
    console.log(this.createFormsBuild);
    // if (fc.value) {
    //     console.log('fc:', fc);
    //     console.log('fc.value:', fc.value);

    //     if (
    //       fc.value.toLowerCase() === 'abc123' ||
    //       fc.value.toLowerCase() === '123abc'
    //     ) {
    //       return {
    //         validUsername: true
    //       };
    //     } else {
    //       return null;
    //     }
    //   }
    // };
  }

  createFormsBuild = this.fb.group({
    /* Login et Role */
    username: new FormControl(
      null,
      Validators.compose([
        UsernameValidator.validUsername,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern(
          '^[a-zA-Z0-9]+([a-zA-Z0-9](_|-)[a-zA-Z0-9])*[a-zA-Z0-9]+$'
        ),
        Validators.required
      ])
    ),
    email: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])
    ),
    role: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
        Validators.pattern('^([1-6])$')
      ])
    ),
    isActive: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
        Validators.pattern('^(true|false|1|0)$')
      ])
    ),
    adressbook: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
        Validators.pattern('^(true|false|1|0)$')
      ])
    ),
    firstName: new FormControl(
      null,
      Validators.compose([
        UsernameValidator.validUsername,
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern(
          "^([a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+(( |')[a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+)*)+([-]([a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+(( |')[a-zA-Zàáâäçèéêëìíîïïñòóôöùúûü]+)*)+)*$"
        )
      ])
    ),
    lastName: new FormControl(
      null,
      Validators.compose([
        UsernameValidator.validUsername,
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern(
          "^([a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+(( |')[a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+)*)+([-]([a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+(( |')[a-zA-Zàáâäçèéêëìíîïïñòóôöùúûü]+)*)+)*$"
        )
      ])
    ),
    birthday: new FormControl(null),
    sexGenre: new FormControl(this.genders[0]),
    adPvNum: new FormControl(
      null,
      Validators.compose([
        UsernameValidator.validUsername,
        Validators.minLength(1),
        Validators.maxLength(8),
        Validators.pattern('^([0-9]{1,4})([A-Za-z]{1,2})?([0-9]{1,3})?$')
      ])
    ),
    adProNum: new FormControl(
      null,
      Validators.compose([
        UsernameValidator.validUsername,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^([0-9]{1,4})([A-Za-z]{1,2})?([0-9]{1,3})?$')
      ])
    ),
    adPvStreet: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    adProStreet: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    adPvCountry: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    adProCountry: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    adPvZip: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    adProZip: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    adPvCity: new FormControl(
      null,
      Validators.compose([
        UsernameValidator.validUsername,
        Validators.minLength(2),
        Validators.maxLength(25),
        Validators.pattern(
          "^([a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+(( |')[a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+)*)+([-]([a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+(( |')[a-zA-Zàáâäçèéêëìíîïïñòóôöùúûü]+)*)+)*$"
        )
      ])
    ),
    adProCity: new FormControl(
      null,
      Validators.compose([
        UsernameValidator.validUsername,
        Validators.minLength(2),
        Validators.maxLength(25),
        Validators.pattern(
          "^([a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+(( |')[a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+)*)+([-]([a-zA-Zàáâäçèéêëìíïîïñòóôöùúûü]+(( |')[a-zA-Zàáâäçèéêëìíîïïñòóôöùúûü]+)*)+)*$"
        )
      ])
    ),
    firm: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    tva: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern('‹ ^(BE)?0[0-9]{9}$›')
      ])
    ),
    contPhonePv: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    contPhoneGsm: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    contPhonePro: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    contFacebook: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(13),
        Validators.maxLength(60),
        Validators.pattern(
          '(?:(?:http|https)://)?(?:www.)?facebook.com/(?:(?:w)*#!/)?(?:pages/)?([w-]*)?'
        )
      ])
    ),
    contWebsite: new FormControl(
      null,
      Validators.compose([
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        )
      ])
    ),
    asbl: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    shortDesc: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    ),
    longDesc: new FormControl(
      null,
      Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern("^([A-Za-z' -]+)")
      ])
    )
  });
}
