import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HiresPage } from './hires.page';

describe('HiresPage', () => {
  let component: HiresPage;
  let fixture: ComponentFixture<HiresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HiresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
