app.views.Aspect = app.views.Base.extend({
  templateName: "aspect",

  tagName: "li",

  className: 'hoverable',

  events: {
    'click .icons-check_yes_ok+a': 'toggleAspect'
  },

  toggleAspect: function(evt) {
    if (evt) { evt.preventDefault(); };
    this.model.toggleSelected();
    this.$el.find('.icons-check_yes_ok').toggleClass('selected');
    $('#selected_aspects_links'+this.model.id).toggle();
    app.router.aspects_stream();
  },

  presenter : function() {
    return _.extend(this.defaultPresenter(), {
      aspect : this.model
    })
  }
});
