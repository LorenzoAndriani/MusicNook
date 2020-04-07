import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtistiPage } from './artisti.page';

describe('ArtistiPage', () => {
  let component: ArtistiPage;
  let fixture: ComponentFixture<ArtistiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
