exports.getIndex = (req , res , next) => {
    res.render('index')
}

exports.getAuthReset = (req , res , next) => {
    res.render('auth-reset-password')
}

exports.getAuthSignin = (req , res , next) => {
    res.render('auth-signin')
}

exports.getAuthSignup = (req , res , next) => {
    res.render('auth-signup')
}

exports.getBcBadges = (req , res , next) => {
    res.render('bc_badges')
}

exports.getBcBreadcrumb = (req , res , next) => {
    res.render('bc_breadcrumb-pagination')
}

exports.getBcButton = (req , res , next) => {
    res.render('bc_button')
}

exports.getBcCollapse = (req , res , next) => {
    res.render('bc_collapse')
}

exports.getBcTabs = (req , res , next) => {
    res.render('bc_tabs')
}

exports.getBcTypo = (req , res , next) => {
    res.render('bc_typography')
}

exports.getChartMorris = (req , res , next) => {
    res.render('chart-morris')
}

exports.getFormElements = (req , res , next) => {
    res.render('form_elements')
}

exports.getIcon = (req , res , next) => {
    res.render('icon-feather')
}

exports.getMapGoogle = (req , res , next) => {
    res.render('map-google')
}

exports.getSamplePage = (req , res , next) => {
    res.render('sample-page')
}

exports.getTbl = (req , res , next) => {
    res.render('tbl_bootstrap')
}


