import { Component } from '@angular/core';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SinuheGuerra.com';
  comments: any = [];
  profile: any = {};
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(profile => {
      this.profile = profile;
      this.comments = profile.comments;
    });
    
  }
}
