# frozen_string_literal: true

# == Schema Information
#
# Table name: quotes
#
#  id          :bigint           not null, primary key
#  author_name :string
#  content     :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Quote < ApplicationRecord
  include CableReady::Broadcaster
  after_create_commit lambda {
    cable_ready['hello_quotes'].insert_adjacent_html(
      selector: '#quotes_list',
      position: 'afterBegin',
      html: ApplicationController.new.render_to_string(partial: 'welcome/quote',
                                                       locals: { quote: self, prefix: nil })
    ).broadcast

    ActionCable.server.broadcast('hello_quotes', {
                                   type: 'RQA::CreateQuoteSuccess',
                                   response: {
                                     entities: {
                                       quotes: {
                                         "#{id}": self
                                       }
                                     },
                                     result: id
                                   }
                                 })

    broadcast_prepend_to 'hello_turbo', target: 'quotes_list_turbo', partial: 'welcome/quote',
                                        locals: { prefix: 'turbo-' }
  }

  after_destroy_commit lambda {
    cable_ready['hello_quotes'].remove(
      selector: "#quote-#{id}"
    ).remove(
      selector: "#turbo-quote-#{id}"
    ).broadcast
    ActionCable.server.broadcast('hello_quotes', {
                                   type: 'RQA::DeleteQuoteSuccess',
                                   response: {
                                     data: id.to_i
                                   }
                                 })
  }
end
