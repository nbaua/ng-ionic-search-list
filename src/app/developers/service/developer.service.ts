import { Injectable } from "@angular/core";
import { Developer } from "../model/developer.model";
import * as d from "./developers.json";

@Injectable({
	providedIn: "root",
})
export class DeveloperService {
	developers: Developer[] = [];
	constructor() {
		this.developers = [...d.developers];
	}

	public getAllDevelopers() {
		return [...this.developers];
	}

	public getDeveloperById(id: number) {
		return {
			...this.developers.find((rec) => {
				return rec.id === id;
			}),
		};
	}

	filterItems(searchTerm) {
		return this.developers.filter((item) => {
			return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.state.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
		});
	}
}
