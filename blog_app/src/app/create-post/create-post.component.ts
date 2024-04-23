import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  formModel: any = {};
  showError: boolean = false;
  errorMessage: any;
  constructor(
    public router: Router,
    public httpService: HttpService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.postForm = this.formBuilder.group({
      title: [this.formModel.title, [Validators.required]],
      body: [this.formModel.body, [Validators.required]],
      userId: [localStorage.getItem('userid')],
    });
  }
  ngOnInit(): void {
    
  }

  createPost(){
    this.httpService.createPost(this.postForm.value).subscribe(
      (data: any) => {
        this.postForm.value
        this.postForm.reset();
        console.log(data);
      }
    );
    //window.location.replace('/my-post');
  }
}
