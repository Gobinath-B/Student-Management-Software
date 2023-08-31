const express = require('express')
const app = express()

app.get("/about-courses", (req, res) => {
  res.render("about-courses");
});
app.get("/about-student", (req, res) => {
  res.render("about-student");
});
app.get("/add-courses", (req, res) => {
  res.render("add-courses");
});
app.get("/add-departments", (req, res) => {
  res.render("add-departments");
});
app.get("/add-fees", (req, res) => {
  res.render("add-fees");
});
app.get("/add-holiday", (req, res) => {
  res.render("add-holiday");
});
app.get("/add-library", (req, res) => {
  res.render("add-library");
});
app.get("/add-professor", (req, res) => {
  res.render("add-professor");
});
app.get("/add-staff", (req, res) => {
  res.render("add-staff");
});
app.get("/add-student", (req, res) => {
  res.render("add-student");
});
app.get("/all-courses", (req, res) => {
  res.render("all-courses");
});
app.get("/all-departments", (req, res) => {
  res.render("all-departments");
});
app.get("/all-holiday", (req, res) => {
  res.render("all-holiday");
});
app.get("/all-library", (req, res) => {
  res.render("all-library");
});
app.get("/all-professors", (req, res) => {
  res.render("all-professors");
});
app.get("/all-staff", (req, res) => {
  res.render("all-staff");
});
app.get("/all-students", (req, res) => {
  res.render("all-students");
});
app.get("/app-calender", (req, res) => {
  res.render("app-calender");
});
app.get("/app-profile", (req, res) => {
  res.render("app-profile");
});
app.get("/chart-chartist", (req, res) => {
  res.render("chart-chartist");
});
app.get("/chart-chartjs", (req, res) => {
  res.render("chart-chartjs");
});
app.get("/chart-flot", (req, res) => {
  res.render("chart-flot");
});
app.get("/chart-morris", (req, res) => {
  res.render("chart-morris");
});
app.get("/chart-peity", (req, res) => {
  res.render("chart-peity");
});
app.get("/chart-sparkline", (req, res) => {
  res.render("chart-sparkline");
});
app.get("/ecom-checkout", (req, res) => {
  res.render("ecom-checkout");
});
app.get("/ecom-customers", (req, res) => {
  res.render("ecom-customers");
});
app.get("/ecom-invoice", (req, res) => {
  res.render("ecom-invoice");
});
app.get("/ecom-product-detail", (req, res) => {
  res.render("ecom-product-detail");
});
app.get("/ecom-product-grid", (req, res) => {
  res.render("ecom-product-grid");
});
app.get("/ecom-product-list", (req, res) => {
  res.render("ecom-product-list");
});
app.get("/ecom-product-order", (req, res) => {
  res.render("ecom-product-order");
});
app.get("/edit-courses", (req, res) => {
  res.render("edit-courses");
});
app.get("/edit-departments", (req, res) => {
  res.render("edit-departments");
});
app.get("/edit-holiday", (req, res) => {
  res.render("edit-holiday");
});
app.get("/edit-library", (req, res) => {
  res.render("edit-library");
});
app.get("/edit-professor", (req, res) => {
  res.render("edit-professor");
});
app.get("/edit-staff", (req, res) => {
  res.render("edit-staff");
});
app.get("/edit-student", (req, res) => {
  res.render("edit-student");
});
app.get("/email-compose", (req, res) => {
  res.render("email-compose");
});
app.get("/email-inbox", (req, res) => {
  res.render("email-inbox");
});
app.get("/email-read", (req, res) => {
  res.render("email-read");
});
app.get("/event-management", (req, res) => {
  res.render("event-management");
});
app.get("/fees-collection", (req, res) => {
  res.render("fees-collection");
});
app.get("/fees-receipt", (req, res) => {
  res.render("fees-receipt");
});
app.get("/form-editor-summernote", (req, res) => {
  res.render("form-editor-summernote");
});
app.get("/form-element", (req, res) => {
  res.render("form-element");
});
app.get("/form-pickers", (req, res) => {
  res.render("form-pickers");
});
app.get("/form-validation-jquery", (req, res) => {
  res.render("form-validation-jquery");
});
app.get("/form-wizard", (req, res) => {
  res.render("form-wizard");
});
app.get("/holiday-calendar", (req, res) => {
  res.render("holiday-calendar");
});
app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/map-jqvmap", (req, res) => {
  res.render("map-jqvmap");
});
app.get("/page-error-400", (req, res) => {
  res.render("page-error-400");
});
app.get("/page-error-403", (req, res) => {
  res.render("page-error-403");
});
app.get("/page-error-404", (req, res) => {
  res.render("page-error-404");
});
app.get("/page-error-500", (req, res) => {
  res.render("page-error-500");
});
app.get("/page-error-503", (req, res) => {
  res.render("page-error-503");
});
app.get("/page-forgot-password", (req, res) => {
  res.render("page-forgot-password");
});
app.get("/page-lock-screen", (req, res) => {
  res.render("page-lock-screen");
});
app.get("/page-login", (req, res) => {
  res.render("page-login");
});
app.get("/page-register", (req, res) => {
  res.render("page-register");
});
app.get("/professor-profile", (req, res) => {
  res.render("professor-profile");
});
app.get("/staff-profile", (req, res) => {
  res.render("staff-profile");
});
app.get("/table-bootstrap-basic", (req, res) => {
  res.render("table-bootstrap-basic");
});
app.get("/table-datatable-basic", (req, res) => {
  res.render("table-datatable-basic");
});
app.get("/uc-nestable", (req, res) => {
  res.render("uc-nestable");
});
app.get("/uc-noui-slider", (req, res) => {
  res.render("uc-noui-slider");
});
app.get("/uc-select2", (req, res) => {
  res.render("uc-select2");
});
app.get("/uc-sweetalert", (req, res) => {
  res.render("uc-sweetalert");
});
app.get("/uc-toastr", (req, res) => {
  res.render("uc-toastr");
});
app.get("/ui-accordion", (req, res) => {
  res.render("ui-accordion");
});
app.get("/ui-alert", (req, res) => {
  res.render("ui-alert");
});
app.get("/ui-badge", (req, res) => {
  res.render("ui-badge");
});
app.get("/ui-button-group", (req, res) => {
  res.render("ui-button-group");
});
app.get("/ui-button", (req, res) => {
  res.render("ui-button");
});
app.get("/ui-card", (req, res) => {
  res.render("ui-card");
});
app.get("/ui-carousel", (req, res) => {
  res.render("ui-carousel");
});
app.get("/ui-dropdown", (req, res) => {
  res.render("ui-dropdown");
});
app.get("/ui-grid", (req, res) => {
  res.render("ui-grid");
});
app.get("/ui-list-group", (req, res) => {
  res.render("ui-list-group");
});
app.get("/ui-media-object", (req, res) => {
  res.render("ui-media-object");
});
app.get("/ui-modal", (req, res) => {
  res.render("ui-modal");
});
app.get("/ui-pagination", (req, res) => {
  res.render("ui-pagination");
});
app.get("/ui-popover", (req, res) => {
  res.render("ui-popover");
});
app.get("/ui-progressbar", (req, res) => {
  res.render("ui-progressbar");
});
app.get("/ui-tab", (req, res) => {
  res.render("ui-tab");
});
app.get("/ui-typography", (req, res) => {
  res.render("ui-typography");
});
app.get("/widget-basic", (req, res) => {
  res.render("widget-basic");
});


module.exports = app 