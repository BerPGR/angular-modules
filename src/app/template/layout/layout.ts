import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {
  props: LayoutProps = { titulo: '', subtitulo: '' }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(() => this.route.firstChild !== null),
      map(() => this.obterPropriedades())
    ).subscribe((props: LayoutProps) => this.props = props)
  }

  obterPropriedades() : LayoutProps {
    let rotaFilha = this.route.firstChild

    while (rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild
    } 

    return rotaFilha?.snapshot.data as LayoutProps
  }
}
