import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JadenSmithPage } from './jaden-smith.page';

describe('JadenSmithPage', () => {
  let component: JadenSmithPage;
  let fixture: ComponentFixture<JadenSmithPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadenSmithPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JadenSmithPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
