module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'example',
      script    : 'example.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'admin',
      host : '118.178.133.200',
      ref  : 'origin/master',
      repo : 'git@github.com:xuejianrong/pm2.git',
      path : '/home/admin/nuxt_pt/pm2/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'admin',
      host : '118.178.133.200',
      ref  : 'origin/master',
      repo : 'git@github.com:xuejianrong/pm2.git',
      path : '/home/admin/nuxt_pt/pm2/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
