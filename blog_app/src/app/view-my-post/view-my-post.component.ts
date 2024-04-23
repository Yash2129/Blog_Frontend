import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-view-my-post',
  templateUrl: './view-my-post.component.html',
  styleUrls: ['./view-my-post.component.css']
})
export class ViewMyPostComponent {
  postList: any = [];
  userId: any;
  userPostList: any = [];
  constructor(public router: Router, public httpService: HttpService, private authService: AuthService) {
    //this.userId = localStorage.getItem('userid');
    this.userId = 2;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){

    this.httpService.getPost().subscribe((data: any) => {
      this.postList = data;
      for(let i = 0; i<this.postList.length; i++){
        if(this.postList[i].userId == this.userId){
          this.userPostList.push(this.postList[i]);
        }
      }
    }, error => {
      // Handle error
      console.log(error);
    });

  }
}
