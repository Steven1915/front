import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachLogComponent } from './teach-log.component';

describe('TeachLogComponent', () => {
  let component: TeachLogComponent;
  let fixture: ComponentFixture<TeachLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
