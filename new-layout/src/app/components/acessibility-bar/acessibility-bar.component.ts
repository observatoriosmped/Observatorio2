import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AcessibilidadeDialogComponent } from 'src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component';

@Component({
  selector: 'app-acessibility-bar',
  templateUrl: './acessibility-bar.component.html',
  styleUrls: ['./acessibility-bar.component.css']
})
export class AcessibilityBarComponent implements OnInit {

  public divsArray = document.getElementsByTagName('div');
  public psArray = document.getElementsByTagName('p');
  public hsArray = document.getElementsByTagName('h1');
  public asArray = document.getElementsByTagName('a');
  public situationContrast = false;
  public loggedIn = false;
  public paginaInicial;
  public isPaginaInicial = true;
  public isTabVisivel = 0;
  private isDialogOpen = false;
  public oi = false;

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

  ngOnInit(): void {    
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
    document.getElementById("content").scrollIntoView();
  }

  irMenu() {
    document.getElementById("menubar").scrollIntoView();
  }

  aumentarFonte(){
    for (let p of this.psArray){
      if (p.className != 'donotchange'){
        p.style.fontSize = "36px"
        p.style.lineHeight = '40px'
      }
    }
    for (let h of this.hsArray){
      if (h.className != 'donotchange'){
        h.style.fontSize = "60px"
        h.style.lineHeight = '64px'
      }
    }
    for (let a of this.asArray){
      if (a.className != 'donotchange' && a.className != 'hover' && a.className != 'fontsize' && a.className != 'hover2'){
        a.style.fontSize = "40px"
        a.style.lineHeight = '44px'
      } else if (a.className === 'hover2') {
        a.style.fontSize = "26px"
        a.style.lineHeight = '30px'
      } else if(a.className === 'hover'){
        a.style.fontSize = "36px"
        a.style.lineHeight = '40px'
      }
    }
  }

  diminuirFonte(){
    for (let p of this.psArray){
      if (p.className != 'donotchange'){
        p.style.fontSize = ""
        p.style.lineHeight = ''
      }
    }
    for (let h of this.hsArray){
      if (h.className != 'donotchange'){
        h.style.fontSize = ""
        h.style.lineHeight = ''
      }
    }
    for (let a of this.asArray){
      if (a.className != 'donotchange'){
        a.style.fontSize = ""
        a.style.lineHeight = ''
      }
    }    
}

  altoContraste() {
    if (this.situationContrast === true) {
      for (let div of this.divsArray){
        if (div.className != 'donotchange'){
          div.style.backgroundColor = null;
          div.style.color = null;    
        }
      }
      for (let p of this.psArray){
        if (p.className != 'donotchange'){
          p.style.backgroundColor = null;
          p.style.color = null;     
        }
      }
      for (let h of this.hsArray){
        if (h.className != 'donotchange'){
          h.style.backgroundColor = null;
          h.style.color = null;      
        }
      }
      for (let a of this.asArray){
        if (a.className != 'donotchange'){
          a.style.backgroundColor = null;
          a.style.color = null      
        }
      }
      this.situationContrast = false;
    } else {
      for (let div of this.divsArray){
        if (div.className != 'donotchange'){
          div.style.backgroundColor = 'black';
          div.style.color = 'white'      
        }
      }
      for (let p of this.psArray){
        if (p.className != 'donotchange'){
          p.style.backgroundColor = 'black';
          p.style.color = 'white'      
        }
      }
      for (let h of this.hsArray){
        if (h.className != 'donotchange'){
          h.style.backgroundColor = 'black';
          h.style.color = 'white'      
        }
      }
      for (let a of this.asArray){
        if (a.className != 'donotchange' && a.className != 'hover' && a.className != 'hover2'){
          a.style.backgroundColor = 'black';
          a.style.color = 'white'      
        } else if (a.className === 'hover2'){
          a.style.color = 'white'     

        }
      }
      this.situationContrast = true;
    }
  }

  irRodape() {
    document.getElementById("footbar").scrollIntoView();
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
