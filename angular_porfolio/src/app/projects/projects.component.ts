import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: '2023 yil tadbirlarini marroqli ot\'kazish loyihasi',
      technologies: 'Keep tracking to travel while holidays',
      description: [
        'Worked as a team lead to creatre seminars in local area contect halls.',
        'Created a unique route for every region to travel all regions',
        'good timing',
      ],
    },
    {
      title: '2024 Navruz bayrami',
      technologies: 'to cover Navruz holiday\'s participant need for our industry',
      description: [
        'make a daily routine , give them special bus to use',
        'add extra comforts which we provide',
        'gived a discount',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
