import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  position: "bottom" | "top" | "left" | "right" = 'left';


  ngOnInit() {
    this.items = [
      {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
      },
      {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
      },
      {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
      },
      {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
      }
    ];
  }
}
