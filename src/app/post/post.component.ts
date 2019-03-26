import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit 
{
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: string;
  @Input() postLoveIts: number;
 
  constructor() 
  { 
    this.postLoveIts=0;
  }

  ngOnInit() 
  {

  }

  incrementLikes()
  {
    this.postLoveIts++;
  }

  decrementLikes()
  {
    this.postLoveIts--;
  }

  getColor()
  {
    if (this.postLoveIts > 0)
    {
      return 'green';
    }

    else if(this.postLoveIts === 0)
    {
      return 'transparent';
    }

    else
    {
      return 'red';
    }
  }
}
