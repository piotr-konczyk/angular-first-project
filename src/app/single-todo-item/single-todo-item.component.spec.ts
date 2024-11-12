import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTodoItemComponent } from './single-todo-item.component';

describe('SingleTodoItemComponent', () => {
  let component: SingleTodoItemComponent;
  let fixture: ComponentFixture<SingleTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleTodoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
