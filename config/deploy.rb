# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'humanoriented.com'
set :repo_url, 'git@github.com:ybakos/hos_www.git'
set :tmp_dir, "/home/humorsys/tmp"
set :deploy_to, "/home/humorsys/#{fetch(:application)}"
set :deploy_via, :remote_cache
set :copy_cache, '/home/humorsys/_tmp/hos_www'

namespace :deploy do

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end

end
