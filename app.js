const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine','ejs')

const about_courses = require('./routes/about-courses')
const about_student = require('./routes/about-student')
const add_courses = require('./routes/add-courses')
const add_departments = require('./routes/add-departments')
const add_fees = require('./routes/add-fees')
const add_holiday = require('./routes/add-holiday')
const add_library = require('./routes/add-library')
const add_professor = require('./routes/add-professor')
const add_staff = require('./routes/add-staff')
const add_student = require('./routes/add-student')
const all_courses = require('./routes/all-courses')
const all_departments = require('./routes/all-departments')
const all_holiday = require('./routes/all-holiday')
const all_library = require('./routes/all-library')
const all_professors = require('./routes/all-professors')
const all_staff = require('./routes/all-staff')
const all_students = require('./routes/all-students')
const app_calender = require('./routes/app-calender')
const app_profile = require('./routes/app-profile')
const chart_chartist = require('./routes/chart-chartist')
const chart_chartjs = require('./routes/chart-chartjs')
const chart_flot = require('./routes/chart-flot')
const chart_morris = require('./routes/chart-morris')
const chart_peity = require('./routes/chart-peity')
const chart_sparkline = require('./routes/chart-sparkline')
const ecom_checkout = require('./routes/ecom-checkout')
const ecom_customers = require('./routes/ecom-customers')
const ecom_invoice = require('./routes/ecom-invoice')
const ecom_product_detail = require('./routes/ecom-product-detail')
const ecom_product_grid = require('./routes/ecom-product-grid')
const ecom_product_list = require('./routes/ecom-product-list')
const ecom_product_order = require('./routes/ecom-product-order')
const edit_courses = require('./routes/edit-courses')
const edit_departments = require('./routes/edit-departments')
const edit_holiday = require('./routes/edit-holiday')
const edit_library = require('./routes/edit-library')
const edit_professor = require('./routes/edit-professor')
const edit_staff = require('./routes/edit-staff')
const edit_student = require('./routes/edit-student')
const email_compose = require('./routes/email-compose')
const email_inbox = require('./routes/email-inbox')
const email_read = require('./routes/email-read')
const event_management = require('./routes/event-management')
const fees_collection = require('./routes/fees-collection')
const fees_receipt = require('./routes/fees-receipt')
const form_editor_summernote = require('./routes/form-editor-summernote')
const form_element = require('./routes/form-element')
const form_pickers = require('./routes/form-pickers')
const form_validation_jquery = require('./routes/form-validation-jquery')
const form_wizard = require('./routes/form-wizard')
const holiday_calendar = require('./routes/holiday-calendar')
const index = require('./routes/index')
const map_jqvmap = require('./routes/map-jqvmap')
const page_error_400 = require('./routes/page-error-400')
const page_error_403 = require('./routes/page-error-403')
const page_error_404 = require('./routes/page-error-404')
const page_error_500 = require('./routes/page-error-500')
const page_error_503 = require('./routes/page-error-503')
const page_forgot_password = require('./routes/page-forgot-password')
const page_lock_screen = require('./routes/page-lock-screen')
const page_login = require('./routes/page-login')
const page_register = require('./routes/page-register')
const professor_profile = require('./routes/professor-profile')
const staff_profile = require('./routes/staff-profile')
const table_bootstrap_basic = require('./routes/table-bootstrap-basic')
const table_datatable_basic = require('./routes/table-datatable-basic')
const uc_nestable = require('./routes/uc-nestable')
const uc_noui_slider = require('./routes/uc-noui-slider')
const uc_select2 = require('./routes/uc-select2')
const uc_sweetalert = require('./routes/uc-sweetalert')
const uc_toastr = require('./routes/uc-toastr')
const ui_accordion = require('./routes/ui-accordion')
const ui_alert = require('./routes/ui-alert')
const ui_badge = require('./routes/ui-badge')
const ui_button_group = require('./routes/ui-button-group')
const ui_button = require('./routes/ui-button')
const ui_card = require('./routes/ui-card')
const ui_carousel = require('./routes/ui-carousel')
const ui_dropdown = require('./routes/ui-dropdown')
const ui_grid = require('./routes/ui-grid')
const ui_list_group = require('./routes/ui-list-group')
const ui_media_object = require('./routes/ui-media-object')
const ui_modal = require('./routes/ui-modal')
const ui_pagination = require('./routes/ui-pagination')
const ui_popover = require('./routes/ui-popover')
const ui_progressbar = require('./routes/ui-progressbar')
const ui_tab = require('./routes/ui-tab')
const ui_typography = require('./routes/ui-typography')
const widget_basic = require('./routes/widget-basic')

