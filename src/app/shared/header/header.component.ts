import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerSelected(idItem: string) {
    console.log(idItem);
    const headersItems = document.querySelectorAll<HTMLAnchorElement>("li a");
    for (var i = 0; i < headersItems.length; i++) {
      headersItems[i].classList.remove("activate-Item");
      headersItems[i].classList.add("deactivate-Item");
    }
    document.querySelector<HTMLAnchorElement>(`#${idItem}`)?.classList.add('activate-Item');
    document.querySelector<HTMLAnchorElement>(`#${idItem}`)?.classList.add('deactivate-Item');
  }
}
