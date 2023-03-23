import { MessageService } from './../services/message.service';
import { ApiService } from './../services/api.service';
import { Level } from './../model/level';
import { Component, OnInit } from '@angular/core';
import { Domaine } from '../model/domaine';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-AddPerson',
  templateUrl: './AddPerson.component.html',
  styleUrls: ['./AddPerson.component.scss'],
})
export class AddPersonComponent implements OnInit {

  domaines: Domaine[] = [Domaine.QA, Domaine.FRONTEND, Domaine.BACKEND];
  levels: Level[] = [Level.NEW, Level.JUNIOR, Level.SENIOR];

  personForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api : ApiService,
    public messageService : MessageService
    )
    {}

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      personName: ['', Validators.required],
      domaine: ['', Validators.required],
      level : ['',Validators.required],
      salaire : ['',Validators.required],
      comment : ['',Validators.required],
      date : ['',Validators.required]
    });
  }

  addPerson(){
   if(this.personForm.valid){
    this.api.addPerson(this.personForm.value)
    .subscribe({
      next:(res)=>{
        this.messageService.success('Person added successfully');
        this.personForm.setValue(res);
      },
      error:()=>{
       this.messageService.error('Error while adding the person');
      }
    })
   }
  }
}
