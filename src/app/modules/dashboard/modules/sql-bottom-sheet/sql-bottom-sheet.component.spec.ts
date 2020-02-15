import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlBottomSheetComponent } from './sql-bottom-sheet.component';

describe('SqlBottomSheetComponent', () => {
  let component: SqlBottomSheetComponent;
  let fixture: ComponentFixture<SqlBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
