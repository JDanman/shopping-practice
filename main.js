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
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes: [
            {
                sizeId: 001,
                sizeName: "Small"
            },
            {
                sizeId: 002,
                sizeName: "Medium"
            },
            {
                sizeId: 003,
                sizeName: "Large"
            }
        ]
    }
})