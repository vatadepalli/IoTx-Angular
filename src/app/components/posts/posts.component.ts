import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/Post";

import { PostService } from "../../services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: "",
    body: ""
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post); // Adding a new post
  }

  editPost(post: Post) {
    this.currentPost = post; // The post to be edited is loaded into state
    this.isEdit = true; // Put the form in edit mode
  }

  // When receiveing event(updated) from the form component
  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1); // remove the edited post for the display
        this.posts.unshift(post); // Put the edited post at the top
        this.isEdit = false; // Bring button & setup to normal
        this.currentPost = {
          id: 0,
          title: "",
          body: ""
        }; // Clearing the form after edit
      }
    });
  }

  removePost(post: Post) {
    if (confirm("Are You Sure?")) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if (post.id === cur.id) {
            this.posts.splice(index, 1); // remove the deleted post for the display
            console.log("Deleted The Post");
          }
        });
      });
    }
  }
}
