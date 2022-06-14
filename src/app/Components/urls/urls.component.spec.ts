import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URLsComponent } from './urls.component';

describe('URLsComponent', () => {
  let component: URLsComponent;
  let fixture: ComponentFixture<URLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URLsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(URLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
