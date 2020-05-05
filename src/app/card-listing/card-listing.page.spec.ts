import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardListingPage } from './card-listing.page';

describe('CardListingPage', () => {
  let component: CardListingPage;
  let fixture: ComponentFixture<CardListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
