import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudAppService } from './crud-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CrudApp';
  
  constructor(private _service:CrudAppService,
    private router:Router ) { }

  DisplayUserData:any = [];
  name='';
  currentuser=null;

  ngOnInit(): void {

     this._service.GetUsers().subscribe((result)=>{
      console.log(result);
       this.DisplayUserData =result;
        })
    
      }

  searchByName(): void {
    this._service.searchByName(this.name)
      .subscribe(
        (Users) => {
          this.DisplayUserData = Users;
          console.log(Users);
        },
         (error: any)=> {
          console.log(error);
        })
  }
  getProduct(id: any): void {
     this._service.read(id)
      .subscribe(
        (        user: null) => {
          this.currentuser = user;
          console.log(user);
        },
        (        error: any) => {
          console.log(error);
        });
  }

  deleteProduct(): void {
    this._service.delete(this.currentuser.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/users']);
        },
        error => {
          console.log(error);
        });
  }
        
}
