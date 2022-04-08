import { style } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AcessibilidadeDialogComponent } from 'src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public loggedIn = false;
  public paginaInicial;
  private contraste = false;
  public isPaginaInicial = true;
  public isTabVisivel = 0;
  private isDialogOpen = false;

  constructor(private scroll: ViewportScroller, private router: Router, public dialog: MatDialog, private elementRef: ElementRef) {
    router.events.subscribe((val) => {
      if (this.router.url === '/paineis') {
        this.isPaginaInicial = true;
        document.getElementById("irBusca").tabIndex = 0;
        //this.isTabVisivel = 0;
      } else {
        this.isPaginaInicial = false;
        document.getElementById("irBusca").tabIndex = -1;
        //this.isTabVisivel = -1;
      }
    })

    this.dialog._afterAllClosed.subscribe(n => {
      this.isDialogOpen = false;
    });
  }

  ngOnInit() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });

        document.querySelector(this.getAttribute('href')).click();
      });
    });
  }

  irConteudo() {
    this.scroll.scrollToAnchor("conteudo");
    (document.querySelector('#conteudo') as HTMLElement)?.focus();
    (document.querySelector('#conteudo') as HTMLElement)?.click();
  }

  irBusca() {
    try {
      if (document.getElementById("filtro")) {
        document.getElementById("filtro").click();
      }
    } finally {
    }
  }

  inverterCor() {
    if (this.contraste === false) {
      document.documentElement.style.setProperty('--color-terciary-text', '#3e3d3d');
      document.documentElement.style.setProperty('--text-grey', '#111212');
      document.documentElement.style.setProperty('--color-background', '#f4f1f1');
      document.documentElement.style.setProperty('--color-primary', '#253b46');
      document.documentElement.style.setProperty('--color-search-field', '#504e4e');

      document.body.style.filter = "invert(1)";
      this.contraste = !this.contraste;
    } else {
      document.body.style.filter = "invert(0)";
      this.contraste = !this.contraste;

      document.documentElement.style.setProperty('--color-terciary-text', '#929292');
      document.documentElement.style.setProperty('--text-grey', '#5f6368');
      document.documentElement.style.setProperty('--color-background', '#fafafa');
      document.documentElement.style.setProperty('--color-primary', '#607d8b');
      document.documentElement.style.setProperty('--color-search-field', '#8a8a8a');
    }
  }

  openDialog() {
    if (!this.isDialogOpen) {
      this.dialog.open(AcessibilidadeDialogComponent);
      this.isDialogOpen = true;
    } else {
      this.dialog.closeAll();
      this.isDialogOpen = false;
    }
  }

  onKeyPressCor(e: KeyboardEvent) {
    if (e.keyCode == 13) {
      this.inverterCor();
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  onKeyPressAcess(e: KeyboardEvent){
    if(e.keyCode == 13){
      if (!this.isDialogOpen) {
        this.openDialog();
      }
    }
  }

  onKeyPressConteudo(e: KeyboardEvent){
    if(e.keyCode == 13){
      this.irConteudo();
    }
  }
}