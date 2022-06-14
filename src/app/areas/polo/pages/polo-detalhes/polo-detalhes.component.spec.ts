import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloDetalhesComponent } from './polo-detalhes.component';

describe('PoloDetalhesComponent', () => {
  let component: PoloDetalhesComponent;
  let fixture: ComponentFixture<PoloDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoloDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoloDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
