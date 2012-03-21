module ChosenSelectBoxes
  class Hooks < Redmine::Hook::ViewListener
    render_on :view_layouts_base_html_head,
              :partial => 'hooks/chosen_select_boxes/view_layouts_base_html_head'
  end
end