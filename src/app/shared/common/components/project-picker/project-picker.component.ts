import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProject } from '@common/models/project';

@Component({
  selector: 'app-project-picker',
  templateUrl: './project-picker.component.html',
  styleUrls: ['./project-picker.component.scss'],
})
export class ProjectPickerComponent implements OnInit {
  openned = false;
  projectSelected: IProject = { projectid: '', name: '• • •'};
  @Input() projects: IProject[] = [];
  @Input() default: string;
  @Output() onChangeProjectSelected = new EventEmitter<IProject>();

  constructor() {}

  ngOnInit(): void {
    this.projectSelected = this.projects.find(i => i.selected) || this.projectSelected;
    if(this.default) {
      this.projectSelected = this.projects.find(i => i.projectid == this.default);
    }
  }

  menuClosed() {
    this.openned = false;
  }

  openMenu() {
    this.openned = true;
  }

  onClickProject(id: string) {
    const selected = this.projects.find(i => i.projectid == id);
    this.projectSelected = selected;
    this.onChangeProjectSelected.emit(selected);
  }
}
