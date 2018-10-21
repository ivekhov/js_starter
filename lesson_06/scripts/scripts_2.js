            // create object - basket 
            var basket = {
                product: [], 
                cost: []
            }

            // create price-list
            var price = {
                id: ['b7', 'b8', 'b9'],
                product: ['Mers', 'Volvo', 'Toyota'], 
                cost: [75, 66, 50]
            }
    
            // ToDo: fixed
            function addProduct(){
                var temp = event.target.id;
                var index = findIndex(temp, price.id);
                basket.product.push(price.product[index]);
                basket.cost.push(price.cost[index]);
                console.log('added');
            }



            function findIndex(key, arr){
                var i = 0; 
                for(var k in arr){
                    if(arr[i] === key){
                        return i;
                    } 
                    i++;
                }
                return false; 
              }


            // deprecated functions
            // add smth to basket
            function addToBasket() {
                basket.product.push("Lada Kalina");
                basket.cost.push(300);
                console.log("added");
            }
    
            function addToBasket_1() {
                basket.product.push("Mers");
                basket.cost.push(250);
                console.log("added");
            }
            function addToBasket_2() {
                basket.product.push("Volvo");
                basket.cost.push(270);
                console.log("added");
            }
            function addToBasket_3() {
                basket.product.push("Toyota");
                basket.cost.push(100);
                console.log("added");
            }


  
            //ToDo: fixed
            function clearBasket() { 
                basket.cost.length= 0;
                basket.product.length = 0;
                console.log("basket in cleared");             
            }
    
            b3.onclick = addToBasket;
            b4.onclick = showCost;
            b5.onclick = showBasket;
            b6.onclick = clearBasket;
            
            
            b7.addEventListener('click', addProduct);
            b8.addEventListener('click', addProduct);
            b9.addEventListener('click', addProduct);

            // b7.addEventListener('click', addToBasket_1);           
            // b8.addEventListener('click', addToBasket_2);
            // b9.addEventListener('click', addToBasket_3);   
            
            // temp function
            b10.addEventListener('click', findId);

            // funсtion of summation 
            function sum(arr){
                var sum = 0;
                for(let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                return  sum;
            }
    
            // display sum of costs
            function showCost() {
                console.log(sum(basket.cost));
                alert("Total sum of order is " + sum(basket.cost) + " thsnds usd");
            }
            
            // display basket content
            function showBasket() {
                console.log(basket);
            }
            
            function findId() {
                console.log(event);
                return event.target.id;
            }
