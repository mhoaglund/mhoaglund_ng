import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects-service.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  _projects: []
  private _projectsService
  constructor(
    private projects: ProjectsService,
    private _sanitizer: DomSanitizer
   ) {
     this._projectsService = projects;

   }

   ngOnInit() {
    this._projectsService.getJSON().subscribe(data => {
      this._projects = data.all;
      console.log(this._projects)
      })
    }

    getPortrait(p) {
      return this._sanitizer.bypassSecurityTrustStyle(`url(assets/images/${p})`);
    }
}
