import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "developers",
		pathMatch: "full",
	},
	{
		path: "auth",
		loadChildren: () => import("./auth/auth.module").then((m) => m.AuthPageModule),
	},
	{
		path: "developers",
		loadChildren: () => import("./developers/developers.module").then((m) => m.DevelopersPageModule),
	},
	{
		path: "assignments",
		loadChildren: () => import("./assignments/assignments.module").then((m) => m.AssignmentsPageModule),
	},
	{
		path: "about",
		loadChildren: () => import("./about/about.module").then((m) => m.AboutPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
