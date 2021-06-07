import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OffersPage } from "./offers.page";

const routes: Routes = [
	{
		path: "",
		component: OffersPage,
	},
	// {
	// 	path: "create",
	// 	loadChildren: () => import("./create/create.module").then((m) => m.CreatePageModule),
	// },
	// {
	// 	path: "edit",
	// 	loadChildren: () => import("./edit/edit.module").then((m) => m.EditPageModule),
	// },
	// {
	// 	path: "hires",
	// 	loadChildren: () => import("./hires/hires.module").then((m) => m.HiresPageModule),
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class OffersPageRoutingModule {}
