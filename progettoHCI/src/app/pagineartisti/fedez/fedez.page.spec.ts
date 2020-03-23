import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FedezPage } from './fedez.page';

describe('FedezPage', () => {
  let component: FedezPage;
  let fixture: ComponentFixture<FedezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FedezPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FedezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
