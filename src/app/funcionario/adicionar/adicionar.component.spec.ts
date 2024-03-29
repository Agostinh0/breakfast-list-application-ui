import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarFuncionarioComponent } from './adicionar.component';

describe('AdicionarFuncionarioComponent', () => {
  let component: AdicionarFuncionarioComponent;
  let fixture: ComponentFixture<AdicionarFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
