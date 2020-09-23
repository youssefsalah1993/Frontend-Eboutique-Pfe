import { Component, OnInit } from '@angular/core';
import { TypeUser } from 'src/app/common/type-user';
import { TypeUserService } from 'src/app/services/type-user.service';

@Component({
  selector: 'app-type-users-list',
  templateUrl: './type-users-list.component.html',
  styleUrls: ['./type-users-list.component.css']
})
export class TypeUsersListComponent implements OnInit {

  
  typeUsers : TypeUser[];
  
  constructor(private typeUserService: TypeUserService) { }

  ngOnInit() {
    this.listTypeUser();
  }

  listTypeUser() {
    this.typeUserService.getTypeUserList().subscribe(
      data => {
        this.typeUsers = data;
      }
    )
  } 

}
