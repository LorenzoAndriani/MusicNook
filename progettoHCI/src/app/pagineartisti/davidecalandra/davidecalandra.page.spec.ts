import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DavidecalandraPage } from './davidecalandra.page';

describe('DavidecalandraPage', () => {
  let component: DavidecalandraPage;
  let fixture: ComponentFixture<DavidecalandraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavidecalandraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DavidecalandraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
