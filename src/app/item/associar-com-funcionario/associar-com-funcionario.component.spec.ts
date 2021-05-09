import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociarComFuncionarioComponent } from './associar-com-funcionario.component';

describe('AssociarComFuncionarioComponent', () => {
  let component: AssociarComFuncionarioComponent;
  let fixture: ComponentFixture<AssociarComFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociarComFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociarComFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
