import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class switchService {
    private questions = [
      {
        question: '¿Cuál es el nombre real de Iron Man?',
        options: ['Tony Stark', 'Bruce Wayne', 'Clark Kent', 'Steve Rogers'],
        correctAnswer: 0
      },
      {
        question: '¿Quién es el Dios del Trueno?',
        options: ['Hulk', 'Thor', 'Capitán América', 'Ojo de Halcón'],
        correctAnswer: 1
      },
    ];
  
    constructor() { }
  
    getQuestions() {
      return this.questions;
    }
  }