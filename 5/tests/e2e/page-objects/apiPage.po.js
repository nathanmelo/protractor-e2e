// apiPage.po.js
var ApiPage = function() {
  this.firstLinkOnLeftSide = element(by.css('.depth-1'));
  this.itemTitle = element(by.css('.api-title'));
  this.searchField = element(by.model('searchTerm'));
};
ApiPage.prototype.visit = function() {
  browser.get('#/api');
};
module.exports = ApiPage;
