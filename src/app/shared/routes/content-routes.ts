import { Routes } from "@angular/router";

export const contentUser: Routes=[
    {
        path:'playlist',
        loadChildren: ()=> import('../../components/playlist/playlist.module').then(m=>m.PlaylistModule)
    }
]