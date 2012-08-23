enyo.kind({
  name: "TwitterSearchApp",
  kind: enyo.Control,
  layoutKind: "FittableRowsLayout",
  classes: "onyx",
 components: [
  {kind: "onyx.Toolbar", components: [
      {content: "Search", style: "padding-right: 10px"},
      {kind: "onyx.InputDecorator", components: [
        {kind: "onyx.Input", name: "searchTerm", 
          placeholder: "Search on Twitter", onkeydown: "searchOnEnter"},
        {kind: "Image", src: "search-input-search.png", ontap: "search"}
      ]}
    ]},
  { kind: "enyo.Scroller", fit: true, components: [
  { tag: "div", name: "tweetList" }
]}
],

  addTweet: function(inResult) {
    this.createComponent({
      kind: Tweet,
      container: this.$.tweetList,
      icon: inResult.profile_image_url,
      handle: inResult.from_user,
      text: inResult.text
    });
  },

  search: function() {
    var searchTerm = this.$.searchTerm.hasNode().value;
    var request = new enyo.JsonpRequest({
        url: "http://search.twitter.com/search.json",
        callbackName: "callback"
      });

    request.response(enyo.bind(this, "processSearchResults"));
    request.go({ q: searchTerm });
  },

  processSearchResults: function(inRequest, inResponse) {
    if (!inResponse) return;
    this.$.tweetList.destroyClientControls();
    enyo.forEach(inResponse.results, this.addTweet, this);
    this.$.tweetList.render();
  },

  searchOnEnter: function(inSender, inEvent) {
  if (inEvent.keyCode === 13) {
    this.search();
    return true;
  }
},
});
