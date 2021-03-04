// import { Product } from ".";
// import { Entity, Result, ID } from "./shared";

// export interface IStock {
//     product: Product, 
//     quantity : number,
//     minLimit : number,
//     createdDate : number,
//     updatedDate : number,
//     buyingPrice : number,
//     sellingPrice : number  
// }

// export class Stock extends Entity<IStock> {
//     private constructor(props : IStock, id?: ID) {
//         super(props, id);
//     }

//     public get product() : Product { return this.props.product; }
    
//     public get quantity() : number { return this.props.quantity }

//     public get minLimit() : number { return this.props.minLimit; }
    
//     public get createdDate() : number { return this.props.createdDate }
    
//     public get updatedDate() : number { return this.props.updatedDate }

//     public get sellingPrice() : number { return this.props.sellingPrice }

//     public static build(props : IStock, id?: ID) : Result<Stock> {
//         /* add validation */
//         return Result.success<Stock>(new Stock(props, id));
//     }
    
// }

export default function buildStock({}) {
    
}