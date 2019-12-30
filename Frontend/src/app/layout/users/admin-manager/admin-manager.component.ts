import { AdminManagerService } from './admin-manager.service';
import {
  Component,
  OnDestroy,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input,
  ViewEncapsulation
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormControlName
} from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { User } from './../services/users-export';
import { Role } from './../../../shared/exports';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
declare let $: any;

export interface Error {
  objStringError: string;
  objError: any;
  ErrorstatusText: any;
  Errormessage: string;
  ErrorStatus: string;
}
@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.scss']
})
export class AdminManagerComponent implements OnDestroy, OnInit, AfterViewInit {
  loading = true;
  adminDetailsForm: FormGroup;
  public objStringError: string;
  public objError: any;
  public ErrorstatusText: any;
  public Errormessage: string;
  public ErrorStatus: string;
  public userCurrentRole: any;
  public error: Error;
  user$: Observable<User[]>;
  roles: Observable<Role[]>;
  alerts: Array<any> = [];
  [x: string]: any;
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  admins: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  submitted = false;

  constructor(
    private adminmanagerservice: AdminManagerService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.alerts.push({
      id: 3,
      type: 'danger',
      message: 'this.Errormessage'
    });
  }

  getAdmins() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100,
      order: []
    };

    this.adminmanagerservice.getAdmins().subscribe(
      response => {
        this.loading = false;
        this.admins = response;
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

  ngOnInit() {
    this.getAdmins();
    this.createForms();
    this.user$ = this.adminmanagerservice.getUsers();
    this.roles = this.adminmanagerservice.getRoles();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  createForms() {
    this.adminDetailsForm = this.fb.group({
      userid: ['', Validators.required],
      roleid: ['', Validators.required]
    });
  }

  get f() {
    return this.adminDetailsForm.controls;
  }

  onSubmitAdmin(value: any) {
    // stoper ici si le formulaire est invalide
    if (this.adminDetailsForm.invalid) {
      return;
    } else {
      this.user$.subscribe(
        response => {
          this.users = response;
          this.stringifyUsers = JSON.stringify(this.users);
          this.parseUsers = JSON.parse(this.stringifyUsers);
          let index = -1;
          const filteredRes = this.parseUsers.find(function(item: any, i: any) {
            if (item.id === parseInt(value.userid)) {
              index = i;
              return i;
            }
          });
          this.userCurrentRole = filteredRes.idROLE;
          console.log('this.userCurrentRole:', this.userCurrentRole);

          const jwtToken = localStorage.getItem('access_token');
          if (jwtToken) {
            const token = localStorage.getItem('access_token');
            const itRole = jwt_decode(token)['role'];
            const itId = jwt_decode(token)['id'];
            if (
              (itRole === 9 && itId === 1) || // Si Super-admin , alors pas de restriction // ou :
              (itRole > 6 && // Si admin plus élevé que redacteur (min. modérateur)
              itRole > this.userCurrentRole && // empecher qu'il modifie un admin egal ou superieur à son grade
              itId !== value.userid && // empecher qu'il se modifie lui-méme
                this.userCurrentRole !== 9) // empecher un super admin de modifier un autre super admin
            ) {
              this.submitted = true;
              this.adminmanagerservice.update(value.userid, value.roleid);
              // display form values on success
              alert('Parfait!! :-)\n\n vous avez changer le grade du membre');
            } else {
              alert(
                "Désolé!! :-(\n\n vous n'avez pas la permission de changer le grade de ce membre"
              );
            }
          }
          return this.userCurrentRole;
        },
        error => {
          this.objStringError = JSON.stringify(error);
          this.objError = JSON.parse(this.objStringError);
          this.ErrorStatus = this.objError.status;
          this.ErrorstatusText = this.objError.statusText;
          this.Errormessage = this.objError.message;
          console.log(error);
        }
      );
    }
  }
  //   selectedLanguageLocalStorage(localStorage) {
  //     for (key in localStorage) {
  //         if (key == "NG_TRANSLATE_LANG_KEY"){
  //             langKey = localStorage[key];
  //             if (langKey == "en") {
  //                 var language = {
  //                     "sEmptyTable":     "No data available in table",
  //                     "sInfo":           "Showing _START_ to _END_ of _TOTAL_ entries",
  //                     "sInfoEmpty":      "Showing 0 to 0 of 0 entries",
  //                     "sInfoFiltered":   "(filtered from _MAX_ total entries)",
  //                     "sInfoPostFix":    "",
  //                     "sInfoThousands":  ",",
  //                     "sLengthMenu":     "Show _MENU_ entries",
  //                     "sLoadingRecords": "Loading...",
  //                     "sProcessing":     "Processing...",
  //                     "sSearch":         "Search:",
  //                     "sZeroRecords":    "No matching records found",
  //                     "oPaginate": {
  //                         "sFirst":    "First",
  //                         "sLast":     "Last",
  //                         "sNext":     "Next",
  //                         "sPrevious": "Previous"
  //                     },
  //                     "oAria": {
  //                         "sSortAscending":  ": activate to sort column ascending",
  //                         "sSortDescending": ": activate to sort column descending"
  //                     }
  //                 }
  //             }else if (langKey == "it"){
  //                 var language = {
  //                     "sEmptyTable":     "Nessun dato presente nella tabella",
  //                     "sInfo":           "Vista da _START_ a _END_ di _TOTAL_ elementi",
  //                     "sInfoEmpty":      "Vista da 0 a 0 di 0 elementi",
  //                     "sInfoFiltered":   "(filtrati da _MAX_ elementi totali)",
  //                     "sInfoPostFix":    "",
  //                     "sInfoThousands":  ".",
  //                     "sLengthMenu":     "Visualizza _MENU_ elementi",
  //                     "sLoadingRecords": "Caricamento...",
  //                     "sProcessing":     "Elaborazione...",
  //                     "sSearch":         "Cerca:",
  //                     "sZeroRecords":    "La ricerca non ha portato alcun risultato.",
  //                     "oPaginate": {
  //                         "sFirst":      "Inizio",
  //                         "sPrevious":   "Precedente",
  //                         "sNext":       "Successivo",
  //                         "sLast":       "Fine"
  //                     },
  //                     "oAria": {
  //                         "sSortAscending":  ": attiva per ordinare la colonna in ordine crescente",
  //                         "sSortDescending": ": attiva per ordinare la colonna in ordine decrescente"
  //                     }
  //                 }
  //             }
  //             else if (langKey == "de"){
  //                 var language = {
  //                     "sEmptyTable":      "Keine Daten in der Tabelle vorhanden",
  //                     "sInfo":            "_START_ bis _END_ von _TOTAL_ Einträgen",
  //                     "sInfoEmpty":       "0 bis 0 von 0 Einträgen",
  //                     "sInfoFiltered":    "(gefiltert von _MAX_ Einträgen)",
  //                     "sInfoPostFix":     "",
  //                     "sInfoThousands":   ".",
  //                     "sLengthMenu":      "_MENU_ Einträge anzeigen",
  //                     "sLoadingRecords":  "Wird geladen...",
  //                     "sProcessing":      "Bitte warten...",
  //                     "sSearch":          "Suchen",
  //                     "sZeroRecords":     "Keine Einträge vorhanden.",
  //                     "oPaginate": {
  //                         "sFirst":       "Erste",
  //                         "sPrevious":    "Zurück",
  //                         "sNext":        "Nächste",
  //                         "sLast":        "Letzte"
  //                     },
  //                     "oAria": {
  //                         "sSortAscending":  ": aktivieren, um Spalte aufsteigend zu sortieren",
  //                         "sSortDescending": ": aktivieren, um Spalte absteigend zu sortieren"
  //                     },
  //                     select: {
  //                             rows: {
  //                             _: '%d Zeilen ausgewählt',
  //                             0: 'Zum Auswählen auf eine Zeile klicken',
  //                             1: '1 Zeile ausgewählt'
  //                             }
  //                     }
  //                 }
  //             }
  //             else if (langKey == "es"){
  //                 var language = {
  //                     "sProcessing":     "Procesando...",
  //                     "sLengthMenu":     "Mostrar _MENU_ registros",
  //                     "sZeroRecords":    "No se encontraron resultados",
  //                     "sEmptyTable":     "Ningún dato disponible en esta tabla",
  //                     "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
  //                     "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
  //                     "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
  //                     "sInfoPostFix":    "",
  //                     "sSearch":         "Buscar:",
  //                     "sUrl":            "",
  //                     "sInfoThousands":  ",",
  //                     "sLoadingRecords": "Cargando...",
  //                     "oPaginate": {
  //                         "sFirst":    "Primero",
  //                         "sLast":     "Último",
  //                         "sNext":     "Siguiente",
  //                         "sPrevious": "Anterior"
  //                     },
  //                     "oAria": {
  //                         "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
  //                         "sSortDescending": ": Activar para ordenar la columna de manera descendente"
  //                     }
  //                 }
  //             }
  //             else if (langKey == "fr"){
  //                 var language = {
  //                     "sProcessing":     "Traitement en cours...",
  //                     "sSearch":         "Rechercher&nbsp;:",
  //                     "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
  //                     "sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
  //                     "sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
  //                     "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
  //                     "sInfoPostFix":    "",
  //                     "sLoadingRecords": "Chargement en cours...",
  //                     "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
  //                     "sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
  //                     "oPaginate": {
  //                         "sFirst":      "Premier",
  //                         "sPrevious":   "Pr&eacute;c&eacute;dent",
  //                         "sNext":       "Suivant",
  //                         "sLast":       "Dernier"
  //                     },
  //                     "oAria": {
  //                         "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
  //                         "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
  //                     }
  //                 }
  //             }
  //             else if (langKey == "hr"){
  //                 var language = {
  //                     "sEmptyTable":      "Nema podataka u tablici",
  //                     "sInfo":            "Prikazano _START_ do _END_ od _TOTAL_ rezultata",
  //                     "sInfoEmpty":       "Prikazano 0 do 0 od 0 rezultata",
  //                     "sInfoFiltered":    "(filtrirano iz _MAX_ ukupnih rezultata)",
  //                     "sInfoPostFix":     "",
  //                     "sInfoThousands":   ",",
  //                     "sLengthMenu":      "Prikaži _MENU_ rezultata po stranici",
  //                     "sLoadingRecords":  "Dohvaćam...",
  //                     "sProcessing":      "Obrađujem...",
  //                     "sSearch":          "Pretraži:",
  //                     "sZeroRecords":     "Ništa nije pronađeno",
  //                     "oPaginate": {
  //                         "sFirst":       "Prva",
  //                         "sPrevious":    "Nazad",
  //                         "sNext":        "Naprijed",
  //                         "sLast":        "Zadnja"
  //                     },
  //                     "oAria": {
  //                         "sSortAscending":  ": aktiviraj za rastući poredak",
  //                         "sSortDescending": ": aktiviraj za padajući poredak"
  //                     }
  //                 }
  //             }
  //         }
  //     }
  //     return language;
  ngAfterViewInit(): void {
    //   console.log('this.datatableElement :', this.datatableElement);
    //   console.log('this.datatableElement.dtInstance :', this.datatableElement.dtInstance );

    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // console.log('dtInstance.columns() :', dtInstance.columns());
      dtInstance.columns().every(function() {
        const that = this;
        $('input', this.footer()).on('keyup change', function() {
          if (that.search() !== this['value']) {
            console.log('this[value] :', this['value']);
            that.search(this['value']).draw();
          }
        });
      });
    });
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
  RowSelected(admin: any) {
    console.log(admin);
    console.log(admin.id);

    this.data = admin.id;
    sessionStorage.setItem('idSelect', this.data);
    if (parseInt(admin.newRegister) === 1) {
      sessionStorage.setItem('new', 'true');
      console.log('new : true');
    } else {
      sessionStorage.setItem('new', 'false');
      console.log('new : false');
    }
    this.router.navigate([`admin/users/user-manager/user-get`]);
  }
}
