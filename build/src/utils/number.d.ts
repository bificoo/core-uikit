import big from "big.js";
declare module "big.js" {
    interface BigConstructor {
        thousands: (value: number) => string;
    }
}
export default big;
