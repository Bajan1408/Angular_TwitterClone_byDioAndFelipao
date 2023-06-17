import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	tweetMessage:string = '';
	tweetMaxLength:number = 240;
	tweetRemain:number = this.tweetMaxLength;

	changeTweet() {
		this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length;
	}

	sendTweet() {
		alert(this.tweetMessage);
	}

  constructor() { }

  ngOnInit(): void {
  }

}
