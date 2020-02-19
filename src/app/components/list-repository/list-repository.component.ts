import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-repository',
  templateUrl: './list-repository.component.html',
  styleUrls: ['./list-repository.component.scss']
})
export class ListRepositoryComponent implements OnInit {

  public repositoryType: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe((params)=>{
      this.repositoryType = params.get('type')
    })
  }

}
