import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  template: `
    <section id="notifications" class="card border-start border-warning border-3 p-4">
      <h2 class="h4">Zone de notifications</h2>
      <p>Vous avez {{ notifications.length }} nouvelles notifications.</p>
      <button type="button" class="btn btn-outline-primary align-self-start"
        [attr.aria-expanded]="afficher()" (click)="basculerNotifications()">
        {{ afficher() ? 'Masquer les notifications' : 'Afficher les notifications' }}
      </button>
      @if (afficher()) {
        <ul class="mt-3 mb-0">
          @for (notification of notifications; track notification) {
            <li>{{ notification }}</li>
          }
        </ul>
      }
    </section>
  `,
})
export class Notifications {
  readonly afficher = signal(false);
  basculerNotifications(): void {
    this.afficher.update(valeur => !valeur);
  }

  readonly notifications = ['Une nouvelle conférence est disponible.', 'Sami a rejoint votre liste d’amis.'];
}