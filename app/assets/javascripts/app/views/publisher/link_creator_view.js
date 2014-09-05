app.views.PublisherLinkCreator = app.views.Base.extend({
  templateName: "link_creator",
  
  events: {
    'click .link .button': 'clickAddLink',
    'blur input': 'validate',
    'input input': 'validate'
  },

  postRenderTemplate: function(){
    this.$link = this.$('.link');
    this.inputCount = 2;
    this.trigger('change');
  },
  
  clickAddLink: function(evt){
    evt.preventDefault();
    this.addLinkInput();
    this.trigger('change');
  },
  
  addLinkInput: function(){
    this.inputCount++;
    var input_wrapper = this.$('.link').clone();
    var input = input_wrapper.find('input');

    var text = Diaspora.I18n.t('publisher.option', {
      nr: this.inputCount
    });
    input.attr('placeholder', text);
    input.val('');
    this.$pollAnswers.append(input_wrapper);
    this.toggleRemoveAnswer();
  },

  clearInputs: function(){
    this.$('#input').val('');
  },

});
