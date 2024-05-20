// src/app/account-settings/account-settings.model.ts
export interface ProfileService1 {
    [x: string]: any;
    // [x: string]: any;
    //  profileService: any;
    username: string;
    name: string;
    email: string;
    company: string;
    designation: string;
    bio: string;
    birthday: string;
    country: string;
    phone: string;
    website: string;
    socialLinks: {
      twitter: string;
      facebook: string;
      googlePlus: string;
      linkedIn: string;
      instagram: string;
    };
    notifications: {
      activity: {
        comment: boolean;
        answer: boolean;
        follow: boolean;
      };
      application: {
        news: boolean;
        updates: boolean;
        blog: boolean;
      };
    };
  }
  