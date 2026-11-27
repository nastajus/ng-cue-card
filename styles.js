(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.flex li {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n.flex > li > label {\n  flex: 1 0 50px;\n  max-width: 100px; }\n/* We tell all items to be 200px width, via flex-basis */\n.flex > li > label + * {\n  flex: 3 1 100px; }\n.flex li button {\n  margin: auto;\n  padding: 22px 46px; }\nbody {\n  background-color: #25171A;\n  color: white;\n  width: 768px;\n  margin: auto;\n  overflow-x: hidden; }\na {\n  color: #98C1D9; }\nul {\n  list-style-type: none;\n  margin-left: 0px;\n  /* set to 0 because am not using a list-style-type */\n  padding-left: 20px;\n  padding-right: 20px; }\nli {\n  margin-bottom: 30px; }\n.flex li {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n.flex > li > label {\n  flex: 1 0 50px;\n  max-width: 100px; }\n/* We tell all items to be 200px width, via flex-basis */\n.flex > li > label + * {\n  flex: 3 1 100px; }\n.flex li button {\n  margin: auto;\n  padding: 22px 46px; }\n.cc-select {\n  color: #fff;\n  background: #a30000;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  font-size: 1.1em; }\n.cc-option {\n  color: #fff;\n  background: #c30d16;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  font-size: 1.1em; }\ninput {\n  background-color: #656361;\n  color: white;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  font-size: 1.1em; }\n.tp-wrapper {\n  -webkit-perspective: 800px;\n          perspective: 800px;\n  display: flex;\n  justify-content: center; }\n.tp-card, .tp-card--in-box {\n  position: relative;\n  width: calc( 400px + 20px + 20px);\n  height: calc( 200px + 20px + 20px);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: -webkit-transform 500ms ease-in;\n  transition: transform 500ms ease-in;\n  transition: transform 500ms ease-in, -webkit-transform 500ms ease-in; }\n.tp-card.is-flipped, .is-flipped.tp-card--in-box {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n.tp-card--in-box {\n    width: 200px;\n    height: 100px; }\n.tp-card__side, .tp-card__side--in-box {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  color: #fff;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  border-radius: 20px;\n  border: 2px solid white; }\n.tp-card__side--in-box {\n    font-size: 12px;\n    font-weight: 350;\n    border-radius: 14px;\n    cursor: default; }\n.tp-card__front {\n  background: #f30d36; }\n.tp-card__back {\n  background: #23262d;\n  -webkit-transform: rotateY(180deg) translateZ(1px);\n          transform: rotateY(180deg) translateZ(1px); }\n.title {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGlhbm5hXFxEb2N1bWVudHNcXElBTlxcQ29kZVxcbmFzdGFqdXNcXHJlcG9zXFxuZy1jdWUtY2FyZC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcaWFubmFcXERvY3VtZW50c1xcSUFOXFxDb2RlXFxuYXN0YWp1c1xccmVwb3NcXG5nLWN1ZS1jYXJkL3NyY1xcc3R5bGVzXFxiYXNlLnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxpYW5uYVxcRG9jdW1lbnRzXFxJQU5cXENvZGVcXG5hc3RhanVzXFxyZXBvc1xcbmctY3VlLWNhcmQvc3JjXFxzdHlsZXNcXGJhc2ljLnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxpYW5uYVxcRG9jdW1lbnRzXFxJQU5cXENvZGVcXG5hc3RhanVzXFxyZXBvc1xcbmctY3VlLWNhcmQvc3JjXFxzdHlsZXNcXGN1ZS1jYXJkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNpRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBRWxCLHdEQUFBO0FBQ0E7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUM5RXBCO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZRGdDZTtFQy9CZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQU0sb0RBQUE7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksbUJBQW1CLEVBQUE7QUR5Q3ZCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQUVsQix3REFBQTtBQUNBO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FFL0VwQjtFQUNJLFdGRHFCO0VFRXJCLG1CRkM4QjtFRUE5QixzR0ZDd0c7RUVBeEcsZ0JGQ2tCLEVBQUE7QUVFdEI7RUFDSSxXRlJxQjtFRVNyQixtQkZQK0I7RUVRL0Isc0dGTndHO0VFT3hHLGdCRk5rQixFQUFBO0FFU3RCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFHWixzR0ZmMEc7RUVnQjFHLGdCRmZvQixFQUFBO0FFcUJ0QjtFQUNFLDBCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDRnJCZ0c7RUVzQmhHLGtDRnJCa0c7RUVzQmxHLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO0VBQW5DLG1DQUFtQztFQUFuQyxvRUFBbUMsRUFBQTtBQUxyQztJQVFJLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtBQUc1QjtJQUVFLFlGdEJ3QjtJRXVCeEIsYUZ0QnlCLEVBQUE7QUUwQjdCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFFWixrQkFBa0I7RUFDbEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixXRnhEdUI7RUV5RHZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTtBQUV2QjtJQUVFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtBQUluQjtFQUNFLG1CRjlFK0IsRUFBQTtBRWdGakM7RUFDRSxtQkFBbUI7RUFDbkIsa0RBQTBDO1VBQTFDLDBDQUEwQyxFQUFBO0FBRTVDO0VBQ0UsbURBQW1ELEVBQUEiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0ICcuL3N0eWxlcy9iYXNpYy5zY3NzJztcclxuQGltcG9ydCAnLi9zdHlsZXMvY3VlLWNhcmQuc2Nzcyc7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyB2YXJpYWJsZXMgcmVsYXRlZCB0byBjdWUgY2FyZFxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiRwcmltYXJ5LWZvbnQtY29sb3I6ICNmZmY7XHJcbiRwcmltYXJ5LWNhcmQtYmFja2dyb3VuZDogI2YzMGQzNjtcclxuJHNlY29uZGFyeS1jYXJkLWJhY2tncm91bmQ6ICNjMzBkMTY7XHJcbiR0ZXJ0aWFyeS1jYXJkLWJhY2tncm91bmQ6ICNhMzAwMDA7XHJcbiRsaXN0LWZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIFNhbnNcIiwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4kbGlzdC1mb250LXNpemU6IDEuMWVtO1xyXG4vL2ZvbnQtc2l6ZTogMTRweDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDcwMDsgbGluZS1oZWlnaHQ6IDE1LjRweDtcIlxyXG5cclxuXHJcbiRjYXJkLXdpZHRoLXB4OiA0MDBweDtcclxuJGNhcmQtaGVpZ2h0LXB4OiAyMDBweDtcclxuJGNhcmQtcGFkZGluZy1weDogMjBweDtcclxuXHJcbiRjYXJkLXdpZHRoLXdpdGgtcGFkZGluZy1weDogY2FsYyggI3skY2FyZC13aWR0aC1weH0gKyAjeyRjYXJkLXBhZGRpbmctcHh9ICsgI3skY2FyZC1wYWRkaW5nLXB4fSApO1xyXG4kY2FyZC1oZWlnaHQtd2l0aC1wYWRkaW5nLXB4OiBjYWxjKCAjeyRjYXJkLWhlaWdodC1weH0gKyAjeyRjYXJkLXBhZGRpbmctcHh9ICsgI3skY2FyZC1wYWRkaW5nLXB4fSApO1xyXG5cclxuJGNhcmQtc2xpZGUtZGlzdGFuY2UtcHg6IGNhbGMoICN7JGNhcmQtd2lkdGgtd2l0aC1wYWRkaW5nLXB4fSArIDEwMHB4KTtcclxuXHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIHZhcmlhYmxlcyByZWxhdGVkIHRvIGNhcmQgaW4gYm94XHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiRjYXJkLWluLWJveC13aWR0aC1weDogMjAwcHg7XHJcbiRjYXJkLWluLWJveC1oZWlnaHQtcHg6IDEwMHB4O1xyXG5cclxuXHJcbiRtYWdpYy1udW1iZXItbGVmdC1vZmZzZXQtcHg6IDUzcHg7XHJcbi8vdXNpbmcgYGxlZnQ6ICRtYWdpYy1udW1iZXItbGVmdC1vZmZzZXQtcHhgIGFwcGVhcnMgdG8gcHV0IGV4YWN0bHkgbGluZWQgdXAgYXQgaW5zaWRlIGVkZ2UgLi4uIEkgKmNhbid0KiBleHBsYWluIHdoeSB5ZXQhXHJcbi8vY2FyZC1sZWZ0OiA1M3B4IGFwcGVhcnMgY29ycmVjdGx5LWxlZnQtYWxpZ25lZCBmb3IgYm94LXdpZHRoOiAyMDBweC8yMDRweCAmJiBjYXJkLWJvcmRlcjogMnB4LCBwcm92ZW4gYnkgcmVkdWNpbmcgMSBwaXhlbCwgcmVidWlsZGluZywgYW5kIHNlZWluZyBpbnRlcnNlY3Rpb24uXHJcbi8vdGhpcyBpcyBhcHBsaWVkIGV4Y2x1c2l2ZWx5IGF0IHJ1bnRpbWUgdmlhIGphdmFzY3JpcHQuXHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIHZhcmlhYmxlcyByZWxhdGVkIHRvIHNob2UgYm94XHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiRzY2VuZS13aWR0aDogNzY4cHg7XHJcbiRzY2VuZS1oZWlnaHQ6IDUxMnB4O1xyXG5cclxuLy9ESU1FTlNJT04gUkVRVUlSRU1FTlRTOiBDVUUgQ0FSRFMgSU4gMjoxIFJBVElPIChIRU5DRT09IEJPWCBXSURUSCAyIDogQk9YIEhFSUdIVCAxKVxyXG4vL0JPWCBBTlkgTEVOR1RILCBJREVBTExZIFwiU0hPRSBCT1hcIiBMRU5HVEguXHJcbi8vUkVGRVJFTkNFOiBBQ1RVQUwgU0hPRSBCT1ggMTRcIiB4IDhcIiB4IDVcIiAtLSBBTE1PU1QgU0FNRS5cclxuXHJcbi8vaW4gdGhpcyBjYXNlLCAgdGhpbmsgb2YgZXZlcnkgZGl2IGJlaW5nIGNlbnRlcmVkIG9uIHRoZSBcIm1pbmltdW0gZGltZW5zaW9uXCIsIHNvIGNlbnRlcmVkIGF0IDUwcHggYWZ0ZXIgcm90YXRpb25zLCBzaW5jZSBtaW5pbXVtIGRpbWVuc2lvbiBpcyBoZWlnaHQ6IDEwMC4gKGJlY2F1c2Ugd2lsbCBkbyBhIHRyYW5zbGF0ZVkoMTAwKSBvbiBhbGwgZGl2cyBhcyBiYXNlIHByZW1pc2UuKVxyXG5cclxuJGJveC1sZW5ndGg6IDMwMDtcclxuJGJveC13aWR0aDogMjQ0O1xyXG4kYm94LWhlaWdodDogMTAwO1xyXG5cclxuJGJveC1sZW5ndGgtcHg6ICN7JGJveC1sZW5ndGh9cHg7XHJcbiRib3gtd2lkdGgtcHg6ICN7JGJveC13aWR0aH1weDtcclxuJGJveC1oZWlnaHQtcHg6ICN7JGJveC1oZWlnaHR9cHg7XHJcblxyXG4kYm94LWxlbmd0aC1oYWx2ZWQtcHg6IGNhbGMoKCN7JGJveC1sZW5ndGh9IC8gMikgKiAxcHgpO1xyXG4kYm94LXdpZHRoLWhhbHZlZC1weDogY2FsYygoI3skYm94LXdpZHRofSAvIDIpICogMXB4KTtcclxuJGJveC1kaXN0YW5jZS1mcm9tLXBpdm90LXB4OiBjYWxjKCgjeyRib3gtaGVpZ2h0fSAvIDIpICogMXB4KTtcclxuXHJcbi8vdXNlIHRoZXNlIG5leHQgKjIqIHZhcmlhYmxlcyAoZnJvbnQsIGJhY2spIGluIGphdmFzY3JpcHQgdG8gZGV0ZXJtaW5lIGNhcmQgcG9zaXRpb25cclxuJGJveC1mcm9udC10cmFuc2xhdGUtcHg6ICN7JGJveC1kaXN0YW5jZS1mcm9tLXBpdm90LXB4fTtcclxuJGJveC1iYWNrLXRyYW5zbGF0ZS1weDogY2FsYygjeyRib3gtbGVuZ3RoLXB4fSAtICN7JGJveC1kaXN0YW5jZS1mcm9tLXBpdm90LXB4fSk7XHJcbiRib3gtcmlnaHQtdHJhbnNsYXRlLXB4OiBjYWxjKCN7JGJveC13aWR0aC1weH0gLSAjeyRib3gtZGlzdGFuY2UtZnJvbS1waXZvdC1weH0pO1xyXG5cclxuLmZsZXggbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4ID4gbGkgPiBsYWJlbCB7XHJcbiAgZmxleDogMSAwIDUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG4vKiBXZSB0ZWxsIGFsbCBpdGVtcyB0byBiZSAyMDBweCB3aWR0aCwgdmlhIGZsZXgtYmFzaXMgKi9cclxuLmZsZXggPiBsaSA+IGxhYmVsICsgKiB7XHJcbiAgZmxleDogMyAxIDEwMHB4O1xyXG59XHJcblxyXG4uZmxleCBsaSBidXR0b24ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAyMnB4IDQ2cHg7XHJcbn1cclxuIiwiQGltcG9ydCAnc3JjL3N0eWxlcy9iYXNlLnNjc3MnO1xyXG5cclxuLy8gdHJ5IHRvIGtlZXAgYmFzaWMgZWxlbWVudHMgc2VwYXJhdGVkLi4uIGkgYW0gdW5jZXJ0YWluIGkgd2lsbCBrZWVwIHRoaXMgZGVzaWduLi4uXHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTE3MUE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogJHNjZW5lLXdpZHRoO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5hIHsgXHJcbiAgICBjb2xvcjogIzk4QzFEOTtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgICAgIC8qIHNldCB0byAwIGJlY2F1c2UgYW0gbm90IHVzaW5nIGEgbGlzdC1zdHlsZS10eXBlICovXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59IiwiQGltcG9ydCAnc3JjL3N0eWxlcy9iYXNlLnNjc3MnO1xyXG5cclxuLy8gbWlzY1xyXG4uY2Mtc2VsZWN0IHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1mb250LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJHRlcnRpYXJ5LWNhcmQtYmFja2dyb3VuZDtcclxuICAgIGZvbnQtZmFtaWx5OiAkbGlzdC1mb250LWZhbWlseTtcclxuICAgIGZvbnQtc2l6ZTogJGxpc3QtZm9udC1zaXplO1xyXG59XHJcblxyXG4uY2Mtb3B0aW9uIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1mb250LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jYXJkLWJhY2tncm91bmQ7XHJcbiAgICBmb250LWZhbWlseTogJGxpc3QtZm9udC1mYW1pbHk7XHJcbiAgICBmb250LXNpemU6ICRsaXN0LWZvbnQtc2l6ZTtcclxufVxyXG5cclxuaW5wdXQgeyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU2MzYxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvL3dpZHRoOiA0MDBweDtcclxuICAvLyB3aWR0aDogNjBlbTtcclxuICBmb250LWZhbWlseTogJGxpc3QtZm9udC1mYW1pbHk7XHJcbiAgZm9udC1zaXplOiAkbGlzdC1mb250LXNpemU7XHJcbn1cclxuXHJcblxyXG4vLyBmcm9udCAvIGJhY2sgYm94IGNvbG9yc1xyXG5cclxuLnRwLXdyYXBwZXIge1xyXG4gIHBlcnNwZWN0aXZlOiA4MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udHAtY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAkY2FyZC13aWR0aC13aXRoLXBhZGRpbmctcHg7XHJcbiAgaGVpZ2h0OiAkY2FyZC1oZWlnaHQtd2l0aC1wYWRkaW5nLXB4O1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2UtaW47XHJcblxyXG4gICYuaXMtZmxpcHBlZCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9XHJcblxyXG4gICYtLWluLWJveCB7XHJcbiAgICBAZXh0ZW5kIC50cC1jYXJkO1xyXG4gICAgd2lkdGg6ICRjYXJkLWluLWJveC13aWR0aC1weDtcclxuICAgIGhlaWdodDogJGNhcmQtaW4tYm94LWhlaWdodC1weDtcclxuICB9XHJcbn1cclxuXHJcbi50cC1jYXJkX19zaWRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy9wYWRkaW5nOiAkY2FyZC1wYWRkaW5nLXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgY29sb3I6ICRwcmltYXJ5LWZvbnQtY29sb3I7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcblxyXG4gICYtLWluLWJveCB7XHJcbiAgICBAZXh0ZW5kIC50cC1jYXJkX19zaWRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAvL3RyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbi50cC1jYXJkX19mcm9udCB7XHJcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY2FyZC1iYWNrZ3JvdW5kO1xyXG59XHJcbi50cC1jYXJkX19iYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjMjMyNjJkO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMXB4KTtcclxufVxyXG4udGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XHJcbn1cclxuIl19 */", '', '']]

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