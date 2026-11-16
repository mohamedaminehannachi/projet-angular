
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './sharedComponent/header/header';
import { Home } from './pages/home/home';
import { Footer } from './sharedComponent/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
