// this references:
// method (part of an object) => object itself
// function (not part of an object) => global (window, global)
const video = {
    title: 't',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this );
    }
};

video.stop = function() {
    console.log(this);
};

function Video(title) {
    this.title = title;
    console.log(this);
}

video.stop();
const v = new Video('Marinos');
// Regular function by default, this, references the global object
// If you call a function using  new operator, this, will reference a new empty object

video.showTags();
// output this.title shows undefined because it is a regular function and 
// references the global window object.
// To solve this problem use second parameter to foreach
// second this references of the current object (show tags)