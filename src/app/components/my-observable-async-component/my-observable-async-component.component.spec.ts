import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyObservableAsyncComponentComponent } from './my-observable-async-component.component';

describe('MyObservableAsyncComponentComponent', () => {
  let component: MyObservableAsyncComponentComponent;
  let fixture: ComponentFixture<MyObservableAsyncComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyObservableAsyncComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyObservableAsyncComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
