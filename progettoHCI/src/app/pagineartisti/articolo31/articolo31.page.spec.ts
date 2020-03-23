import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Articolo31Page } from './articolo31.page';

describe('Articolo31Page', () => {
  let component: Articolo31Page;
  let fixture: ComponentFixture<Articolo31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Articolo31Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Articolo31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
