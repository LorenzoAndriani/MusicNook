import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AchillelauroPage } from './achillelauro.page';

describe('AchillelauroPage', () => {
  let component: AchillelauroPage;
  let fixture: ComponentFixture<AchillelauroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchillelauroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AchillelauroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
