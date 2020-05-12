import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService) { }
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  ngOnInit(): void {
  }

  // Set Dynamic Classes

  // todo css class always gets added while the is-complete is conditional
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe( todo => console.log(todo));
  }

  onDelete(todo) {
    console.log('delete');
    this.deleteTodo.emit(todo);
  }
}
