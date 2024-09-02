import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallowComponent } from './gallow.component';

describe('GallowComponent', () => {
  let component: GallowComponent;
  let fixture: ComponentFixture<GallowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
