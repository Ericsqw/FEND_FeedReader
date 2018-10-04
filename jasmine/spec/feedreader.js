/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Check if each feed has a url defined and not empty
        it('url defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });

        //Check if each feed has a name defined and not empty
        it('name defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });
    });


    describe('The menu', function() {

        //check if menu element is hidden
        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Check if the menu changes visibility 
        when the nemu icon is clicked */
        it('menu changes visibility', function() {
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menu.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

         beforeEach(function(done) {
            loadFeed(0, done);
         });

         /* Check if there is a single .entry element
          within .feed container */
         it('are loaded', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
         });
    });

    describe('New Feed Selection', function() {
         var oldFeed;
         beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
            });
            loadFeed(1, done);
         });

         it('content changes', function(done) {
            expect($('.feed').html()).not.toBe(oldFeed);
            done();
            });
         });
}());
