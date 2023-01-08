import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToLoginComponent } from './link-to-login.component';

describe('LinkToLoginComponent', () => {
  let component: LinkToLoginComponent;
  let fixture: ComponentFixture<LinkToLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkToLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkToLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
