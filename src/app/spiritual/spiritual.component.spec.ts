import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpiritualComponent } from './spiritual.component';

describe('SpiritualComponent', () => {
  let component: SpiritualComponent;
  let fixture: ComponentFixture<SpiritualComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
