import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadComponent } from './broad.component';

describe('BroadComponent', () => {
  let component: BroadComponent;
  let fixture: ComponentFixture<BroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