app.use('/about-courses',about_courses)
app.use('/about-student',about_student)
app.use('/add-courses',add_courses)
app.use('/add-departments',add_departments)
app.use('/add-fees',add_fees)
app.use('/add-holiday',add_holiday)
app.use('/add-library',add_library)
app.use('/add-professor',add_professor)
app.use('/add-staff',add_staff)
app.use('/add-student',add_student)
app.use('/all-courses',all_courses)
app.use('/all-departments',all_departments)
app.use('/all-holiday',all_holiday)
app.use('/all-library',all_library)
app.use('/all-professors',all_professors)
app.use('/all-staff',all_staff)
app.use('/all-students',all_students)
app.use('/app-calender',app_calender)
app.use('/app-profile',app_profile)
app.use('/chart-chartist',chart_chartist)
app.use('/chart-chartjs',chart_chartjs)
app.use('/chart-flot',chart_flot)
app.use('/chart-morris',chart_morris)
app.use('/chart-peity',chart_peity)
app.use('/chart-sparkline',chart_sparkline)
app.use('/ecom-checkout',ecom_checkout)
app.use('/ecom-customers',ecom_customers)
app.use('/ecom-invoice',ecom_invoice)
app.use('/ecom-product-detail',ecom_product_detail)
app.use('/ecom-product-grid',ecom_product_grid)
app.use('/ecom-product-list',ecom_product_list)
app.use('/ecom-product-order',ecom_product_order)
app.use('/edit-courses',edit_courses)
app.use('/edit-departments',edit_departments)
app.use('/edit-holiday',edit_holiday)
app.use('/edit-library',edit_library)
app.use('/edit-professor',edit_professor)
app.use('/edit-staff',edit_staff)
app.use('/edit-student',edit_student)
app.use('/email-compose',email_compose)
app.use('/email-inbox',email_inbox)
app.use('/email-read',email_read)
app.use('/event-management',event_management)
app.use('/fees-collection',fees_collection)
app.use('/fees-receipt',fees_receipt)
app.use('/form-editor-summernote',form_editor_summernote)
app.use('/form-element',form_element)
app.use('/form-pickers',form_pickers)
app.use('/form-validation-jquery',form_validation_jquery)
app.use('/form-wizard',form_wizard)
app.use('/holiday-calendar',holiday_calendar)
app.use('/',index)
app.use('/map-jqvmap',map_jqvmap)
app.use('/page-error-400',page_error_400)
app.use('/page-error-403',page_error_403)
app.use('/page-error-404',page_error_404)
app.use('/page-error-500',page_error_500)
app.use('/page-error-503',page_error_503)
app.use('/page-forgot-password',page_forgot_password)
app.use('/page-lock-screen',page_lock_screen)
app.use('/page-login',page_login)
app.use('/page-register',page_register)
app.use('/professor-profile',professor_profile)
app.use('/staff-profile',staff_profile)
app.use('/table-bootstrap-basic',table_bootstrap_basic)
app.use('/table-datatable-basic',table_datatable_basic)
app.use('/uc-nestable',uc_nestable)
app.use('/uc-noui-slider',uc_noui_slider)
app.use('/uc-select2',uc_select2)
app.use('/uc-sweetalert',uc_sweetalert)
app.use('/uc-toastr',uc_toastr)
app.use('/ui-accordion',ui_accordion)
app.use('/ui-alert',ui_alert)
app.use('/ui-badge',ui_badge)
app.use('/ui-button-group',ui_button_group)
app.use('/ui-button',ui_button)
app.use('/ui-card',ui_card)
app.use('/ui-carousel',ui_carousel)
app.use('/ui-dropdown',ui_dropdown)
app.use('/ui-grid',ui_grid)
app.use('/ui-list-group',ui_list_group)
app.use('/ui-media-object',ui_media_object)
app.use('/ui-modal',ui_modal)
app.use('/ui-pagination',ui_pagination)
app.use('/ui-popover',ui_popover)
app.use('/ui-progressbar',ui_progressbar)
app.use('/ui-tab',ui_tab)
app.use('/ui-typography',ui_typography)
app.use('/widget-basic',widget_basic)
module.exports = app 