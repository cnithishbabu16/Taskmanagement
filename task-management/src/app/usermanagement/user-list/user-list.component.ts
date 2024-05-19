// src/app/user-management/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../user-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User = {
    id: 0, name: '', email: '',
    role: '',
    contact: ''
  };
  isEdit = false;

  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  openCreateModal(): void {
    this.selectedUser = { id: 0, name: '', email: '',role: '',contact: '' };
    this.isEdit = false;
    this.openModal();
  }

  openEditModal(user: User): void {
    this.selectedUser = { ...user };
    this.isEdit = true;
    this.openModal();
  }

  openModal(): void {
    this.modalService.open(document.getElementById('userModal'));
  }

  saveUser(): void {
    if (this.isEdit) {
      this.userService.updateUser(this.selectedUser).subscribe(() => {
        this.loadUsers();
      });
    } else {
      this.userService.createUser(this.selectedUser).subscribe(() => {
        this.loadUsers();
      });
    }
    this.modalService.dismissAll();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
}
