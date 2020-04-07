import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TizianoferroPage } from './tizianoferro.page';

describe('TizianoferroPage', () => {
  let component: TizianoferroPage;
  let fixture: ComponentFixture<TizianoferroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TizianoferroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TizianoferroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
