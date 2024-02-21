import { Hero } from "./hero";

export interface ApiResponse{
    code:number;
    copyright:string;
    attributionText:string;
    attributionHTML:string;
    etag:string;
    data:{
        offset:number;
        limit:number;
        total:number;
        results:Hero[];
    }
}