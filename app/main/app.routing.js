"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('../hero/heroes.component');
var job_component_1 = require('../job/job.component');
var jobs_component_1 = require('../jobs/jobs.component');
var dashboard_component_1 = require('../dashboard/dashboard.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'job',
        component: job_component_1.JobComponent
    },
    {
        path: 'jobs',
        component: jobs_component_1.JobsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map