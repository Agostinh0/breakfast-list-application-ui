import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFuncionariosComponent } from './listar.component';

describe('ListarFuncionariosComponent', () => {
  let component: ListarFuncionariosComponent;
  let fixture: ComponentFixture<ListarFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
