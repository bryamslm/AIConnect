import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuButtomComponent } from './menu-buttom.component';

describe('MenuButtomComponent', () => {
  let component: MenuButtomComponent;
  let fixture: ComponentFixture<MenuButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
