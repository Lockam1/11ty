module.exports = function(eleventyConfig){
 
    eleventyConfig.addPassthroughCopy("ball.js");
    return{
        passthroughFileCopy: true
    }
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    return {
      passthroughFileCopy: true
    }
}