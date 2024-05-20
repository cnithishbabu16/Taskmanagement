// src/app/profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileService1 } from './models.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private settingsUrl = "assets/data/db.json";
  profileService: any;
  constructor(private http: HttpClient){}
  getSettings(): Observable<ProfileService1>{
    return this.http.get<ProfileService1>(this.settingsUrl);

  }
  saveSettings(): void {
    this.profileService.saveSettings().subscribe(
      (updatedSettings: any) => {
        console.log('Updated settings:', updatedSettings);
        // Optionally display a success message or update the UI
      },
      (error: any) => {
        console.error('Error updating settings:', error);
        // Optionally display an error message
      }
    );
  }


  // constructor() {
  //   this.settings = {
  //     username: '',
  //     name: '',
  //     email: '',
  //     company: '',
  //     designation: '',
  //     bio: '',
  //     birthday: '',
  //     country: 'Canada',
  //     phone: '',
  //     website: '',
  //     socialLinks: {
  //       twitter: '',
  //       facebook: '',
  //       googlePlus: '',
  //       linkedIn: '',
  //       instagram: ''
  //     },
  //     notifications: {
  //       activity: {
  //         comment: true,
  //         answer: true,
  //         follow: false
  //       },
  //       application: {
  //         news: true,
  //         updates: false,
  //         blog: true
  //       }
  //     }
  //   };
  // }

  // getSettings(): ProfileService1{
  //   return this.settings;
  // }

  updateSettings(updatedSettings: ProfileService1): Observable<ProfileService1> {
    const updateUrl = '/api/profile';
    return this.http.put<ProfileService1>(updateUrl,updatedSettings);
  }
  // private profileData: any = {};

  // // constructor() { }

  // setProfile(data: any) {
  //   this.profileData = data;
  // }

  // getProfile() {
  //   return this.profileData;
  // }
}
