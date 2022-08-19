import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptComponent } from './opt.component';

describe('OptComponent', () => {
  let component: OptComponent;
  let fixture: ComponentFixture<OptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
