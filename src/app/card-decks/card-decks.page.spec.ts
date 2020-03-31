import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardDecksPage } from './card-decks.page';

describe('CardDecksPage', () => {
  let component: CardDecksPage;
  let fixture: ComponentFixture<CardDecksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDecksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardDecksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
