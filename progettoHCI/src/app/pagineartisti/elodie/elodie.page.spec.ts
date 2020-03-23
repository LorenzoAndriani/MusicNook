import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElodiePage } from './elodie.page';

describe('ElodiePage', () => {
  let component: ElodiePage;
  let fixture: ComponentFixture<ElodiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElodiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElodiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
