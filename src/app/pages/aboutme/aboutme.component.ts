import { Component, OnInit } from '@angular/core';
import { Github } from 'src/app/models/github';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  githubPerson?: Github;

  constructor(
    private github: GithubService
  ) { }

  ngOnInit(): void {
    this.tomaDatosGithub();
  }

  tomaDatosGithub(): void{
    this.github.getDatos().subscribe(response => {
      this.githubPerson = new Github(response)
      console.log(response)
    })
  }

}
