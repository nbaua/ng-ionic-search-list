import { Injectable } from "@angular/core";
import { Offer } from "../model/offer.model";
import * as o from "./offers.json";

@Injectable({
	providedIn: "root",
})
export class OfferService {
	offers: Offer[] = [];

	constructor() {
		this.offers = [...o.offers];
	}

	public getDevelopersOfferById(id: number) {
		return {
			...this.offers.find((rec) => {
				return rec.id === id;
			}),
		};
	}
}
