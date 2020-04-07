import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GhaliPage } from './ghali.page';

describe('GhaliPage', () => {
  let component: GhaliPage;
  let fixture: ComponentFixture<GhaliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhaliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GhaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
