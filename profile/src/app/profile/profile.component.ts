// src/app/profile/profile.component.ts
import { Component } from '@angular/core';
import { ProfileService1 } from '../models.model';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent{
  setgs:ProfileService1={
    username: '',
    name: '',
    email: '',
    company: '',
    designation: '',
    bio: '',
    birthday: '',
    country: '',
    phone: '',
    website: '',
    socialLinks: {
      twitter: '',
      facebook: '',
      googlePlus: '',
      linkedIn: '',
      instagram: ''
    },
    notifications: {
      activity: {
        comment: false,
        answer: false,
        follow: false
      },
      application: {
        news: false,
        updates: false,
        blog: false
      }
    }
  }


  constructor(private profileService:ProfileService){}
   saveSettings(){
       this.profileService.saveSettings(this).
   }
}
