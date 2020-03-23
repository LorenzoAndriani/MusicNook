import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UscitePage } from './uscite.page';

describe('UscitePage', () => {
  let component: UscitePage;
  let fixture: ComponentFixture<UscitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UscitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UscitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
