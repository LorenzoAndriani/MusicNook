import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RussPage } from './russ.page';

describe('RussPage', () => {
  let component: RussPage;
  let fixture: ComponentFixture<RussPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RussPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RussPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
