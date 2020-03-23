import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmiskillaPage } from './emiskilla.page';

describe('EmiskillaPage', () => {
  let component: EmiskillaPage;
  let fixture: ComponentFixture<EmiskillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiskillaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmiskillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
