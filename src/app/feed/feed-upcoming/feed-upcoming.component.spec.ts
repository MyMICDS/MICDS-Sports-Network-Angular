import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedUpcomingComponent } from './feed-upcoming.component';

describe('FeedUpcomingComponent', () => {
	let component: FeedUpcomingComponent;
	let fixture: ComponentFixture<FeedUpcomingComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FeedUpcomingComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FeedUpcomingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
