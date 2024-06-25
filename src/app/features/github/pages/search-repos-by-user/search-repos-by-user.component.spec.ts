import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReposByUserComponent } from './search-repos-by-user.component';

describe('SearchReposByUserComponent', () => {
  let component: SearchReposByUserComponent;
  let fixture: ComponentFixture<SearchReposByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchReposByUserComponent]
    });
    fixture = TestBed.createComponent(SearchReposByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
