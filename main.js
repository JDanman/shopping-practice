var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks.',
        image: './assets/vmSocks-green.jpg',
        img_src: 'https://www.dropbox.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
        inventory: 5,
        onSale: true,
        details: ["80% Cotton", "20% Polyester", "Gender-Neutral"],
        variants: [{
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green.jpg',
                variantSource: "https://www.dropbox.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0"

            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue.jpg',
                variantSource: "https://www.dropbox.com/s/t32hpz32y7snfna/vmSocks-blue-onWhite.jpg?dl=0"
            }
        ],
        sizes: [{
                sizeId: 101,
                sizeName: "Small"
            },
            {
                sizeId: 102,
                sizeName: "Medium"
            },
            {
                sizeId: 103,
                sizeName: "Large"
            }
        ],
        cart: 0
    },
    methods: {
        //addToCart() { = ES6 Shorthand (May not be supported by all browsers)
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (variantImage, variantSrc) {
            this.image = variantImage
            this.img_src = variantSrc
        },
        removeFromCart: function () {
            this.cart -= 1
        }
    }
})