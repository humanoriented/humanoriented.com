page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :haml, { :attr_wrapper => '"' }

configure :development do
  activate :livereload
end

configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end

# Deployment config (middleman-deploy)
case ENV['TARGET'].to_s.downcase
when 'production'
  activate :deploy do |deploy|
    deploy.deploy_method   = :rsync
    deploy.host            = 'humorsys@humanoriented.com'
    deploy.path            = 'humanoriented.com'
  end
else
  activate :deploy do |deploy|
    deploy.deploy_method   = :rsync
    deploy.host            = 'humorsys@staging.humanoriented.com'
    deploy.path            = 'staging.humanoriented.com'
  end
end
