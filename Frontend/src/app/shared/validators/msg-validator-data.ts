export const validationMsg = {
  username: [
    {
      type: 'required',
      message: "Le nom d'utilisateur est obligatoire *."
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
  email: [
    { type: 'required', message: "L'adresse mail est obligatoire *." },
    { type: 'pattern', message: 'Entrez une adresse mail valable.' }
  ],
  role: [{ type: 'required', message: 'Veuillez selectionner un grade *' }],
  isActive: [
    { type: 'required', message: 'Veuillez selectionner son status *' }
  ],
  firstName: [
    {
      type: 'minlength',
      message: 'Le prénom doit comporter au moins 1 caractères.'
    },
    {
      type: 'maxlength',
      message: 'Le prénom ne doit pas dépasser 25 caractères.'
    },
    {
      type: 'pattern',
      message:
        'Le prénom  ne doit contenir que des lettres majuscules ou minuscules ainsi que les accents,1 seul tiret mais pas au début,1 seule apostrophe mais pas au début, plusieurs espaces mais pas plusieurs à la suite et pas au début et peut contenir les caractères suivant : àáâäçèéêëìíîïñòóôöùúûü '
    },
    { type: 'required', message: 'Le prénom est obligatoire *' }
  ],
  lastName: [
    {
      type: 'minlength',
      message: 'Le nom doit comporter au moins 1 caractères.'
    },
    {
      type: 'maxlength',
      message: 'Le nom ne doit pas dépasser 25 caractères.'
    },
    {
      type: 'pattern',
      message:
        'Le nom  ne doit contenir que des lettres majuscules ou minuscules ainsi que les accents,1 seul tiret mais pas au début,1 seule apostrophe mais pas au début, plusieurs espaces mais pas plusieurs à la suite et pas au début et peut contenir les caractères suivant : àáâäçèéêëìíîïñòóôöùúûü '
    },
    { type: 'required', message: 'Le nom est obligatoire *' }
  ],
  birthday: [
    {
      type: 'pattern',
      message: 'Veuillez indiquer une date au format JJ/MM/AAAA'
    }
  ],
  sexGenre: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
  adPvNum: [
    {
      type: 'minlength',
      message: 'Le numéro de rue doit comporter au moins 1 chiffres.'
    },
    {
      type: 'maxlength',
      message: 'Le numéro de rue ne doit pas dépasser 8 caractères.'
    },
    {
      type: 'pattern',
      message:
        'Veuillez selectionner un numéro de rue de 4 chiffres max (+ 2 lettres) (+3 chiffres)'
    }
  ],
  adProNum: [
    {
      type: 'minlength',
      message: 'Le nom doit comporter au moins 1 caractères.'
    },
    {
      type: 'maxlength',
      message: 'Le nom ne doit pas dépasser 25 caractères.'
    },
    {
      type: 'pattern',
      message:
        'Veuillez selectionner un numéro de rue de 4 chiffres max (+ 2 lettres) (+3 chiffres)'
    }
  ],
  adPvStreet: [
    { type: 'pattern', message: 'Veuillez selectionner un nom de rue' }
  ],
  adProStreet: [
    { type: 'pattern', message: 'Veuillez selectionner un nom de rue' }
  ],
  adPvCountry: [{ type: 'pattern', message: 'Veuillez selectionner le pays' }],
  adProCountry: [{ type: 'pattern', message: 'Veuillez selectionner le pays' }],
  adPvZip: [
    { type: 'pattern', message: 'Veuillez selectionner le code postal' }
  ],
  adProZip: [
    { type: 'pattern', message: 'Veuillez selectionner le code postal' }
  ],
  adPvCity: [
    {
      type: 'minlength',
      message: 'La ville doit comporter au moins 2 lettres.'
    },
    {
      type: 'maxlength',
      message: 'La ville ne doit pas dépasser 25 caractères.'
    },
    {
      type: 'pattern',
      message:
        'Le nom de la ville de doit contenir que des lettres majuscules ou minuscules ainsi que les accents,1 seul tiret mais pas au début,1 seule apostrophe mais pas au début, plusieurs espaces mais pas plusieurs à la suite et pas au début et peut contenir les caractères suivant : àáâäçèéêëìíîïñòóôöùúûü '
    }
  ],
  adProCity: [
    {
      type: 'minlength',
      message: 'La ville doit comporter au moins 2 lettres.'
    },
    {
      type: 'maxlength',
      message: 'La ville ne doit pas dépasser 25 caractères.'
    },
    {
      type: 'pattern',
      message:
        'Le nom de la ville de doit contenir que des lettres majuscules ou minuscules ainsi que les accents,1 seul tiret mais pas au début,1 seule apostrophe mais pas au début, plusieurs espaces mais pas plusieurs à la suite et pas au début et peut contenir les caractères suivant : àáâäçèéêëìíîïñòóôöùúûü '
    }
  ],
  firm: [
    { type: 'pattern', message: 'Veuillez selectionner le nom de société' }
  ],
  tva: [{ type: 'pattern', message: 'Veuillez saisir le numero de TVA' }],
  contPhonePv: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
  contPhoneGsm: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
  contPhonePro: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
  contFacebook: [
    {
      type: 'minlength',
      message: "L'url Facebook doit comporter au moins 13 caractères."
    },
    {
      type: 'maxlength',
      message: "L'url Facebook ne doit pas dépasser 25 caractères."
    },
    {
      type: 'pattern',
      message:
        "L'url Facebook doit etre au format : facebook.com/  www.facebook.com/ http://www.facebook.com/ ou https://www.facebook.com/ "
    }
  ],
  contWebsite: [{ type: 'pattern', message: 'Veuillez une URL valide' }],
  asbl: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
  shortDesc: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
  longDesc: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }]
};
