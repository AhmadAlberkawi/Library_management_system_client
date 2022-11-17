import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {

  canDeactivate(component: AdminEditComponent): boolean {

    if (component.editForm.dirty) {
      return confirm('Sind Sie sicher, Sie wollen weiter? Alle nicht gespeicherten Änderungen gehen verloren!');
    }
    return true;
  }
}
