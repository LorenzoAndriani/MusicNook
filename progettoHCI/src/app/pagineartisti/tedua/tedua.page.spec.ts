import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeduaPage } from './tedua.page';

describe('TeduaPage', () => {
  let component: TeduaPage;
  let fixture: ComponentFixture<TeduaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeduaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeduaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
