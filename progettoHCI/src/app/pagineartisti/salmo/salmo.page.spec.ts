import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalmoPage } from './salmo.page';

describe('SalmoPage', () => {
  let component: SalmoPage;
  let fixture: ComponentFixture<SalmoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalmoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalmoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
