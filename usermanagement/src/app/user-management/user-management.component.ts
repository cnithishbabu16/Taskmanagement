import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  
  openModal() {
    const modalElement = document.getElementById('userModal') as HTMLElement;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

}
