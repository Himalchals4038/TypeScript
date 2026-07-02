type order_book = {
    name: string,
    price: number,
    pages: number,
    isPublished: boolean
};
function bookOrder(order: order_book) {
    console.log(`Name: ${order.name}`);
    console.log(`Price: ${order.price}`);
    console.log(`Pages: ${order.pages}`);
    console.log(`Published: ${order.isPublished}`);
};
function bookOrder2(order: order_book) {
    console.log(`Name: ${order.name}`);
    console.log(`Price: ${order.price}`);
    console.log(`Pages: ${order.pages}`);
    console.log(`Published: ${order.isPublished}`);
};
function deliverOrder(order: { id: number, address: string, status: string, isDelivered: boolean }) {
    console.log(`ID: ${order.id}`);
    console.log(`Address: ${order.address}`);
    console.log(`Status: ${order.status}`);
    console.log(`Delivered: ${order.isDelivered}`);
};
bookOrder({ name: "Learn TypeScript", price: 39.99, pages: 300, isPublished: true });
bookOrder2({ name: "TypeScript Marathon", price: 15.63, pages: 210, isPublished: false });
deliverOrder({ id: 1, address: "123 Main St", status: "Shipped", isDelivered: true });