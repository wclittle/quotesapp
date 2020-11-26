class HelloQuotesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "hello_quotes"
  end
end
