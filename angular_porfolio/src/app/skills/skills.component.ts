import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Google Managment',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'Word , Excel',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'english language',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'korean and russian language',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'talking',
      level: 'Expert',
      rating: 100,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
