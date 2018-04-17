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



         it('all feeds have an URL that is not empty', function(){
           for(let feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url).not.toBe('');
           }
         });



         it('all feeds have an name that is not empty', function(){
           for(let feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBe('');
           }
         });
    });


    describe('The menue', function() {
        const element = document.querySelector('body');

        it('side-menue is hidden by default', function() {
          expect(element.classList.contains('menu-hidden')).toBe(true);
        });


        it('side-menue appears on click and hides again on second click', function() {
          const menuIcon = $('.menu-icon-link');

          menuIcon.click();
          expect(element.classList.contains('menu-hidden')).toBe(false);

          menuIcon.click();
          expect(element.classList.contains('menu-hidden')).toBe(true);
        });
    });

    	describe('Initial Entries', function() {

         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

         it('there should be at least one entry element', function(done){
           const allEntries = document.querySelectorAll('.feed .entry-link');

           expect(allEntries.length).toBeGreaterThan(0);
           done();
         });
      });

    describe('New Feed Selection', function() {
      let entrieStart;
      let entrieChange;

      beforeEach(function(done) {
        loadFeed(0, function() {
          entrieStart = document.querySelectorAll('.feed .entry-link')[0];
        });
        loadFeed(1, function() {
          entrieChange = document.querySelectorAll('.feed .entry-link')[0];
          done();
        });
      });

      it('check if both feeds are defined and differ', function() {
        expect(entrieStart).toBeDefined();
        expect(entrieChange).toBeDefined();
        expect(entrieStart).not.toBe(entrieChange);
      });
    });

}());
