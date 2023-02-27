import { IWatch } from "../models/IWatch";

export class WatchService {
    private static watches:IWatch[] = [
        {
            id: "AA001",
            imageUrl: "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Rolex Watch",
            price: 1800,
            qty: 2
        },
        {
            id: "AA002",
            imageUrl: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Apple Watch",
            price: 1400,
            qty: 2
        },
        {
            id: "AA003",
            imageUrl: "https://images.pexels.com/photos/47339/mechanics-movement-feinmechanik-wrist-watch-47339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Oppo Watch",
            price: 1000,
            qty: 2
        },
        {
            id: "AA004",
            imageUrl: "https://images.pexels.com/photos/162466/clock-watch-time-hand-162466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Sonata Watch",
            price: 1600,
            qty: 2
        },
        {
            id: "AA005",
            imageUrl: "https://images.pexels.com/photos/416339/pexels-photo-416339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Mi Watch",
            price: 1200,
            qty: 2
        }
    ];
    public static getAllWatches():IWatch[]{
        return this.watches;
    }
}