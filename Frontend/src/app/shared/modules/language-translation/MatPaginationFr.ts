import { MatPaginatorIntl } from '@angular/material';
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  itemsPerPageLabel = 'Objects par page';
  nextPageLabel = 'Page suivante';
  previousPageLabel = 'Page précedente';

  getRangeLabel = function(
    page: number,
    pageSize: number,
    length: number
  ): string {
    if (length === 0 || pageSize === 0) {
      return `0 sur ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} sur ${length}`;
  };
}
