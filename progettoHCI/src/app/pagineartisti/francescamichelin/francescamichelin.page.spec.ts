import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrancescamichelinPage } from './francescamichelin.page';

describe('FrancescamichelinPage', () => {
  let component: FrancescamichelinPage;
  let fixture: ComponentFixture<FrancescamichelinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrancescamichelinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrancescamichelinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
