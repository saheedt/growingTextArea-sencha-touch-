Ext.define('More.utils.TextArea', {
override: 'Ext.field.TextArea',
adjustHeight: Ext.Function.createBuffered(function (textarea) {
    var textAreaEl = textarea.getComponent().input;
    if (textAreaEl) {
    if (textAreaEl.dom.scrollHeight >= 110){
       textAreaEl.dom.style.height = 'auto';
       textAreaEl.dom.style.height = 110 + "px";
     }else if (textAreaEl.dom.scrollHeight >= 60 && textAreaEl.dom.scrollHeight <= 110){
       	textAreaEl.dom.style.height = 'auto';
        textAreaEl.dom.style.height = textAreaEl.dom.scrollHeight + "px";
      }else if (textAreaEl.dom.value == "" ){
     	textAreaEl.dom.style.height = 60 + "px";
     }
    }
}, 200, this),

constructor: function () {
    this.callParent(arguments);
    //console.info("New TextArea Loaded");
    this.on({
        scope: this,
        keyup: function (textarea, e) {
          textarea.adjustHeight(textarea);
        },
        change: function (textarea, newValue) {
            textarea.adjustHeight(textarea);
        }
    });
}});
