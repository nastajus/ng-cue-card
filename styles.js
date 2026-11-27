(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.flex li {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n.flex > li > label {\n  flex: 1 0 50px;\n  max-width: 100px; }\n/* We tell all items to be 200px width, via flex-basis */\n.flex > li > label + * {\n  flex: 3 1 100px; }\n.flex li button {\n  margin: auto;\n  padding: 22px 46px; }\nbody {\n  background-color: #25171A;\n  color: white;\n  width: 768px;\n  margin: auto;\n  overflow-x: hidden; }\na {\n  color: #98C1D9; }\nul {\n  list-style-type: none;\n  margin-left: 0px;\n  /* set to 0 because am not using a list-style-type */\n  padding-left: 20px;\n  padding-right: 20px; }\nli {\n  margin-bottom: 30px; }\n.flex li {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n.flex > li > label {\n  flex: 1 0 50px;\n  max-width: 100px; }\n/* We tell all items to be 200px width, via flex-basis */\n.flex > li > label + * {\n  flex: 3 1 100px; }\n.flex li button {\n  margin: auto;\n  padding: 22px 46px; }\n.cc-select {\n  color: #fff;\n  background: #a30000;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  font-size: 1.1em; }\n.cc-option {\n  color: #fff;\n  background: #c30d16;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  font-size: 1.1em; }\ninput {\n  background-color: #656361;\n  color: white;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  font-size: 1.1em; }\n.tp-wrapper {\n  -webkit-perspective: 800px;\n          perspective: 800px;\n  display: flex;\n  justify-content: center; }\n.tp-card, .tp-card--in-box {\n  position: relative;\n  width: calc( 400px + 20px + 20px);\n  height: calc( 200px + 20px + 20px);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: -webkit-transform 500ms ease-in;\n  transition: transform 500ms ease-in;\n  transition: transform 500ms ease-in, -webkit-transform 500ms ease-in; }\n.tp-card.is-flipped, .is-flipped.tp-card--in-box {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n.tp-card--in-box {\n    width: 200px;\n    height: 100px; }\n.tp-card__side, .tp-card__side--in-box {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  color: #fff;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  border-radius: 20px;\n  border: 2px solid white; }\n.tp-card__side--in-box {\n    font-size: 12px;\n    font-weight: 350;\n    border-radius: 14px;\n    cursor: default; }\n.tp-card__front {\n  background: #f30d36;\n  -webkit-transform: translateZ(1px);\n          transform: translateZ(1px); }\n.tp-card__back {\n  background: #23262d;\n  -webkit-transform: rotateY(180deg) translateZ(1px);\n          transform: rotateY(180deg) translateZ(1px); }\n.title {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGlhbm5hXFxEb2N1bWVudHNcXElBTlxcQ29kZVxcbmFzdGFqdXNcXHJlcG9zXFxuZy1jdWUtY2FyZC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcaWFubmFcXERvY3VtZW50c1xcSUFOXFxDb2RlXFxuYXN0YWp1c1xccmVwb3NcXG5nLWN1ZS1jYXJkL3NyY1xcc3R5bGVzXFxiYXNlLnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxpYW5uYVxcRG9jdW1lbnRzXFxJQU5cXENvZGVcXG5hc3RhanVzXFxyZXBvc1xcbmctY3VlLWNhcmQvc3JjXFxzdHlsZXNcXGJhc2ljLnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxpYW5uYVxcRG9jdW1lbnRzXFxJQU5cXENvZGVcXG5hc3RhanVzXFxyZXBvc1xcbmctY3VlLWNhcmQvc3JjXFxzdHlsZXNcXGN1ZS1jYXJkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNpRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBRWxCLHdEQUFBO0FBQ0E7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUM5RXBCO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZRGdDZTtFQy9CZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQU0sb0RBQUE7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksbUJBQW1CLEVBQUE7QUR5Q3ZCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQUVsQix3REFBQTtBQUNBO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FFL0VwQjtFQUNJLFdGRHFCO0VFRXJCLG1CRkM4QjtFRUE5QixzR0ZDd0c7RUVBeEcsZ0JGQ2tCLEVBQUE7QUVFdEI7RUFDSSxXRlJxQjtFRVNyQixtQkZQK0I7RUVRL0Isc0dGTndHO0VFT3hHLGdCRk5rQixFQUFBO0FFU3RCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFHWixzR0ZmMEc7RUVnQjFHLGdCRmZvQixFQUFBO0FFcUJ0QjtFQUNFLDBCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDRnJCZ0c7RUVzQmhHLGtDRnJCa0c7RUVzQmxHLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO0VBQW5DLG1DQUFtQztFQUFuQyxvRUFBbUMsRUFBQTtBQUxyQztJQVFJLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtBQUc1QjtJQUVFLFlGdEJ3QjtJRXVCeEIsYUZ0QnlCLEVBQUE7QUUwQjdCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFFWixrQkFBa0I7RUFDbEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixXRnhEdUI7RUV5RHZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTtBQUV2QjtJQUVFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtBQUluQjtFQUNFLG1CRjlFK0I7RUUrRS9CLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTtBQUU1QjtFQUNFLG1CQUFtQjtFQUNuQixrREFBMEM7VUFBMUMsMENBQTBDLEVBQUE7QUFFNUM7RUFDRSxtREFBbUQsRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbkBpbXBvcnQgJy4vc3R5bGVzL2Jhc2ljLnNjc3MnO1xyXG5AaW1wb3J0ICcuL3N0eWxlcy9jdWUtY2FyZC5zY3NzJzsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIHZhcmlhYmxlcyByZWxhdGVkIHRvIGN1ZSBjYXJkXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuJHByaW1hcnktZm9udC1jb2xvcjogI2ZmZjtcclxuJHByaW1hcnktY2FyZC1iYWNrZ3JvdW5kOiAjZjMwZDM2O1xyXG4kc2Vjb25kYXJ5LWNhcmQtYmFja2dyb3VuZDogI2MzMGQxNjtcclxuJHRlcnRpYXJ5LWNhcmQtYmFja2dyb3VuZDogI2EzMDAwMDtcclxuJGxpc3QtZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgU2Fuc1wiLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiRsaXN0LWZvbnQtc2l6ZTogMS4xZW07XHJcbi8vZm9udC1zaXplOiAxNHB4OyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogNzAwOyBsaW5lLWhlaWdodDogMTUuNHB4O1wiXHJcblxyXG5cclxuJGNhcmQtd2lkdGgtcHg6IDQwMHB4O1xyXG4kY2FyZC1oZWlnaHQtcHg6IDIwMHB4O1xyXG4kY2FyZC1wYWRkaW5nLXB4OiAyMHB4O1xyXG5cclxuJGNhcmQtd2lkdGgtd2l0aC1wYWRkaW5nLXB4OiBjYWxjKCAjeyRjYXJkLXdpZHRoLXB4fSArICN7JGNhcmQtcGFkZGluZy1weH0gKyAjeyRjYXJkLXBhZGRpbmctcHh9ICk7XHJcbiRjYXJkLWhlaWdodC13aXRoLXBhZGRpbmctcHg6IGNhbGMoICN7JGNhcmQtaGVpZ2h0LXB4fSArICN7JGNhcmQtcGFkZGluZy1weH0gKyAjeyRjYXJkLXBhZGRpbmctcHh9ICk7XHJcblxyXG4kY2FyZC1zbGlkZS1kaXN0YW5jZS1weDogY2FsYyggI3skY2FyZC13aWR0aC13aXRoLXBhZGRpbmctcHh9ICsgMTAwcHgpO1xyXG5cclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gdmFyaWFibGVzIHJlbGF0ZWQgdG8gY2FyZCBpbiBib3hcclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuJGNhcmQtaW4tYm94LXdpZHRoLXB4OiAyMDBweDtcclxuJGNhcmQtaW4tYm94LWhlaWdodC1weDogMTAwcHg7XHJcblxyXG5cclxuJG1hZ2ljLW51bWJlci1sZWZ0LW9mZnNldC1weDogNTNweDtcclxuLy91c2luZyBgbGVmdDogJG1hZ2ljLW51bWJlci1sZWZ0LW9mZnNldC1weGAgYXBwZWFycyB0byBwdXQgZXhhY3RseSBsaW5lZCB1cCBhdCBpbnNpZGUgZWRnZSAuLi4gSSAqY2FuJ3QqIGV4cGxhaW4gd2h5IHlldCFcclxuLy9jYXJkLWxlZnQ6IDUzcHggYXBwZWFycyBjb3JyZWN0bHktbGVmdC1hbGlnbmVkIGZvciBib3gtd2lkdGg6IDIwMHB4LzIwNHB4ICYmIGNhcmQtYm9yZGVyOiAycHgsIHByb3ZlbiBieSByZWR1Y2luZyAxIHBpeGVsLCByZWJ1aWxkaW5nLCBhbmQgc2VlaW5nIGludGVyc2VjdGlvbi5cclxuLy90aGlzIGlzIGFwcGxpZWQgZXhjbHVzaXZlbHkgYXQgcnVudGltZSB2aWEgamF2YXNjcmlwdC5cclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gdmFyaWFibGVzIHJlbGF0ZWQgdG8gc2hvZSBib3hcclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuJHNjZW5lLXdpZHRoOiA3NjhweDtcclxuJHNjZW5lLWhlaWdodDogNTEycHg7XHJcblxyXG4vL0RJTUVOU0lPTiBSRVFVSVJFTUVOVFM6IENVRSBDQVJEUyBJTiAyOjEgUkFUSU8gKEhFTkNFPT0gQk9YIFdJRFRIIDIgOiBCT1ggSEVJR0hUIDEpXHJcbi8vQk9YIEFOWSBMRU5HVEgsIElERUFMTFkgXCJTSE9FIEJPWFwiIExFTkdUSC5cclxuLy9SRUZFUkVOQ0U6IEFDVFVBTCBTSE9FIEJPWCAxNFwiIHggOFwiIHggNVwiIC0tIEFMTU9TVCBTQU1FLlxyXG5cclxuLy9pbiB0aGlzIGNhc2UsICB0aGluayBvZiBldmVyeSBkaXYgYmVpbmcgY2VudGVyZWQgb24gdGhlIFwibWluaW11bSBkaW1lbnNpb25cIiwgc28gY2VudGVyZWQgYXQgNTBweCBhZnRlciByb3RhdGlvbnMsIHNpbmNlIG1pbmltdW0gZGltZW5zaW9uIGlzIGhlaWdodDogMTAwLiAoYmVjYXVzZSB3aWxsIGRvIGEgdHJhbnNsYXRlWSgxMDApIG9uIGFsbCBkaXZzIGFzIGJhc2UgcHJlbWlzZS4pXHJcblxyXG4kYm94LWxlbmd0aDogMzAwO1xyXG4kYm94LXdpZHRoOiAyNDQ7XHJcbiRib3gtaGVpZ2h0OiAxMDA7XHJcblxyXG4kYm94LWxlbmd0aC1weDogI3skYm94LWxlbmd0aH1weDtcclxuJGJveC13aWR0aC1weDogI3skYm94LXdpZHRofXB4O1xyXG4kYm94LWhlaWdodC1weDogI3skYm94LWhlaWdodH1weDtcclxuXHJcbiRib3gtbGVuZ3RoLWhhbHZlZC1weDogY2FsYygoI3skYm94LWxlbmd0aH0gLyAyKSAqIDFweCk7XHJcbiRib3gtd2lkdGgtaGFsdmVkLXB4OiBjYWxjKCgjeyRib3gtd2lkdGh9IC8gMikgKiAxcHgpO1xyXG4kYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHg6IGNhbGMoKCN7JGJveC1oZWlnaHR9IC8gMikgKiAxcHgpO1xyXG5cclxuLy91c2UgdGhlc2UgbmV4dCAqMiogdmFyaWFibGVzIChmcm9udCwgYmFjaykgaW4gamF2YXNjcmlwdCB0byBkZXRlcm1pbmUgY2FyZCBwb3NpdGlvblxyXG4kYm94LWZyb250LXRyYW5zbGF0ZS1weDogI3skYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHh9O1xyXG4kYm94LWJhY2stdHJhbnNsYXRlLXB4OiBjYWxjKCN7JGJveC1sZW5ndGgtcHh9IC0gI3skYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHh9KTtcclxuJGJveC1yaWdodC10cmFuc2xhdGUtcHg6IGNhbGMoI3skYm94LXdpZHRoLXB4fSAtICN7JGJveC1kaXN0YW5jZS1mcm9tLXBpdm90LXB4fSk7XHJcblxyXG4uZmxleCBsaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXggPiBsaSA+IGxhYmVsIHtcclxuICBmbGV4OiAxIDAgNTBweDtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcbi8qIFdlIHRlbGwgYWxsIGl0ZW1zIHRvIGJlIDIwMHB4IHdpZHRoLCB2aWEgZmxleC1iYXNpcyAqL1xyXG4uZmxleCA+IGxpID4gbGFiZWwgKyAqIHtcclxuICBmbGV4OiAzIDEgMTAwcHg7XHJcbn1cclxuXHJcbi5mbGV4IGxpIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIycHggNDZweDtcclxufVxyXG4iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL2Jhc2Uuc2Nzcyc7XHJcblxyXG4vLyB0cnkgdG8ga2VlcCBiYXNpYyBlbGVtZW50cyBzZXBhcmF0ZWQuLi4gaSBhbSB1bmNlcnRhaW4gaSB3aWxsIGtlZXAgdGhpcyBkZXNpZ24uLi5cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MTcxQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAkc2NlbmUtd2lkdGg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmEgeyBcclxuICAgIGNvbG9yOiAjOThDMUQ5O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4OyAgICAgLyogc2V0IHRvIDAgYmVjYXVzZSBhbSBub3QgdXNpbmcgYSBsaXN0LXN0eWxlLXR5cGUgKi9cclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL2Jhc2Uuc2Nzcyc7XHJcblxyXG4vLyBtaXNjXHJcbi5jYy1zZWxlY3Qge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWZvbnQtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGVydGlhcnktY2FyZC1iYWNrZ3JvdW5kO1xyXG4gICAgZm9udC1mYW1pbHk6ICRsaXN0LWZvbnQtZmFtaWx5O1xyXG4gICAgZm9udC1zaXplOiAkbGlzdC1mb250LXNpemU7XHJcbn1cclxuXHJcbi5jYy1vcHRpb24ge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWZvbnQtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNhcmQtYmFja2dyb3VuZDtcclxuICAgIGZvbnQtZmFtaWx5OiAkbGlzdC1mb250LWZhbWlseTtcclxuICAgIGZvbnQtc2l6ZTogJGxpc3QtZm9udC1zaXplO1xyXG59XHJcblxyXG5pbnB1dCB7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NTYzNjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8vd2lkdGg6IDQwMHB4O1xyXG4gIC8vIHdpZHRoOiA2MGVtO1xyXG4gIGZvbnQtZmFtaWx5OiAkbGlzdC1mb250LWZhbWlseTtcclxuICBmb250LXNpemU6ICRsaXN0LWZvbnQtc2l6ZTtcclxufVxyXG5cclxuXHJcbi8vIGZyb250IC8gYmFjayBib3ggY29sb3JzXHJcblxyXG4udHAtd3JhcHBlciB7XHJcbiAgcGVyc3BlY3RpdmU6IDgwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cC1jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6ICRjYXJkLXdpZHRoLXdpdGgtcGFkZGluZy1weDtcclxuICBoZWlnaHQ6ICRjYXJkLWhlaWdodC13aXRoLXBhZGRpbmctcHg7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1pbjtcclxuXHJcbiAgJi5pcy1mbGlwcGVkIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIH1cclxuXHJcbiAgJi0taW4tYm94IHtcclxuICAgIEBleHRlbmQgLnRwLWNhcmQ7XHJcbiAgICB3aWR0aDogJGNhcmQtaW4tYm94LXdpZHRoLXB4O1xyXG4gICAgaGVpZ2h0OiAkY2FyZC1pbi1ib3gtaGVpZ2h0LXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRwLWNhcmRfX3NpZGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvL3BhZGRpbmc6ICRjYXJkLXBhZGRpbmctcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgJi0taW4tYm94IHtcclxuICAgIEBleHRlbmQgLnRwLWNhcmRfX3NpZGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIC8vdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcclxuICB9XHJcbn1cclxuLnRwLWNhcmRfX2Zyb250IHtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jYXJkLWJhY2tncm91bmQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDFweCk7XHJcbn1cclxuLnRwLWNhcmRfX2JhY2sge1xyXG4gIGJhY2tncm91bmQ6ICMyMzI2MmQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigxcHgpO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBcIkNvbWljIFNhbnNcIiwgY3Vyc2l2ZTtcclxufVxyXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ianna\Documents\IAN\Code\nastajus\repos\ng-cue-card\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map