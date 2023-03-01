import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStandComponent } from './header-stand.component';

describe('HeaderStandComponent', () => {
  let component: HeaderStandComponent;
  let fixture: ComponentFixture<HeaderStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeaderStandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
