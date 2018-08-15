import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasfaComponent } from './fasfa.component';

describe('FasfaComponent', () => {
  let component: FasfaComponent;
  let fixture: ComponentFixture<FasfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
