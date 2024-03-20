import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Client Mannager',
      company: 'Hilton Hotel',
      duration: 'Feb 2024 -',
      description: [
        'I joined the team for prospects',
        'new opportunities',
      ],
    },
    {
      role: 'Client Mannager',
      company: 'Gabrielle Hotel',
      duration: 'Jun 2022 - Feb 2024',
      description: [
        'Worked over 100 Turist companies',
        'Won the best employer vote',
      ],
    },
    {
      role: 'Receptioner',
      company: 'Gabrielle Hotel',
      duration: 'DEC 2021 - Jun 2022',
      description: [
        'my first work in tashkent',
        'worked with many tourist groups',
      ],
    },
    {
      role: 'Receptioner',
      company: 'Silk Road',
      duration: 'Sep 2020 - March 2021',
      description: [
        'it was my first work experience in this hotel industry',
        'helped my to learn most valuable concepts in hotel industry',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
