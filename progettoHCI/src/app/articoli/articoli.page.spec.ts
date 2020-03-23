import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArticoliPage } from './articoli.page';

describe('ArticoliPage', () => {
  let component: ArticoliPage;
  let fixture: ComponentFixture<ArticoliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticoliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticoliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
