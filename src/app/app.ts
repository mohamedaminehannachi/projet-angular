import { Component } from '@angular/core';
import { Header } from './sharedComponent/header/header';
import { Navigation } from './sharedComponent/navigation';
import { Home } from './pages/home/home';
import { ConferenceList } from './pages/list-conf/list-conf';
import { Footer } from './sharedComponent/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navigation, Home, ConferenceList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}