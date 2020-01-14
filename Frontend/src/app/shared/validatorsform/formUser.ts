export class UserValidator {
  validation_messages = {
    username: [
      {
        type: 'required',
        message: "Le nom d'utilisateur est obligatoire."
      },
      {
        type: 'minlength',
        message: "Le nom d'utilisateur doit comporter au moins 5 caractères."
      },
      {
        type: 'maxlength',
        message: "Le nom d'utilisateur ne doit pas dépasser 25 caractères."
      },
      {
        type: 'pattern',
        message:
          'Votre nom d\'utilisateur ne doit contenir que des chiffres,des lettres, les espacements doivent être remplacés par: "-" "_".'
      },
      {
        type: 'validUsername',
        message: "Votre nom d'utilisateur a déjà été pris."
      }
    ],
    firstName: [{ type: 'required', message: 'Le prénom est obligatoire' }],
    lastName: [
      { type: 'required', message: 'Le nom de famille est obligatoire' }
    ],
    email: [
      { type: 'required', message: "L'adresse mail est obligatoire." },
      { type: 'pattern', message: 'Entrez une adresse mail valable.' }
    ],
    bio: [
      {
        type: 'maxlength',
        message: 'Bio cannot be more than 256 characters long'
      }
    ],
    gender: [{ type: 'required', message: 'Please select your gender' }],
    birthday: [{ type: 'required', message: 'Please insert your birthday' }],
    phone: [
      { type: 'required', message: 'Phone is required' },
      {
        type: 'validCountryPhone',
        message: 'Phone incorrect for the country selected'
      }
    ]
  };
}
