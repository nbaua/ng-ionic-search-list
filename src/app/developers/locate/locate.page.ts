import { Component, OnInit } from "@angular/core";
import { Developer } from "../model/developer.model";
import { DeveloperService } from "../service/developer.service";

@Component({
	selector: "app-locate",
	templateUrl: "./locate.page.html",
	styleUrls: ["./locate.page.scss"],
})
export class LocatePage implements OnInit {
	loadedDevelopers: Developer[] = [];
	searchTerm = "";

	constructor(private developerService: DeveloperService) {}

	ngOnInit() {
		this.loadedDevelopers = this.developerService.getAllDevelopers();
	}

	setFilteredItems() {
		this.loadedDevelopers = this.developerService.filterItems(this.searchTerm);
	}
}
