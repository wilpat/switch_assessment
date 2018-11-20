import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-admin',
  templateUrl: './customers-admin.component.html',
  styleUrls: ['./customers-admin.component.css']
})
export class CustomersAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggle_roll_button() {
      var x = document.getElementById("rq_rolldropdown");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }

}
