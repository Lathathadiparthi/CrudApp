import { Component, OnInit } from '@angular/core';
import { CrudAppService } from '../crud-app.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
   User= {
    name: '',
    email: '',
    city:'',
    company_name:'',
    available: false
  };
  submitted = false;


  constructor( private _service:CrudAppService) { }

  ngOnInit(): void {
  }

  AddUser(): void {
    const data = {
      name: this.User.name,
      email: this.User.email,
      city: this.User.city,
      company_name: this.User.company_name,

    };

    this._service.Add(data)
      .subscribe(
        response => {
          this.User=response;
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.User = {
      name: '',
      email: '',
      city: '',
      company_name: '',
      available: false
    };
  }
 
}


