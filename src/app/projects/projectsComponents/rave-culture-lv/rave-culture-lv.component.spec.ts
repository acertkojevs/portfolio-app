import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaveCultureLvComponent } from './rave-culture-lv.component';

describe('RaveCultureLvComponent', () => {
  let component: RaveCultureLvComponent;
  let fixture: ComponentFixture<RaveCultureLvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaveCultureLvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaveCultureLvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
