import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardExerciseFinishedComponent } from './dashboard-exercise-finished.component';

describe('DashboardExerciseFinishedComponent', () => {
  let component: DashboardExerciseFinishedComponent;
  let fixture: ComponentFixture<DashboardExerciseFinishedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardExerciseFinishedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardExerciseFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
