# frozen_string_literal: true

module ApplicationCable
  # Top-level methods for web socket connections
  class Connection < ActionCable::Connection::Base
    identified_by :session_id

    def connect
      self.session_id = request.session.id
    end
  end
end
