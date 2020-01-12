import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UserAddService } from './user-add.service';
import {
  UsernameValidator,
  ParentErrorStateMatcher
} from './../../../../shared/validators';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var $: any;
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import * as _moment from 'moment';

export interface Error {
  objStringError: string;
  objError: any;
  ErrorstatusText: any;
  Errormessage: string;
  ErrorStatus: string;
}

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserAddComponent implements OnDestroy, OnInit {
  loading = true;
  duration: number;
  previewUrl: any = null;
  [x: string]: any;
  adressbook = false;
  public objStringError: string;
  public objError: any;
  public ErrorstatusText: any;
  public Errormessage: string;
  public ErrorStatus: string;
  public error: Error;
  alerts: Array<any> = [];
  roles: any = [];
  dtTrigger: Subject<any> = new Subject();
  fileData: File = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  http: any;
  userDetailsForm: FormGroup;
  country_phone_group: FormGroup;
  parentErrorStateMatcher = new ParentErrorStateMatcher();
  selected = '0';
  bookadress: any;
  dateNow = new Date();
  YearNow = this.dateNow.getFullYear();
  minYearNow = this.YearNow - 100;
  maxYearNow = this.YearNow - 18;
  MonthNow = this.dateNow.getMonth() - 1;
  DayNow = this.dateNow.getDate();
  startDate = new Date(1910, 0, 1);
  minDate = new Date(1910, 0, 1);
  maxDate = new Date(this.maxYearNow, this.MonthNow, this.DayNow);
  genders = ['Homme', 'Femme', 'Autre'];
  activateds = [
    { isActive: 0, name: 'Gelé' },
    { isActive: 1, name: 'Activé' }
  ];
  allCountries = [
    {
      code: 'AF',
      name: 'Afghanistan'
    },
    {
      code: 'AL',
      name: 'Albania'
    },
    {
      code: 'DZ',
      name: 'Algeria'
    },
    {
      code: 'AS',
      name: 'American Samoa'
    },
    {
      code: 'AD',
      name: 'Andorre'
    },
    {
      code: 'AO',
      name: 'Angola'
    },
    {
      code: 'AI',
      name: 'Anguilla'
    },
    {
      code: 'AQ',
      name: 'Antarctica'
    },
    {
      code: 'AG',
      name: 'Antigua and Barbuda'
    },
    {
      code: 'AR',
      name: 'Argentina'
    },
    {
      code: 'AM',
      name: 'Armenia'
    },
    {
      code: 'AW',
      name: 'Aruba'
    },
    {
      code: 'AU',
      name: 'Australia'
    },
    {
      code: 'AT',
      name: 'Austria'
    },
    {
      code: 'AZ',
      name: 'Azerbaijan'
    },
    {
      code: 'BS',
      name: 'Bahamas'
    },
    {
      code: 'BH',
      name: 'Bahrain'
    },
    {
      code: 'BD',
      name: 'Bangladesh'
    },
    {
      code: 'BB',
      name: 'Barbade'
    },
    {
      code: 'BY',
      name: 'Belarus'
    },
    {
      code: 'BE',
      name: 'Belgium'
    },
    {
      code: 'BZ',
      name: 'Belize'
    },
    {
      code: 'BJ',
      name: 'Benin'
    },
    {
      code: 'BM',
      name: 'Bermuda'
    },
    {
      code: 'BT',
      name: 'Bhutan'
    },
    {
      code: 'BO',
      name: 'Bolivia'
    },
    {
      code: 'BQ',
      name: 'Bonaire, Sint Eustatius and Saba'
    },
    {
      code: 'BA',
      name: 'Bosnia and Herzegovina'
    },
    {
      code: 'BW',
      name: 'Botswana'
    },
    {
      code: 'BV',
      name: 'Bouvet Island'
    },
    {
      code: 'BR',
      name: 'Brazil'
    },
    {
      code: 'IO',
      name: 'British Indian Ocean Territory'
    },
    {
      code: 'VG',
      name: 'British Virgin Islands'
    },
    {
      code: 'BN',
      name: 'Brunei'
    },
    {
      code: 'BG',
      name: 'Bulgaria'
    },
    {
      code: 'BF',
      name: 'Burkina Faso'
    },
    {
      code: 'BI',
      name: 'Burundi'
    },
    {
      code: 'KH',
      name: 'Cambodia'
    },
    {
      code: 'CM',
      name: 'Cameroon'
    },
    {
      code: 'CA',
      name: 'Canada'
    },
    {
      code: 'CV',
      name: 'Cape Verde'
    },
    {
      code: 'KY',
      name: 'Cayman Islands'
    },
    {
      code: 'CF',
      name: 'Central African Republic'
    },
    {
      code: 'TD',
      name: 'Chad'
    },
    {
      code: 'CL',
      name: 'Chile'
    },
    {
      code: 'CN',
      name: 'China'
    },
    {
      code: 'CX',
      name: 'Christmas Island'
    },
    {
      code: 'CC',
      name: 'Cocos (Keeling) Islands'
    },
    {
      code: 'CO',
      name: 'Colombia'
    },
    {
      code: 'KM',
      name: 'Comoros'
    },
    {
      code: 'CG',
      name: 'Congo'
    },
    {
      code: 'CD',
      name: 'Congo (Dem. Rep.)'
    },
    {
      code: 'CK',
      name: 'Cook Islands'
    },
    {
      code: 'CR',
      name: 'Costa Rica'
    },
    {
      code: 'ME',
      name: 'Crna Gora'
    },
    {
      code: 'HR',
      name: 'Croatia'
    },
    {
      code: 'CU',
      name: 'Cuba'
    },
    {
      code: 'CW',
      name: 'Curaçao'
    },
    {
      code: 'CY',
      name: 'Cyprus'
    },
    {
      code: 'CZ',
      name: 'Czech Republic'
    },
    {
      code: 'CI',
      name: "Côte D'Ivoire"
    },
    {
      code: 'DK',
      name: 'Denmark'
    },
    {
      code: 'DJ',
      name: 'Djibouti'
    },
    {
      code: 'DM',
      name: 'Dominica'
    },
    {
      code: 'DO',
      name: 'Dominican Republic'
    },
    {
      code: 'TL',
      name: 'East Timor'
    },
    {
      code: 'EC',
      name: 'Ecuador'
    },
    {
      code: 'EG',
      name: 'Egypt'
    },
    {
      code: 'SV',
      name: 'El Salvador'
    },
    {
      code: 'GQ',
      name: 'Equatorial Guinea'
    },
    {
      code: 'ER',
      name: 'Eritrea'
    },
    {
      code: 'EE',
      name: 'Estonia'
    },
    {
      code: 'ET',
      name: 'Ethiopia'
    },
    {
      code: 'FK',
      name: 'Falkland Islands'
    },
    {
      code: 'FO',
      name: 'Faroe Islands'
    },
    {
      code: 'FJ',
      name: 'Fiji'
    },
    {
      code: 'FI',
      name: 'Finland'
    },
    {
      code: 'FR',
      name: 'France'
    },
    {
      code: 'GF',
      name: 'French Guiana'
    },
    {
      code: 'PF',
      name: 'French Polynesia'
    },
    {
      code: 'TF',
      name: 'French Southern Territories'
    },
    {
      code: 'GA',
      name: 'Gabon'
    },
    {
      code: 'GM',
      name: 'Gambia'
    },
    {
      code: 'GE',
      name: 'Georgia'
    },
    {
      code: 'DE',
      name: 'Germany'
    },
    {
      code: 'GH',
      name: 'Ghana'
    },
    {
      code: 'GI',
      name: 'Gibraltar'
    },
    {
      code: 'GR',
      name: 'Greece'
    },
    {
      code: 'GL',
      name: 'Greenland'
    },
    {
      code: 'GD',
      name: 'Grenada'
    },
    {
      code: 'GP',
      name: 'Guadeloupe'
    },
    {
      code: 'GU',
      name: 'Guam'
    },
    {
      code: 'GT',
      name: 'Guatemala'
    },
    {
      code: 'GG',
      name: 'Guernsey and Alderney'
    },
    {
      code: 'GN',
      name: 'Guinea'
    },
    {
      code: 'GW',
      name: 'Guinea-Bissau'
    },
    {
      code: 'GY',
      name: 'Guyana'
    },
    {
      code: 'HT',
      name: 'Haiti'
    },
    {
      code: 'HM',
      name: 'Heard and McDonald Islands'
    },
    {
      code: 'HN',
      name: 'Honduras'
    },
    {
      code: 'HK',
      name: 'Hong Kong'
    },
    {
      code: 'HU',
      name: 'Hungary'
    },
    {
      code: 'IS',
      name: 'Iceland'
    },
    {
      code: 'IN',
      name: 'India'
    },
    {
      code: 'ID',
      name: 'Indonesia'
    },
    {
      code: 'IR',
      name: 'Iran'
    },
    {
      code: 'IQ',
      name: 'Iraq'
    },
    {
      code: 'IE',
      name: 'Ireland'
    },
    {
      code: 'IM',
      name: 'Isle of Man'
    },
    {
      code: 'IL',
      name: 'Israel'
    },
    {
      code: 'IT',
      name: 'Italy'
    },
    {
      code: 'JM',
      name: 'Jamaica'
    },
    {
      code: 'JP',
      name: 'Japan'
    },
    {
      code: 'JE',
      name: 'Jersey'
    },
    {
      code: 'JO',
      name: 'Jordan'
    },
    {
      code: 'KZ',
      name: 'Kazakhstan'
    },
    {
      code: 'KE',
      name: 'Kenya'
    },
    {
      code: 'KI',
      name: 'Kiribati'
    },
    {
      code: 'KP',
      name: 'Korea (North)'
    },
    {
      code: 'KR',
      name: 'Korea (South)'
    },
    {
      code: 'KW',
      name: 'Kuwait'
    },
    {
      code: 'KG',
      name: 'Kyrgyzstan'
    },
    {
      code: 'LA',
      name: 'Laos'
    },
    {
      code: 'LV',
      name: 'Latvia'
    },
    {
      code: 'LB',
      name: 'Lebanon'
    },
    {
      code: 'LS',
      name: 'Lesotho'
    },
    {
      code: 'LR',
      name: 'Liberia'
    },
    {
      code: 'LY',
      name: 'Libya'
    },
    {
      code: 'LI',
      name: 'Liechtenstein'
    },
    {
      code: 'LT',
      name: 'Lithuania'
    },
    {
      code: 'LU',
      name: 'Luxembourg'
    },
    {
      code: 'MO',
      name: 'Macao'
    },
    {
      code: 'MK',
      name: 'Macedonia'
    },
    {
      code: 'MG',
      name: 'Madagascar'
    },
    {
      code: 'MW',
      name: 'Malawi'
    },
    {
      code: 'MY',
      name: 'Malaysia'
    },
    {
      code: 'MV',
      name: 'Maldives'
    },
    {
      code: 'ML',
      name: 'Mali'
    },
    {
      code: 'MT',
      name: 'Malta'
    },
    {
      code: 'MH',
      name: 'Marshall Islands'
    },
    {
      code: 'MQ',
      name: 'Martinique'
    },
    {
      code: 'MR',
      name: 'Mauritania'
    },
    {
      code: 'MU',
      name: 'Mauritius'
    },
    {
      code: 'YT',
      name: 'Mayotte'
    },
    {
      code: 'MX',
      name: 'Mexico'
    },
    {
      code: 'FM',
      name: 'Micronesia'
    },
    {
      code: 'MD',
      name: 'Moldova'
    },
    {
      code: 'MC',
      name: 'Monaco'
    },
    {
      code: 'MN',
      name: 'Mongolia'
    },
    {
      code: 'MS',
      name: 'Montserrat'
    },
    {
      code: 'MA',
      name: 'Morocco'
    },
    {
      code: 'MZ',
      name: 'Mozambique'
    },
    {
      code: 'MM',
      name: 'Myanmar'
    },
    {
      code: 'NA',
      name: 'Namibia'
    },
    {
      code: 'NR',
      name: 'Nauru'
    },
    {
      code: 'NP',
      name: 'Nepal'
    },
    {
      code: 'NL',
      name: 'Netherlands'
    },
    {
      code: 'AN',
      name: 'Netherlands Antilles'
    },
    {
      code: 'NC',
      name: 'New Caledonia'
    },
    {
      code: 'NZ',
      name: 'New Zealand'
    },
    {
      code: 'NI',
      name: 'Nicaragua'
    },
    {
      code: 'NE',
      name: 'Niger'
    },
    {
      code: 'NG',
      name: 'Nigeria'
    },
    {
      code: 'NU',
      name: 'Niue'
    },
    {
      code: 'NF',
      name: 'Norfolk Island'
    },
    {
      code: 'MP',
      name: 'Northern Mariana Islands'
    },
    {
      code: 'NO',
      name: 'Norway'
    },
    {
      code: 'OM',
      name: 'Oman'
    },
    {
      code: 'PK',
      name: 'Pakistan'
    },
    {
      code: 'PW',
      name: 'Palau'
    },
    {
      code: 'PS',
      name: 'Palestine'
    },
    {
      code: 'PA',
      name: 'Panama'
    },
    {
      code: 'PG',
      name: 'Papua New Guinea'
    },
    {
      code: 'PY',
      name: 'Paraguay'
    },
    {
      code: 'PE',
      name: 'Peru'
    },
    {
      code: 'PH',
      name: 'Philippines'
    },
    {
      code: 'PN',
      name: 'Pitcairn'
    },
    {
      code: 'PL',
      name: 'Poland'
    },
    {
      code: 'PT',
      name: 'Portugal'
    },
    {
      code: 'PR',
      name: 'Puerto Rico'
    },
    {
      code: 'QA',
      name: 'Qatar'
    },
    {
      code: 'RO',
      name: 'Romania'
    },
    {
      code: 'RU',
      name: 'Russia'
    },
    {
      code: 'RW',
      name: 'Rwanda'
    },
    {
      code: 'RE',
      name: 'Réunion'
    },
    {
      code: 'BL',
      name: 'Saint Barthélemy'
    },
    {
      code: 'SH',
      name: 'Saint Helena'
    },
    {
      code: 'KN',
      name: 'Saint Kitts and Nevis'
    },
    {
      code: 'LC',
      name: 'Saint Lucia'
    },
    {
      code: 'MF',
      name: 'Saint Martin'
    },
    {
      code: 'PM',
      name: 'Saint Pierre and Miquelon'
    },
    {
      code: 'VC',
      name: 'Saint Vincent and the Grenadines'
    },
    {
      code: 'WS',
      name: 'Samoa'
    },
    {
      code: 'SM',
      name: 'San Marino'
    },
    {
      code: 'SA',
      name: 'Saudi Arabia'
    },
    {
      code: 'SN',
      name: 'Senegal'
    },
    {
      code: 'RS',
      name: 'Serbia'
    },
    {
      code: 'SC',
      name: 'Seychelles'
    },
    {
      code: 'SL',
      name: 'Sierra Leone'
    },
    {
      code: 'SG',
      name: 'Singapore'
    },
    {
      code: 'SX',
      name: 'Sint Maarten'
    },
    {
      code: 'SK',
      name: 'Slovakia'
    },
    {
      code: 'SI',
      name: 'Slovenia'
    },
    {
      code: 'SB',
      name: 'Solomon Islands'
    },
    {
      code: 'SO',
      name: 'Somalia'
    },
    {
      code: 'ZA',
      name: 'South Africa'
    },
    {
      code: 'GS',
      name: 'South Georgia and the South Sandwich Islands'
    },
    {
      code: 'SS',
      name: 'South Sudan'
    },
    {
      code: 'ES',
      name: 'Spain'
    },
    {
      code: 'LK',
      name: 'Sri Lanka'
    },
    {
      code: 'SD',
      name: 'Sudan'
    },
    {
      code: 'SR',
      name: 'Suriname'
    },
    {
      code: 'SJ',
      name: 'Svalbard and Jan Mayen'
    },
    {
      code: 'SZ',
      name: 'Swaziland'
    },
    {
      code: 'SE',
      name: 'Sweden'
    },
    {
      code: 'CH',
      name: 'Switzerland'
    },
    {
      code: 'SY',
      name: 'Syria'
    },
    {
      code: 'ST',
      name: 'São Tomé and Príncipe'
    },
    {
      code: 'TW',
      name: 'Taiwan'
    },
    {
      code: 'TJ',
      name: 'Tajikistan'
    },
    {
      code: 'TZ',
      name: 'Tanzania'
    },
    {
      code: 'TH',
      name: 'Thailand'
    },
    {
      code: 'TG',
      name: 'Togo'
    },
    {
      code: 'TK',
      name: 'Tokelau'
    },
    {
      code: 'TO',
      name: 'Tonga'
    },
    {
      code: 'TT',
      name: 'Trinidad and Tobago'
    },
    {
      code: 'TN',
      name: 'Tunisia'
    },
    {
      code: 'TR',
      name: 'Turkey'
    },
    {
      code: 'TM',
      name: 'Turkmenistan'
    },
    {
      code: 'TC',
      name: 'Turks and Caicos Islands'
    },
    {
      code: 'TV',
      name: 'Tuvalu'
    },
    {
      code: 'UG',
      name: 'Uganda'
    },
    {
      code: 'UA',
      name: 'Ukraine'
    },
    {
      code: 'AE',
      name: 'United Arab Emirates'
    },
    {
      code: 'GB',
      name: 'United Kingdom'
    },
    {
      code: 'UM',
      name: 'United States Minor Outlying Islands'
    },
    {
      code: 'US',
      name: 'United States of America'
    },
    {
      code: 'UY',
      name: 'Uruguay'
    },
    {
      code: 'UZ',
      name: 'Uzbekistan'
    },
    {
      code: 'VU',
      name: 'Vanuatu'
    },
    {
      code: 'VA',
      name: 'Vatican City'
    },
    {
      code: 'VE',
      name: 'Venezuela'
    },
    {
      code: 'VN',
      name: 'Vietnam'
    },
    {
      code: 'VI',
      name: 'Virgin Islands of the United States'
    },
    {
      code: 'WF',
      name: 'Wallis and Futuna'
    },
    {
      code: 'EH',
      name: 'Western Sahara'
    },
    {
      code: 'YE',
      name: 'Yemen'
    },
    {
      code: 'ZM',
      name: 'Zambia'
    },
    {
      code: 'ZW',
      name: 'Zimbabwe'
    },
    {
      code: 'AX',
      name: 'Åland Islands'
    }
  ];

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
    email: [
      { type: 'required', message: "L'adresse mail est obligatoire." },
      { type: 'pattern', message: 'Entrez une adresse mail valable.' }
    ],
    role: [{ type: 'required', message: 'Veuillez selectionner un grade' }],
    isActive: [
      { type: 'required', message: 'Veuillez selectionner son status' }
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
      { type: 'required', message: 'Le prénom est obligatoire' }
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
      { type: 'required', message: 'Le nom est obligatoire' }
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
    adPvStreet: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
    adProStreet: [
      { type: 'pattern', message: 'Veuillez selectionner le sexe' }
    ],
    adPvCountry: [
      { type: 'pattern', message: 'Veuillez selectionner le sexe' }
    ],
    adProCountry: [
      { type: 'pattern', message: 'Veuillez selectionner le sexe' }
    ],
    adPvZip: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
    adProZip: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
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
    firm: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
    tva: [{ type: 'pattern', message: 'Veuillez selectionner le sexe' }],
    contPhonePv: [
      { type: 'pattern', message: 'Veuillez selectionner le sexe' }
    ],
    contPhoneGsm: [
      { type: 'pattern', message: 'Veuillez selectionner le sexe' }
    ],
    contPhonePro: [
      { type: 'pattern', message: 'Veuillez selectionner le sexe' }
    ],
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

  constructor(
    private useraddservice: UserAddService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.getRole();

    this.alerts.push({
      id: 3,
      type: 'danger',
      message: 'this.Errormessage'
    });
    if (this.adressbook) {
      this.bookadress = 1;
    } else {
      this.bookadress = 0;
    }
    // $(function () {
    //     $(document).ready(function () {
    //         $('#city').attr('disabled', 'disabled');
    //     });
    //     $('#city').focus(function () {
    //         $(this).autocomplete("search", "");
    //     });
    //     // OnKeyDown Function
    //     $("#zip").keyup(function () {
    //         var zip_in = $(this);
    //         var zip_box = $('#zipbox');
    //         if (zip_in.val().length < 5) {
    //             zip_box.removeClass('error success');
    //         }
    //         else if (zip_in.val().length > 5) {
    //             zip_box.addClass('error').removeClass('success');
    //         }
    //         else if ((zip_in.val().length == 5)) {
    //             // Make HTTP Request
    //             $.ajax({
    //                 url: "http://api.zippopotam.us/be/" + zip_in.val(),
    //                 cache: false,
    //                 dataType: "json",
    //                 type: "GET",
    //                 success: function (result: { [x: string]: { [x: string]: { [x: string]: any; }; }; }, success: any) {
    //                     // Enable the city box
    //                     $('#city').removeAttr('disabled');
    //                     // FR Post Code Returns multiple location
    //                     const suggestions = [];
    //                     for (const ii in result['places'])
    //                     {suggestions.push(result['places'][ii]['place name']); }
    //                     $("#city").autocomplete({ source: suggestions, delay: 50, disabled: false, minLength: 0 });
    //                     if (suggestions.length > 0) {
    //                         $('#city').placeholder = suggestions[0];
    //                     }
    //                     zip_box.addClass('success').removeClass('error');
    //                 },
    //                 error: function (result: any, success: any) {
    //                     zip_box.removeClass('success').addClass('error');
    //                 }
    //             });
    //         }
    //     });
    // });
  }

  ngOnInit() {
    sessionStorage.setItem('page', 'user-add');
    this.createForms();
    console.log('this.userDetailsForm:', this.userDetailsForm.value.birthday);
  }
  createForms() {
    // user details form validations
    this.userDetailsForm = this.fb.group({
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
          Validators.pattern("^([A-Za-z' -]+)")
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

  onSubmitUserDetails(value: any) {
    this._snackBar.open('Formulaire', 'Envoie du formulaire en cours...', {
      duration: 1000
    });
    console.log('il est validé');
    console.log('value: ', value);
    if (value.adressbook) {
      value.adressbook = 1;
    } else {
      value.adressbook = 0;
    }

    this.useraddservice.addUser(
      /* Login et Role */
      value.username,
      value.email,
      Number(value.role),
      value.isActive,
      /* Informations générales */
      value.adressbook,
      value.firstName,
      /* if('null' != value.adPvZip){value.adPvZip}, */
      value.lastName,
      value.birthday,
      value.sexGenre,
      /* Adresse Privée */
      value.adPvNum,
      value.adPvStreet,
      value.adPvCountry,
      value.adPvZip,
      value.adPvCity,
      /* Adresse Privée */
      value.firm,
      value.tva,
      value.adProNum,
      value.adProStreet,
      value.adProCountry,
      value.adProZip,
      value.adProCity,
      /* Contact */
      value.contPhonePv,
      value.contPhoneGsm,
      value.contPhonePro,
      value.contFacebook,
      value.contWebsite,
      /*  Autres informations */
      value.asbl,
      value.shortDesc,
      value.longDesc
    );
  }

  getBook() {
    return this.adressbook;
  }

  getRole() {
    this.useraddservice.getRole().subscribe(
      response => {
        this.loading = false;
        this.roles = response;
        this.stringifyRole = JSON.stringify(this.roles);
        this.parseRole = JSON.parse(this.stringifyRole);
        this.roleListName = this.parseRole.roleName;
        this.roleListId = this.parseRole.idROLE;
        this.dtTrigger.next();
      },
      error => {
        this.objStringError = JSON.stringify(error);
        this.objError = JSON.parse(this.objStringError);
        this.ErrorStatus = this.objError.status;
        this.ErrorstatusText = this.objError.statusText;
        this.Errormessage = this.objError.message;
      }
    );
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = _event => {
      this.previewUrl = reader.result;
    };
  }

  onSubmit() {
    // const formData = new FormData();
    // formData.append('files', this.fileData);
    // this.fileUploadProgress = '0%';
    // this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', formData, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    // .subscribe(events => {
    //   if(events.type === HttpEventType.UploadProgress) {
    //     this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
    //     console.log(this.fileUploadProgress);
    //   } else if(events.type === HttpEventType.Response) {
    //     this.fileUploadProgress = '';
    //     console.log(events.body);
    //     alert('SUCCESS !!');
    //   }
    // })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
