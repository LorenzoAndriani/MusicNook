import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SferaebbastaPage } from './sferaebbasta.page';

describe('SferaebbastaPage', () => {
  let component: SferaebbastaPage;
  let fixture: ComponentFixture<SferaebbastaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SferaebbastaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SferaebbastaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
