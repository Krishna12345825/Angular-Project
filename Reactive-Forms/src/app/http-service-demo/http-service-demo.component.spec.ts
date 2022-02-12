import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServiceDemoComponent } from './http-service-demo.component';

describe('HttpServiceDemoComponent', () => {
  let component: HttpServiceDemoComponent;
  let fixture: ComponentFixture<HttpServiceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpServiceDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServiceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
