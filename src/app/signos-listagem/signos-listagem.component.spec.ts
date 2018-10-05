import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignosListagemComponent } from './signos-listagem.component';

describe('SignosListagemComponent', () => {
  let component: SignosListagemComponent;
  let fixture: ComponentFixture<SignosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
