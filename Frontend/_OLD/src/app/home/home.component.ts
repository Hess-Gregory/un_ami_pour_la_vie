import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as $ from 'jquery';

import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    todo$: Observable<Todo[]>;
  constructor(private todos: TodoService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.todo$ = this.todos.getTodos(); }

}
