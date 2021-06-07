import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Developer } from "../../model/developer.model";
import { DeveloperService } from "../../service/developer.service";

@Component({
	selector: "app-details",
	templateUrl: "./details.page.html",
	styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
	currentDeveloper: Developer;

	constructor(private router: Router, private route: ActivatedRoute, private navCtrl: NavController, private devService: DeveloperService) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			if (!params.has("id")) {
				return;
			}
			const devId = +params.get("id");
			this.currentDeveloper = this.devService.getDeveloperById(devId);
		});
	}

	onHireClick(e) {
		this.navCtrl.navigateBack("/developers/tabs/locate");
	}
}
