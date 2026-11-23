import { Component } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  template: `
    <section id="amis" class="card border-start border-success border-3 p-4">
      <h2 class="h4">Liste des amis</h2>
      <ul class="mb-0">
        @for (ami of amis; track ami) {
          <li>{{ ami }}</li>
        }
      </ul>
    </section>
  `,
})
export class FriendsList {
  readonly amis = ['Sami', 'Sarra', 'Amine'];
}