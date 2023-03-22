import { Level } from './../model/level';
import { Component, OnInit } from '@angular/core';
import { Domaine } from '../model/domaine';

@Component({
  selector: 'app-AddPerson',
  templateUrl: './AddPerson.component.html',
  styleUrls: ['./AddPerson.component.scss'],
})
export class AddPersonComponent implements OnInit {
  domaines: Domaine[] = [
    Domaine.QA,
    Domaine.FRONTEND,
    Domaine.BACKEND
  ];
  levels: Level[] = [
    Level.NEW,
    Level.JUNIOR,
    Level.SENIOR
  ];

  constructor() {}

  ngOnInit() {}
}
