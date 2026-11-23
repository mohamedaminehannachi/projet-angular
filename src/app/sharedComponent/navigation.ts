import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="bg-white border-bottom" aria-label="Navigation principale">
      <ul class="nav justify-content-center py-2">
        <li class="nav-item"><a class="nav-link" href="#accueil">Accueil</a></li>
        <li class="nav-item"><a class="nav-link" href="#profil">Profil</a></li>
        <li class="nav-item"><a class="nav-link" href="#conferences">Conférences</a></li>
        <li class="nav-item"><a class="nav-link" href="#amis">Amis</a></li>
        <li class="nav-item"><a class="nav-link" href="#notifications">Notifications</a></li>
      </ul>
    </nav>
  `,
})
export class Navigation {}