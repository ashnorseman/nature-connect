import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureUpdateComponent } from './configure-update.component';

describe('ConfigureUpdateComponent', () => {
  let component: ConfigureUpdateComponent;
  let fixture: ComponentFixture<ConfigureUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
