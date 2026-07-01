interface last_mile {
    id: number,
    partner_name: string,
    partner_rating: number,
    address: string,
    status: string,
    isDelivered: boolean
};
class Delivery1 implements last_mile {
    id = 26;
    partner_name = "Amazon";
    partner_rating = 4.5;
    address = "123 Main St";
    status = "Shipped";
    isDelivered = true;
}
