# frozen_string_literal: true

# For our home page and public-facing marketing pages, terms, privacy, etc...
class WelcomeController < ApplicationController
  include CableReady::Broadcaster

  def index
    @quote = Quote.new
    @quotes = Quote.all.order(created_at: :desc)
  end

  def turbo_quotes
    @quote = Quote.new
    @quotes = Quote.all.order(created_at: :desc)
    @prefix = 'turbo-'
  end

  def create_quote
    Quote.create(quote_params)
  end

  private

  def quote_params
    params.require(:quote).permit(:content, :author_name)
  end
end
