Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: []
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    item.img = `img/${item.id_product}.jpg`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `<div class="products">
                 <product v-for="item of filtered" 
                 :key="item.id_product" 
                 :img = "item.img"
                 :product="item"
                 @add-product="$parent.$refs.cart.addProduct"></product>
                </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
     <div class="item_blok">
             <a class="item_cart" href="singlpage.html">
                 <div class="picture">
                     <img class="item_pic" :src="img" alt="item">
 
                 </div>
 
                 <p class="item_name">{{product.product_name}}</p>
                 <p class="price">{{product.price}}</p>
 
             </a>
             <div class="button_box">
                 <a class="item_button_add" href="#">
                     <div class="button_add">
                         <img class="img_but" src="img/cart.png" alt="cart">
                         <p class="button_add_text" @click="$parent.$emit('add-product', product)">Add to Cart</p>
                     </div>
                 </a>
             </div>
      </div>  
 `
});
 /*
   template: `<div class="products market_items">
              <product v-for="item of products"
              :key="item.id_product"
              :img="img"
              :product="item"></product>
             </div>`
});
Vue.component('product', {
   props: ['product', 'img'],
   template: `
   <div class="item_blok">
           <a class="item_cart" href="singlpage.html">
               <div class="picture">
                   <img class="item_pic" :src="img" alt="item">

               </div>

               <p class="item_name">{{product.product_name}}</p>
               <p class="price">{{product.price}}</p>

           </a>
           <div class="button_box">
               <a class="item_button_add" href="#">
                   <div class="button_add">
                       <img class="img_but" src="img/cart.png" alt="cart">
                       <p class="button_add_text" @click="$parent.$emit('add-product', product)">Add to Cart</p>
                   </div>
               </a>
           </div>
    </div>
`
})*/