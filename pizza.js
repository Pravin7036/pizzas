function Pizzaorder(){
    console.log("order the pizza")
} settimeout (Pizzaorder, 5000);

function Acceptorder() {
    console.log("accept the order")
} settimeout (Acceptorder, 1000);

function orderPreparation(){
    console.log("order is preparing in resto")
} settimeout (orderPreparation, 5000);

function orderready(){
    console.log("order is ready for delivery")
} settimeout (orderready, 5000);

function orderpick(){
    console.log("order is picked by delivery agent")
} settimeout (orderpick, 1000);

function orderonontheway(){
    console.log("order is on the way")
} settimeout (orderonontheway, 15000);

function orderdeliverd(){
    console.log("order is delived to custmer")
} 

Pizzaorder(Acceptorder,orderPreparation,orderready,orderpick,orderonontheway,orderdeliverd)