module.exports = function(eleventyConfig){
 
    eleventyConfig.addPassthroughCopy("ball.js");
    return{
        passthroughFileCopy: true
    }
}