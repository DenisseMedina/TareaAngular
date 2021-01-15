import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraPersonaComponent } from './estructura-persona.component';

describe('EstructuraPersonaComponent', () => {
  let component: EstructuraPersonaComponent;
  let fixture: ComponentFixture<EstructuraPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstructuraPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
