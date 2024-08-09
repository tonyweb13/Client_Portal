const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js").react().version();

mix.copy("resources/assets/icons", "public/icons");
mix.copy("resources/assets/images", "public/images");
