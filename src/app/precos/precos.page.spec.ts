import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrecosPage } from './precos.page';

describe('PrecosPage', () => {
  let component: PrecosPage;
  let fixture: ComponentFixture<PrecosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
