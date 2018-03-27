import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedGameComponent } from './feed-game.component';

describe('FeedGameComponent', () => {
	let component: FeedGameComponent;
	let fixture: ComponentFixture<FeedGameComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FeedGameComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FeedGameComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
