import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MadamePage } from './madame.page';

describe('MadamePage', () => {
  let component: MadamePage;
  let fixture: ComponentFixture<MadamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MadamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
