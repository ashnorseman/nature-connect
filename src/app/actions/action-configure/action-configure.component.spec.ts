import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionConfigureComponent } from './action-configure.component';

describe('ActionConfigureComponent', () => {
  let component: ActionConfigureComponent;
  let fixture: ComponentFixture<ActionConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionConfigureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
