import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {
  constructor(private messageService: MessageService) { }

  /** Créer une fonction curry handleError qui connaît déjà le nom du service*/
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result)

  /**
   * Retourne une fonction qui gère les échecs d'opération HTTP.
   *
   * Ce gestionnaire d'erreurs permet à l'application
   * de continuer à fonctionner comme si aucune erreur ne s'était produite.
   * @param serviceName = nom du service de données qui a tenté l'opération
   * @param operation - nom de l'opération qui a échoué
   * @param result - valeur optionnelle à renvoyer en tant que résultat observable
   */
  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: envoyer l'erreur à l'infrastructure de journalisation distante
      console.error(error); // se connecter à la console à la place

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;

      //  TODO: meilleur travail de transformation d'erreur pour la consommation de l'utilisateur
      this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);

      // Laissez l'application continuer à fonctionner en renvoyant un résultat sûr.
      return of( result );
    };

  }
}
