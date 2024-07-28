import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsLvAutoWebscraperComponent } from './ss-lv-auto-webscraper.component';

describe('SsLvAutoWebscraperComponent', () => {
  let component: SsLvAutoWebscraperComponent;
  let fixture: ComponentFixture<SsLvAutoWebscraperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsLvAutoWebscraperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsLvAutoWebscraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
