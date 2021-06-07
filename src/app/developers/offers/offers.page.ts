import { Component, OnInit } from "@angular/core";
import { Offer } from "../model/offer.model";
import { OfferService } from "../service/offer.service";

@Component({
	selector: "app-offers",
	templateUrl: "./offers.page.html",
	styleUrls: ["./offers.page.scss"],
})
export class OffersPage implements OnInit {
	myOffer: Offer;

	constructor(private offerService: OfferService) {
		this.myOffer = this.offerService.getDevelopersOfferById(5);
	}

	ngOnInit() {}
}
