import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  navlinks: any = [{
    viewName: 'Home',
    icon: '',
    route: 'home'
  },
  {
    viewName: 'Finance',
    icon: '',
    route: 'finances'
  },
  {
    viewName: 'Invest',
    icon: '',
    route: 'investments'
  },
  {
    viewName: 'Store',
    icon: '',
    route: 'store'
  }];

  currentNavlink:any = this.navlinks[0];

  constructor(
  ) { }

  ngOnInit() { }

  gotoNavlink(link:any){
    this.currentNavlink = link;
  }

  openSettingsDialog(): void {
    // let dialogRef = this.dialog.open(ChooseAppSettingsModalComponent, {
    //   hasBackdrop: true,
    //   disableClose: false,
    //   height: '100vh',
    //   minWidth: '90%',
    //   position: {
    //     right: '0px',
    //     bottom: '0px',
    //   },
    //   data: {
    //     pack: packsDataSampleDoctor[0]
    //   }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  openLoginDialog(): void {
    // let dialogRef = this.dialog.open(SigninComponent, {
    //   hasBackdrop: true,
    //   disableClose: false,
    //   height: '100vh',
    //   minWidth: '90%',
    //   position: {
    //     right: '0px',
    //     bottom: '0px',
    //   },
    //   data: {
    //     pack: packsDataSampleDoctor[0]
    //   }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

}
