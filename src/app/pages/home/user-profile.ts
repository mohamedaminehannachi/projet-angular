import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
    <section id="profil" class="card border-start border-primary border-3 p-4">
      <h2 class="h4">Profil utilisateur</h2>
      <p><strong>Nom :</strong> Ahmed</p>
      <p class="mb-0"><strong>Email :</strong> ahmed@email.com</p>
    </section>
  `,
})
export class UserProfile {}