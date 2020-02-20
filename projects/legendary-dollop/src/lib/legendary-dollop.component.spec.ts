import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LegendaryDollopComponent } from './legendary-dollop.component';


describe('LegendaryDollopComponent', () => {
  let component: LegendaryDollopComponent;
  let fixture: ComponentFixture<LegendaryDollopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendaryDollopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendaryDollopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeFalsy();
  });
});
