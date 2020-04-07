import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NekPage } from './nek.page';

describe('NekPage', () => {
  let component: NekPage;
  let fixture: ComponentFixture<NekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
