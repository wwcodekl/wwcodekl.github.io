const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;


// ... add in your webpack plugins
module.exports = {
    plugins: [
        new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, '../../'),
            // Required - Routes to render.
            routes: ['/year-in-review/2018'],
            indexPath: path.join(__dirname, '../../year-in-review/2018', 'index.html')
            // renderer: new Renderer({
            //     renderAfterElementExists: 'app-helper-list'
            // })
        })
    ]
}