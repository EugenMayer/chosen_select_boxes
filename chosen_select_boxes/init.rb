require 'redmine'

require_dependency 'chosen_select_boxes/hooks'

Redmine::Plugin.register :chosen_select_boxes do
  name 'Chosen select boxes plugin'
  author 'Florian Pommerening'
  description 'Replaces all select boxes with the class "chzn-select" with chosen select boxes'
  version '0.0.1'
  url 'https://github.com/EugenMayer/ChosenSelectBoxes'
end