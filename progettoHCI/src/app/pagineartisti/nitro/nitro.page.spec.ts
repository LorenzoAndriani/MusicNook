import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NitroPage } from './nitro.page';

describe('NitroPage', () => {
  let component: NitroPage;
  let fixture: ComponentFixture<NitroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NitroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NitroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
