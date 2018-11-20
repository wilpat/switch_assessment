import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  constructor(private render: Renderer2) { }

  ngAfterViewInit() {
    const classArr: any = document.querySelectorAll('.accordion');
    classArr.forEach(element=>{
      this.render.listen(element, 'click', (target)=>{
        var active = document.querySelector(".accordion.active");
        if (active && active != element) {
          active.classList.remove("active");
          active.nextElementSibling.classList.remove("show");
        }
        element.classList.toggle('active');
        element.nextElementSibling.classList.toggle('show'); 

      })
    });
  }

}
