import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanListComponent } from './duan-list.component';

describe('DuanListComponent', () => {
  let component: DuanListComponent;
  let fixture: ComponentFixture<DuanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuanListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
