import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Sottiboev Umarkhon'],
    ['DOB', '23/02/2002'],
    ['Work Exp', '5 Years'],
    ['Education', 'West Minister 2020-'],
    ['Interests', 'Establishing new Connections'],
  ];

  aboutMe: string[] = [
    'I bring over five years of experience in the contact manager sector, where I have demonstrated proficiency in establishing new connection',
    'My extensive tenure has equipped me with a deep understanding of industry trends, best practices, and client needs. Throughout my career, I have consistently',
    'delivered high-quality results and built strong professional relationships.I thrive in dynamic and fast-paced environments',
    'My track record of success positions me as a valuable asset to any team, and I am committed to contributing my skills and expertise to drive positive outcomes.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
