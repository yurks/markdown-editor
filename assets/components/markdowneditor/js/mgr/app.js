var MarkdownEditor=function(e){e=e||{},MarkdownEditor.superclass.constructor.call(this,e)};Ext.override(MODx.panel.Resource,{}),Ext.extend(MarkdownEditor,Ext.Component,{remarkable:"",initComponent:function(){MarkdownEditor.superclass.initComponent.call(this),Ext.onReady(this.render,this)},parse:function(e){var t=this.remarkable.render(e);return t=t.replace(/%5B/g,"["),t=t.replace(/%5D/g,"]")},buildUI:function(){this.textarea.setDisplayed("none"),this.textarea.setWidth(0),this.textarea.setHeight(0),Ext.DomHelper.insertBefore(this.textarea,{tag:"textarea",name:"ta_markdown",id:"ta_markdown"}),this.taMarkdown=Ext.get("ta_markdown"),this.taMarkdown.setDisplayed("none"),this.taMarkdown.setWidth(0),this.taMarkdown.setHeight(0);var e=Ext.DomHelper.insertBefore(this.textarea,{tag:"div","class":"markdown-container"});Ext.DomHelper.append(e,{tag:"div",id:"content-md","class":this.textarea.dom.className}),Ext.DomHelper.append(e,{tag:"div",id:"preview-md","class":"markdown-body"}),Ext.DomHelper.append(e,{tag:"div",id:"toolbox",cn:[{tag:"span",id:"preview-button",html:'<i class="icon icon-toggle-off"></i> Preview'},{tag:"span",id:"fullscreen-button",html:'<i class="icon icon-expand"></i>'}]}),Ext.DomHelper.append(e,{tag:"span",style:"clear: both"})},registerAce:function(){this.editor=ace.edit(Ext.DomQuery.selectNode("div#content-md")),this.editor.setOptions({maxLines:1/0,minLines:25,enableBasicAutocompletion:!0}),this.editor.renderer.setShowGutter(!0),this.editor.renderer.setScrollMargin(10,10),this.editor.getSession().setValue(this.textarea.getValue()),this.editor.getSession().setMode("ace/mode/markdown"),this.editor.setTheme("ace/theme/monokai");var e=ace.require("ace/ext/language_tools"),t={getCompletions:function(e,t,i,s,a){return 0===s.length?(a(null,[]),void 0):(MODx.Ajax.request({url:MarkdownEditor_config.connectorUrl,params:{action:"mgr/resource/getlist",prefix:s},listeners:{success:{fn:function(e){a(null,e.results)},scope:this}}}),void 0)}};e.addCompleter(t)},registerMarked:function(){this.remarkable=new Remarkable({html:!0,highlight:function(e,t){if(t&&hljs.getLanguage(t))try{return hljs.highlight(t,e).value}catch(i){}try{return hljs.highlightAuto(e).value}catch(i){}return""}})},render:function(){var e=this;this.textarea=Ext.get("ta"),this.buildUI(),this.registerAce(),this.registerMarked();var t=Ext.get("preview-button"),i=Ext.get("fullscreen-button"),s=Ext.get("preview-md"),a=Ext.get("content-md"),o=a.parent(),r=MODx.load({xtype:"modx-treedrop",target:a,targetEl:a,onInsert:function(e){return this.insert(e),this.focus(),!0}.bind(this.editor),iframe:!0});this.textarea.on("destroy",function(){r.destroy()}),t.addListener("click",function(){s.isVisible()?(s.setDisplayed("none"),a.setDisplayed("block"),t.child("i").removeClass("icon-toggle-on"),t.child("i").addClass("icon-toggle-off")):(s.setDisplayed("block"),a.setDisplayed("none"),t.child("i").removeClass("icon-toggle-off"),t.child("i").addClass("icon-toggle-on"))}),i.addListener("click",function(){var e=i.child("i");e.hasClass("icon-expand")?(e.removeClass("icon-expand"),e.addClass("icon-compress"),s.setDisplayed("block"),a.setDisplayed("block"),t.hide(),o.addClass("fullscreen"),this.editor.setOption("maxLines",null)):(e.addClass("icon-expand"),e.removeClass("icon-compress"),s.setDisplayed("none"),a.setDisplayed("block"),t.show(),o.removeClass("fullscreen"),this.editor.setOption("maxLines",1/0)),this.editor.resize(!0)},this),this.editor.setValue(MarkdownEditor_content.content),this.editor.selection.clearSelection(),s.update(this.parse(this.editor.getValue())),this.editor.getSession().on("change",function(){var t=e.parse(e.editor.getValue());e.textarea.dom.value=t,e.taMarkdown.dom.value=e.editor.getValue(),s.update(t)})}}),MarkdownEditor=new MarkdownEditor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFBLGdCQUFBLFNBQUEsR0FDQSxFQUFBLE1BQ0EsZUFBQSxXQUFBLFlBQUEsS0FBQSxLQUFBLEdBRUEsS0FBQSxTQUFBLEtBQUEsTUFBQSxhQUVBLElBQUEsT0FBQSxlQUFBLElBQUEsV0FDQSxXQUFBLEdBQ0EsY0FBQSxXQUNBLGVBQUEsV0FBQSxjQUFBLEtBQUEsTUFFQSxJQUFBLFFBQUEsS0FBQSxPQUFBLE9BR0EsTUFBQSxTQUFBLEdBQ0EsR0FBQSxHQUFBLEtBQUEsV0FBQSxPQUFBLEVBS0EsT0FIQSxHQUFBLEVBQUEsUUFBQSxPQUFBLEtBQ0EsRUFBQSxFQUFBLFFBQUEsT0FBQSxNQUtBLFFBQUEsV0FDQSxLQUFBLFNBQUEsYUFBQSxRQUNBLEtBQUEsU0FBQSxTQUFBLEdBQ0EsS0FBQSxTQUFBLFVBQUEsR0FFQSxJQUFBLFVBQUEsYUFBQSxLQUFBLFVBQ0EsSUFBQSxXQUNBLEtBQUEsY0FDQSxHQUFBLGdCQUdBLEtBQUEsV0FBQSxJQUFBLElBQUEsZUFDQSxLQUFBLFdBQUEsYUFBQSxRQUNBLEtBQUEsV0FBQSxTQUFBLEdBQ0EsS0FBQSxXQUFBLFVBQUEsRUFFQSxJQUFBLEdBQUEsSUFBQSxVQUFBLGFBQUEsS0FBQSxVQUNBLElBQUEsTUFDQSxRQUFBLHNCQUdBLEtBQUEsVUFBQSxPQUFBLEdBQ0EsSUFBQSxNQUNBLEdBQUEsYUFDQSxRQUFBLEtBQUEsU0FBQSxJQUFBLFlBR0EsSUFBQSxVQUFBLE9BQUEsR0FDQSxJQUFBLE1BQ0EsR0FBQSxhQUNBLFFBQUEsa0JBR0EsSUFBQSxVQUFBLE9BQUEsR0FDQSxJQUFBLE1BQ0EsR0FBQSxVQUNBLEtBQ0EsSUFBQSxPQUNBLEdBQUEsaUJBQ0EsS0FBQSxpREFFQSxJQUFBLE9BQ0EsR0FBQSxvQkFDQSxLQUFBLHVDQUlBLElBQUEsVUFBQSxPQUFBLEdBQ0EsSUFBQSxPQUNBLE1BQUEsaUJBSUEsWUFBQSxXQUVBLEtBQUEsT0FBQSxJQUFBLEtBQUEsSUFBQSxTQUFBLFdBQUEsbUJBQ0EsS0FBQSxPQUFBLFlBQ0EsU0FBQSxJQUNBLFNBQUEsR0FDQSwyQkFBQSxJQUVBLEtBQUEsT0FBQSxTQUFBLGVBQUEsR0FDQSxLQUFBLE9BQUEsU0FBQSxnQkFBQSxHQUFBLElBQ0EsS0FBQSxPQUFBLGFBQUEsU0FBQSxLQUFBLFNBQUEsWUFDQSxLQUFBLE9BQUEsYUFBQSxRQUFBLHFCQUNBLEtBQUEsT0FBQSxTQUFBLG9CQUVBLElBQUEsR0FBQSxJQUFBLFFBQUEsMEJBQ0EsR0FDQSxlQUFBLFNBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxHQUNBLE1BQUEsS0FBQSxFQUFBLFFBQUEsRUFBQSxTQUFBLFNBQ0EsS0FBQSxLQUFBLFNBQ0EsSUFBQSxzQkFBQSxhQUNBLFFBQ0EsT0FBQSx1QkFDQSxPQUFBLEdBRUEsV0FDQSxTQUNBLEdBQUEsU0FBQSxHQUNBLEVBQUEsS0FBQSxFQUFBLFVBRUEsTUFBQSxTQVhBLFNBa0JBLEdBQUEsYUFBQSxJQUdBLGVBQUEsV0FFQSxLQUFBLFdBQUEsR0FBQSxhQUNBLE1BQUEsRUFDQSxVQUFBLFNBQUEsRUFBQSxHQUNBLEdBQUEsR0FBQSxLQUFBLFlBQUEsR0FDQSxJQUNBLE1BQUEsTUFBQSxVQUFBLEVBQUEsR0FBQSxNQUNBLE1BQUEsSUFHQSxJQUNBLE1BQUEsTUFBQSxjQUFBLEdBQUEsTUFDQSxNQUFBLElBRUEsTUFBQSxPQUtBLE9BQUEsV0FDQSxHQUFBLEdBQUEsSUFDQSxNQUFBLFNBQUEsSUFBQSxJQUFBLE1BRUEsS0FBQSxVQUNBLEtBQUEsY0FDQSxLQUFBLGdCQVVBLElBQUEsR0FBQSxJQUFBLElBQUEsa0JBQ0EsRUFBQSxJQUFBLElBQUEscUJBQ0EsRUFBQSxJQUFBLElBQUEsY0FDQSxFQUFBLElBQUEsSUFBQSxjQUNBLEVBQUEsRUFBQSxTQUVBLEVBQUEsS0FBQSxNQUNBLE1BQUEsZ0JBQ0EsT0FBQSxFQUNBLFNBQUEsRUFDQSxTQUFBLFNBQUEsR0FHQSxNQUZBLE1BQUEsT0FBQSxHQUNBLEtBQUEsU0FDQSxHQUNBLEtBQUEsS0FBQSxRQUNBLFFBQUEsR0FFQSxNQUFBLFNBQUEsR0FBQSxVQUFBLFdBQUEsRUFBQSxZQUVBLEVBQUEsWUFBQSxRQUFBLFdBQ0EsRUFBQSxhQUNBLEVBQUEsYUFBQSxRQUNBLEVBQUEsYUFBQSxTQUVBLEVBQUEsTUFBQSxLQUFBLFlBQUEsa0JBQ0EsRUFBQSxNQUFBLEtBQUEsU0FBQSxxQkFFQSxFQUFBLGFBQUEsU0FDQSxFQUFBLGFBQUEsUUFFQSxFQUFBLE1BQUEsS0FBQSxZQUFBLG1CQUNBLEVBQUEsTUFBQSxLQUFBLFNBQUEscUJBSUEsRUFBQSxZQUFBLFFBQUEsV0FDQSxHQUFBLEdBQUEsRUFBQSxNQUFBLElBRUEsR0FBQSxTQUFBLGdCQUNBLEVBQUEsWUFBQSxlQUNBLEVBQUEsU0FBQSxpQkFFQSxFQUFBLGFBQUEsU0FDQSxFQUFBLGFBQUEsU0FFQSxFQUFBLE9BRUEsRUFBQSxTQUFBLGNBRUEsS0FBQSxPQUFBLFVBQUEsV0FBQSxRQUlBLEVBQUEsU0FBQSxlQUNBLEVBQUEsWUFBQSxpQkFFQSxFQUFBLGFBQUEsUUFDQSxFQUFBLGFBQUEsU0FFQSxFQUFBLE9BRUEsRUFBQSxZQUFBLGNBRUEsS0FBQSxPQUFBLFVBQUEsV0FBQSxNQUtBLEtBQUEsT0FBQSxRQUFBLElBQ0EsTUFFQSxLQUFBLE9BQUEsU0FBQSx1QkFBQSxTQUNBLEtBQUEsT0FBQSxVQUFBLGlCQUVBLEVBQUEsT0FBQSxLQUFBLE1BQUEsS0FBQSxPQUFBLGFBQ0EsS0FBQSxPQUFBLGFBQUEsR0FBQSxTQUFBLFdBQ0EsR0FBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsV0FFQSxHQUFBLFNBQUEsSUFBQSxNQUFBLEVBQ0EsRUFBQSxXQUFBLElBQUEsTUFBQSxFQUFBLE9BQUEsV0FDQSxFQUFBLE9BQUEsUUFJQSxlQUFBLEdBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1hcmtkb3duRWRpdG9yID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIE1hcmtkb3duRWRpdG9yLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLGNvbmZpZyk7XG59O1xuRXh0Lm92ZXJyaWRlKE1PRHgucGFuZWwuUmVzb3VyY2UsIHt9KTtcblxuRXh0LmV4dGVuZChNYXJrZG93bkVkaXRvcixFeHQuQ29tcG9uZW50LHtcbiAgICByZW1hcmthYmxlOiAnJ1xuICAgICxpbml0Q29tcG9uZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgTWFya2Rvd25FZGl0b3Iuc3VwZXJjbGFzcy5pbml0Q29tcG9uZW50LmNhbGwodGhpcyk7XG5cbiAgICAgICAgRXh0Lm9uUmVhZHkodGhpcy5yZW5kZXIsIHRoaXMpO1xuICAgIH1cblxuICAgICxwYXJzZTogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMucmVtYXJrYWJsZS5yZW5kZXIoaW5wdXQpO1xuXG4gICAgICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKC8lNUIvZywgJ1snKTtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoLyU1RC9nLCAnXScpO1xuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgLGJ1aWxkVUk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhLnNldERpc3BsYXllZCgnbm9uZScpO1xuICAgICAgICB0aGlzLnRleHRhcmVhLnNldFdpZHRoKDApO1xuICAgICAgICB0aGlzLnRleHRhcmVhLnNldEhlaWdodCgwKTtcblxuICAgICAgICBFeHQuRG9tSGVscGVyLmluc2VydEJlZm9yZSh0aGlzLnRleHRhcmVhLCB7XG4gICAgICAgICAgICB0YWc6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgICBuYW1lOiAndGFfbWFya2Rvd24nLFxuICAgICAgICAgICAgaWQ6ICd0YV9tYXJrZG93bidcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50YU1hcmtkb3duID0gRXh0LmdldCgndGFfbWFya2Rvd24nKTtcbiAgICAgICAgdGhpcy50YU1hcmtkb3duLnNldERpc3BsYXllZCgnbm9uZScpO1xuICAgICAgICB0aGlzLnRhTWFya2Rvd24uc2V0V2lkdGgoMCk7XG4gICAgICAgIHRoaXMudGFNYXJrZG93bi5zZXRIZWlnaHQoMCk7XG5cbiAgICAgICAgdmFyIHdyYXBwZXIgPSBFeHQuRG9tSGVscGVyLmluc2VydEJlZm9yZSh0aGlzLnRleHRhcmVhLCB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3M6ICdtYXJrZG93bi1jb250YWluZXInXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV4dC5Eb21IZWxwZXIuYXBwZW5kKHdyYXBwZXIse1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnY29udGVudC1tZCcsXG4gICAgICAgICAgICBjbGFzczogdGhpcy50ZXh0YXJlYS5kb20uY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV4dC5Eb21IZWxwZXIuYXBwZW5kKHdyYXBwZXIse1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAncHJldmlldy1tZCcsXG4gICAgICAgICAgICBjbGFzczogJ21hcmtkb3duLWJvZHknXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV4dC5Eb21IZWxwZXIuYXBwZW5kKHdyYXBwZXIse1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAndG9vbGJveCcsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBpZDogJ3ByZXZpZXctYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBodG1sOiAnPGkgY2xhc3M9XCJpY29uIGljb24tdG9nZ2xlLW9mZlwiPjwvaT4gUHJldmlldydcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgIGlkOiAnZnVsbHNjcmVlbi1idXR0b24nLFxuICAgICAgICAgICAgICAgIGh0bWw6ICc8aSBjbGFzcz1cImljb24gaWNvbi1leHBhbmRcIj48L2k+J1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgRXh0LkRvbUhlbHBlci5hcHBlbmQod3JhcHBlcix7XG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIHN0eWxlOiAnY2xlYXI6IGJvdGgnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAscmVnaXN0ZXJBY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWRlID0gdGhpcztcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBhY2UuZWRpdChFeHQuRG9tUXVlcnkuc2VsZWN0Tm9kZSgnZGl2I2NvbnRlbnQtbWQnKSk7XG4gICAgICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgbWF4TGluZXM6IEluZmluaXR5LFxuICAgICAgICAgICAgbWluTGluZXM6IDI1LFxuICAgICAgICAgICAgZW5hYmxlQmFzaWNBdXRvY29tcGxldGlvbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lZGl0b3IucmVuZGVyZXIuc2V0U2hvd0d1dHRlcih0cnVlKTtcbiAgICAgICAgdGhpcy5lZGl0b3IucmVuZGVyZXIuc2V0U2Nyb2xsTWFyZ2luKDEwLCAxMCk7XG4gICAgICAgIHRoaXMuZWRpdG9yLmdldFNlc3Npb24oKS5zZXRWYWx1ZSh0aGlzLnRleHRhcmVhLmdldFZhbHVlKCkpO1xuICAgICAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShcImFjZS9tb2RlL21hcmtkb3duXCIpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS9tb25va2FpXCIpO1xuXG4gICAgICAgIHZhciBsYW5nVG9vbHMgPSBhY2UucmVxdWlyZShcImFjZS9leHQvbGFuZ3VhZ2VfdG9vbHNcIik7XG4gICAgICAgIHZhciByaHltZUNvbXBsZXRlciA9IHtcbiAgICAgICAgICAgIGdldENvbXBsZXRpb25zOiBmdW5jdGlvbihlZGl0b3IsIHNlc3Npb24sIHBvcywgcHJlZml4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXgubGVuZ3RoID09PSAwKSB7IGNhbGxiYWNrKG51bGwsIFtdKTsgcmV0dXJuIH1cbiAgICAgICAgICAgICAgICBNT0R4LkFqYXgucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogTWFya2Rvd25FZGl0b3JfY29uZmlnLmNvbm5lY3RvclVybFxuICAgICAgICAgICAgICAgICAgICAscGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdtZ3IvcmVzb3VyY2UvZ2V0bGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICxwcmVmaXg6IHByZWZpeFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHIucmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGFuZ1Rvb2xzLmFkZENvbXBsZXRlcihyaHltZUNvbXBsZXRlcik7XG4gICAgfVxuXG4gICAgLHJlZ2lzdGVyTWFya2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1kZSA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVtYXJrYWJsZSA9IG5ldyBSZW1hcmthYmxlKHtcbiAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uIChzdHIsIGxhbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFuZyAmJiBobGpzLmdldExhbmd1YWdlKGxhbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGxqcy5oaWdobGlnaHQobGFuZywgc3RyKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBobGpzLmhpZ2hsaWdodEF1dG8oc3RyKS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7IC8vIHVzZSBleHRlcm5hbCBkZWZhdWx0IGVzY2FwaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICxyZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWRlID0gdGhpcztcbiAgICAgICAgdGhpcy50ZXh0YXJlYSA9IEV4dC5nZXQoJ3RhJyk7XG5cbiAgICAgICAgdGhpcy5idWlsZFVJKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBY2UoKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlck1hcmtlZCgpO1xuXG5cbiAgICAgICAgLy8gY29weSBiYWNrIHRvIHRleHRhcmVhIG9uIGZvcm0gc3VibWl0Li4uXG4gICAgICAgIC8vdGV4dGFyZWEuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgIHRleHRhcmVhLnZhbChlZGl0b3IuZ2V0U2Vzc2lvbigpLmdldFZhbHVlKCkpO1xuICAgICAgICAvL30pO1xuXG5cblxuICAgICAgICB2YXIgcHJldmlld0J1dHRvbiA9IEV4dC5nZXQoJ3ByZXZpZXctYnV0dG9uJyk7XG4gICAgICAgIHZhciBmdWxsc2NyZWVuQnV0dG9uID0gRXh0LmdldCgnZnVsbHNjcmVlbi1idXR0b24nKTtcbiAgICAgICAgdmFyIHByZXZpZXcgPSBFeHQuZ2V0KCdwcmV2aWV3LW1kJyk7XG4gICAgICAgIHZhciBjb250ZW50ID0gRXh0LmdldCgnY29udGVudC1tZCcpO1xuICAgICAgICB2YXIgd3JhcHBlciA9IGNvbnRlbnQucGFyZW50KCk7XG5cbiAgICAgICAgdmFyIGRyb3BUYXJnZXQgPSBNT0R4LmxvYWQoe1xuICAgICAgICAgICAgeHR5cGU6ICdtb2R4LXRyZWVkcm9wJyxcbiAgICAgICAgICAgIHRhcmdldDogY29udGVudCxcbiAgICAgICAgICAgIHRhcmdldEVsOiBjb250ZW50LFxuICAgICAgICAgICAgb25JbnNlcnQ6IChmdW5jdGlvbihzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydChzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMuZWRpdG9yKSxcbiAgICAgICAgICAgIGlmcmFtZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5vbignZGVzdHJveScsIGZ1bmN0aW9uKCkge2Ryb3BUYXJnZXQuZGVzdHJveSgpO30pO1xuXG4gICAgICAgIHByZXZpZXdCdXR0b24uYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHByZXZpZXcuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3LnNldERpc3BsYXllZCgnbm9uZScpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGlzcGxheWVkKCdibG9jaycpO1xuXG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbi5jaGlsZCgnaScpLnJlbW92ZUNsYXNzKCdpY29uLXRvZ2dsZS1vbicpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdCdXR0b24uY2hpbGQoJ2knKS5hZGRDbGFzcygnaWNvbi10b2dnbGUtb2ZmJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpZXcuc2V0RGlzcGxheWVkKCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGlzcGxheWVkKCdub25lJyk7XG5cbiAgICAgICAgICAgICAgICBwcmV2aWV3QnV0dG9uLmNoaWxkKCdpJykucmVtb3ZlQ2xhc3MoJ2ljb24tdG9nZ2xlLW9mZicpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdCdXR0b24uY2hpbGQoJ2knKS5hZGRDbGFzcygnaWNvbi10b2dnbGUtb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVsbHNjcmVlbkJ1dHRvbi5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaWNvbiA9IGZ1bGxzY3JlZW5CdXR0b24uY2hpbGQoJ2knKTtcblxuICAgICAgICAgICAgaWYgKGljb24uaGFzQ2xhc3MoJ2ljb24tZXhwYW5kJykpIHtcbiAgICAgICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdpY29uLWV4cGFuZCcpO1xuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ljb24tY29tcHJlc3MnKTtcblxuICAgICAgICAgICAgICAgIHByZXZpZXcuc2V0RGlzcGxheWVkKCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGlzcGxheWVkKCdibG9jaycpO1xuXG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbi5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdmdWxsc2NyZWVuJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5zZXRPcHRpb24oJ21heExpbmVzJywgbnVsbCk7XG4gICAgICAgICAgICAgICAgLy90aGlzLmVkaXRvci5zZXRBdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXcoZmFsc2UpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ljb24tZXhwYW5kJyk7XG4gICAgICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnaWNvbi1jb21wcmVzcycpO1xuXG4gICAgICAgICAgICAgICAgcHJldmlldy5zZXREaXNwbGF5ZWQoJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnNldERpc3BsYXllZCgnYmxvY2snKTtcblxuICAgICAgICAgICAgICAgIHByZXZpZXdCdXR0b24uc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnZnVsbHNjcmVlbicpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0T3B0aW9uKCdtYXhMaW5lcycsIEluZmluaXR5KTtcbiAgICAgICAgICAgICAgICAvL3RoaXMuZWRpdG9yLnNldEF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldyh0cnVlKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVkaXRvci5yZXNpemUodHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKE1hcmtkb3duRWRpdG9yX2NvbnRlbnQuY29udGVudCk7XG4gICAgICAgIHRoaXMuZWRpdG9yLnNlbGVjdGlvbi5jbGVhclNlbGVjdGlvbigpO1xuXG4gICAgICAgIHByZXZpZXcudXBkYXRlKHRoaXMucGFyc2UodGhpcy5lZGl0b3IuZ2V0VmFsdWUoKSkpO1xuICAgICAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgcGFyc2VkID0gbWRlLnBhcnNlKG1kZS5lZGl0b3IuZ2V0VmFsdWUoKSk7XG5cbiAgICAgICAgICAgIG1kZS50ZXh0YXJlYS5kb20udmFsdWUgPSBwYXJzZWQ7XG4gICAgICAgICAgICBtZGUudGFNYXJrZG93bi5kb20udmFsdWUgPSBtZGUuZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgICAgICAgICBwcmV2aWV3LnVwZGF0ZShwYXJzZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbk1hcmtkb3duRWRpdG9yID0gbmV3IE1hcmtkb3duRWRpdG9yKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9