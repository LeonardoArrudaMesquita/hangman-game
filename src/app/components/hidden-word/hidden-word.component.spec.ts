import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenWordComponent } from './hidden-word.component';

describe('HiddenWordComponent', () => {
  let component: HiddenWordComponent;
  let fixture: ComponentFixture<HiddenWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenWordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiddenWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
