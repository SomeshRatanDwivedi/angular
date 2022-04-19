import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomponenetComponent } from './childcomponenet.component';

describe('ChildcomponenetComponent', () => {
  let component: ChildcomponenetComponent;
  let fixture: ComponentFixture<ChildcomponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcomponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcomponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
