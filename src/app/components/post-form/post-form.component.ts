import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) {}

  ngOnInit() {}

  addPost(title, body) {
    if (!title || !body) {
      alert("Please add post");
    } else {
      console.log("123");
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        console.log(post);
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    console.log("UPDATE POST");
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}
