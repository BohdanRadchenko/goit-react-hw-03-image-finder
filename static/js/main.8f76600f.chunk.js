(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={gallery:"Gallery_gallery__4Waqj",photoCard:"Gallery_photoCard__3NAth"}},11:function(e,t,a){},2:function(e,t,a){e.exports={img:"PhotoCard_img__2WZUV",stats:"PhotoCard_stats__3rCdl",statsItem:"PhotoCard_statsItem__3glta",fullscreenButton:"PhotoCard_fullscreenButton__3Mc8h",fullscreenIcon:"PhotoCard_fullscreenIcon__3rGVD",photoCard:"PhotoCard_photoCard__1VHtU"}},23:function(e,t,a){e.exports={button:"LoadMore_button__2TfCk"}},24:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),l=a(3),s=a(4),i=a(6),u=a(5),m=a(7),h=a(22),p=a.n(h),d=a(8),f=a.n(d),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",upperSearch:"Search images..."},a.getValue=function(e){a.setState({value:e.target.value})},a.getSearchValue=function(e){var t=a.props.getSearchValue,n=a.state.value;e.preventDefault(),t(n),a.setUpperSearch(n),a.reset()},a.setUpperSearch=function(e){var t=e.toUpperCase();a.setState({upperSearch:t})},a.reset=function(){a.setState({value:""})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.upperSearch;return r.a.createElement("form",{className:f.a.searchForm,onSubmit:this.getSearchValue},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:a,value:t,onChange:this.getValue,className:f.a.searchFormInput}))}}]),t}(n.Component),g=a(2),b=a.n(g),_=a(9),y=a.n(_),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a.backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.onClose()},a.handleBackdropClick=function(e){var t=a.backdropRef.current;t&&e.target!==t||a.props.onClose()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props,t=e.children;e.url;return r.a.createElement("div",{className:y.a.backdrop,ref:this.backdropRef,onClick:this.handleBackdropClick},r.a.createElement("div",{className:y.a.modal},t))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isModalOpen:!1},a.handleToggleOpen=function(){a.setState(function(e){return{isModalOpen:!e.isModalOpen}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.webformatURL,n=e.largeImageURL,o=e.likes,c=e.views,l=e.comments,s=e.downloads,i=this.state.isModalOpen;return r.a.createElement("div",{className:b.a.photoCard},r.a.createElement("img",{className:b.a.img,src:a,alt:""}),r.a.createElement("div",{className:b.a.stats},r.a.createElement("p",{className:b.a.statsItem},r.a.createElement("i",{className:"material-icons"},"thumb_up"),o),r.a.createElement("p",{className:b.a.statsItem},r.a.createElement("i",{className:"material-icons"},"visibility"),c),r.a.createElement("p",{className:b.a.statsItem},r.a.createElement("i",{className:"material-icons"},"comment"),l),r.a.createElement("p",{className:b.a.statsItem},r.a.createElement("i",{className:"material-icons"},"cloud_download"),s)),!i&&r.a.createElement("button",{type:"button",className:b.a.fullscreenButton,onClick:this.handleToggleOpen},r.a.createElement("i",{className:"material-icons"},"zoom_out_map")),i&&r.a.createElement(k,{id:t,url:n,onClose:this.handleToggleOpen},r.a.createElement("div",{className:b.a.overlay},r.a.createElement("div",{className:b.a.modal},r.a.createElement("img",{src:n,alt:""})))))}}]),t}(n.Component),C=a(10),O=a.n(C),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.items;return r.a.createElement("ul",{className:O.a.gallery},e.map(function(e){return r.a.createElement("li",{className:O.a.photoCard,key:e.id},r.a.createElement(E,e))}))}}]),t}(n.Component),N=a(11),P=a.n(N),S=a(23),w=a.n(S),I=function(e){var t=e.handleMoreClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:w.a.button,type:"button",onClick:t},"Load more"))},V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],emptyItems:!1,searchValue:"",perPage:"12"},a.servicesAPI=function(e,t){p.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=1&per_page=").concat(t,"&key=12869322-4857e225bc17e2a940faa9df9")).then(function(e){var t=e.data;return a.setState({items:t.hits})})},a.resetPerPage=function(){a.setState({perPage:"12"})},a.getSearchValue=function(e){a.setState({searchValue:e})},a.handleMoreClick=function(){a.setState(function(e){return{perPage:String(Number(e.perPage)+12)}})},a.scrollPageToBottom=function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.state,t=e.searchValue,a=e.perPage;this.servicesAPI(t,a)}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.searchValue,r=a.perPage,o=a.items;t.searchValue!==n&&(this.resetPerPage(),this.servicesAPI(n,r)),t.perPage!==r&&"12"!==r&&this.servicesAPI(n,r),o.length>12&&this.scrollPageToBottom()}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.searchValue,n=e.emptyItems;return r.a.createElement("div",{className:P.a.app},r.a.createElement(v,{getSearchValue:this.getSearchValue,searchValue:a}),n&&r.a.createElement("div",null,r.a.createElement("p",null,"null")),r.a.createElement(j,{items:t,handleMoreClick:this.handleMoreClick}),t.length>0&&r.a.createElement(I,{className:P.a.loadMore,handleMoreClick:this.handleMoreClick}))}}]),t}(n.Component);c.a.render(r.a.createElement(V,null),document.getElementById("root"))},8:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__2kdq5",searchFormInput:"SearchForm_searchFormInput__2h-57"}},9:function(e,t,a){e.exports={backdrop:"Modal_backdrop__ioHhT",modal:"Modal_modal__OdOKc"}}},[[24,1,2]]]);
//# sourceMappingURL=main.8f76600f.chunk.js.map