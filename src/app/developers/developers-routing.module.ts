import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DevelopersPage } from "./developers.page";

const routes: Routes = [
	{
		path: "tabs",
		component: DevelopersPage,
		children: [
			{
				path: "locate",
				// loadChildren: () => import("./locate/locate.module").then((m) => m.LocatePageModule),
				children: [
					{
						path: "",
						loadChildren: () => import("./locate/locate.module").then((m) => m.LocatePageModule),
					},
					{
						path: ":id",
						loadChildren: () => import("./locate/details/details.module").then((m) => m.DetailsPageModule),
					},
				],
			},
			{
				path: "offers",
				children: [
					{
						path: "",
						loadChildren: () => import("./offers/offers.module").then((m) => m.OffersPageModule),
					},
					{
						path: "create",
						loadChildren: () => import("./offers/create/create.module").then((m) => m.CreatePageModule),
					},
					{
						path: "edit:id",
						loadChildren: () => import("./offers/edit/edit.module").then((m) => m.EditPageModule),
					},
					{
						path: ":id",
						loadChildren: () => import("./offers/hires/hires.module").then((m) => m.HiresPageModule),
					},
				],
			},
			{
				path: "about",
				loadChildren: () => import("./../about/about.module").then((m) => m.AboutPageModule),
			},
			// {
			// 	path: "",
			// 	pathMatch: "full",
			// 	redirectTo: "/developers/tabs/locate",
			// },
		],
	},
	{
		path: "",
		pathMatch: "full",
		redirectTo: "/developers/tabs/locate",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DevelopersPageRoutingModule {}
