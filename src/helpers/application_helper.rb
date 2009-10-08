module ApplicationHelper
  def small_devices_stylesheet
    tag('link', {:media => 'only screen and (max-device-width: 480px)', :href => 'stylesheets/small_device.css',
                 :type => 'text/css', :rel => 'stylesheet'})
  end
end
