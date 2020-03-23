import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarracashPage } from './marracash.page';

describe('MarracashPage', () => {
  let component: MarracashPage;
  let fixture: ComponentFixture<MarracashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarracashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarracashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
