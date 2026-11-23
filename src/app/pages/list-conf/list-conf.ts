import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Conference {
  id: number;
  title: string;
  description: string;
  date: string;
  place: string;
  maxParticipants: number;
  nbParticipants: number;
}

@Component({
  selector: 'app-list-conf',
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './list-conf.html',
})
export class ConferenceList {
  readonly recherche = signal('');
  readonly conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Présentation des composants et du data binding avec Angular 21.',
      date: '2027-11-15',
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les signals dans Angular.',
      date: '2027-11-30',
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Rencontre autour du développement web.',
      date: '2027-11-20',
      place: 'Sousse',
      maxParticipants: 20,
      nbParticipants: 20,
    },
  ]);

  readonly conferencesFiltrees = computed(() => {
    const titre = this.recherche().trim().toLowerCase();
    return this.conferences().filter(conference => conference.title.toLowerCase().includes(titre));
  });

  inscrire(id: number): void {
    this.conferences.update(conferences =>
      conferences.map(conference =>
        conference.id === id && conference.nbParticipants < conference.maxParticipants
          ? { ...conference, nbParticipants: conference.nbParticipants + 1 }
          : conference,
      ),
    );
  }
}