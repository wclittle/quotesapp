# frozen_string_literal: true

# Web socket channel for our example app
class HelloQuotesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'hello_quotes'
  end
end
