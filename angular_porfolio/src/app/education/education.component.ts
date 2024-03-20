import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "University of TURIN",
      course: 'MBA',
      duration: '2020-2024',
      score: '80%',
    },
    {
      institute: 'Intellect',
      course: 'M.S in Material Science',
      duration: '2018-2020',
      score: '75%',
    },
    {
      institute: 'IIT (Madras)',
      course: 'BTech in Metallurgical Engineering',
      duration: '2023-2024',
      score: '85%',
    },
    {
      institute: 'Vana Vani School',
      course: 'SSC',
      duration: '2024-',
      score: '90%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
