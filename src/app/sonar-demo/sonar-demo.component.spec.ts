import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonarDemoComponent } from './sonar-demo.component';

describe('SonarDemoComponent', () => {
  let component: SonarDemoComponent;
  let fixture: ComponentFixture<SonarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonarDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
