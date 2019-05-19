import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  sections: string;
  opened: boolean;
  @ViewChild('sidebar') sidebar;
  @ViewChild('openMenuButton') openMenuButton;

  ngAfterContentChecked() {
    this.sections = '';
    const sectionHeaderElements = document.getElementsByTagName('h6') as HTMLCollection;
    Array.from(sectionHeaderElements).forEach(element => {
      const sectionHeaderClasses = ['text-info', 'border-bottom'];
      element.classList.add(...sectionHeaderClasses);
      const div = `<div class="mb-1 text-left"><a href="#${element.id}">
      - ${element.textContent}
      </a></div>`;
      this.sections += div;
    });
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebar.toggle();
    this.opened = !this.opened;
    if (this.opened) {
      this.openMenuButton.nativeElement.classList.add('hidden');
    } else {
      this.openMenuButton.nativeElement.classList.remove('hidden');
    }
  }

}
