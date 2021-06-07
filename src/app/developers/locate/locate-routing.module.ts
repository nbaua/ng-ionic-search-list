import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocatePage } from "./locate.page";

const routes: Routes = [
	{
		path: "",
		component: LocatePage,
	},
	// {
	// 	path: "details",
	// 	loadChildren: () => import("./details/details.module").then((m) => m.DetailsPageModule),
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LocatePageRoutingModule {}
