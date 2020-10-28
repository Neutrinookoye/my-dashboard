const express = require('express');
const router = express.Router();


const IndexController = require('../controller/indexController')

router.get('/' , IndexController.getIndex)
router.get('/auth-reset-password' , IndexController.getAuthReset)
router.get('/auth-signin' , IndexController.getAuthSignin)
router.get('/auth-signup' , IndexController.getAuthSignup)
router.get('/bc_badges' , IndexController.getBcBadges)
router.get('/bc_breadcrumb' , IndexController.getBcBreadcrumb)
router.get('/bc_button' , IndexController.getBcButton)
router.get('/bc_collapse' , IndexController.getBcCollapse)
router.get('/bc_tabs' , IndexController.getBcTabs)
router.get('/bc_typography' , IndexController.getBcTypo)
router.get('/chart-morris' , IndexController.getChartMorris)
router.get('/form_elements' , IndexController.getFormElements)
router.get('/icon-feather' , IndexController.getIcon)
router.get('/map-google' , IndexController.getMapGoogle)
router.get('/sample-page' , IndexController.getSamplePage)
router.get('/tbl_bootstrap' , IndexController.getTbl)




module.exports = router ;