set :application, "TEST"
set :repository,  "git@github.com:ybakos/hos_www.git"
set :scm, :git
set :deploy_to, "/home/humorsys/#{application}"
set :deploy_via, :remote_cache
set :copy_cache, '/home/humorsys/_tmp/hos_www'
set :use_sudo, false

role :app, "humanoriented.com"
role :web, "humanoriented.com"

namespace :deploy do
  task :migrate do
  end
  task :finalize_update do
  end
  task :start do
  end
  task :stop do 
  end
  task :restart do
  end
end
