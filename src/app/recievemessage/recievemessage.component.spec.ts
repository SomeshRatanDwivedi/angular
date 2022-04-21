import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievemessageComponent } from './recievemessage.component';

describe('RecievemessageComponent', () => {
  let component: RecievemessageComponent;
  let fixture: ComponentFixture<RecievemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievemessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
