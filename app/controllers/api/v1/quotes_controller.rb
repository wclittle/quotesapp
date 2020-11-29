class Api::V1::QuotesController < ApplicationController
  include CableReady::Broadcaster 
  def index
    respond_to do |format|
      format.json { render json: Quote.order(created_at: :desc).all }
    end
  end
  def create
    quote = Quote.create(content: params[:content], author_name: params[:author])
    cable_ready['hello_quotes'].insert_adjacent_html(
      selector: '#quotes_list',
      position: 'afterBegin',
      html: render_to_string(partial: 'welcome/quote.html.erb', locals: {quote: quote})
    )    
    cable_ready.broadcast
    ActionCable.server.broadcast("hello_quotes", {
        type: "RQA::CreateQuoteSuccess", 
        response: {
          entities: {
            quotes: {
              "#{quote.id}": quote
            }
          },
          result: quote.id
        }
      }
    )
    respond_to do |format|
      format.json { render json: quote }
    end    
  end
  def destroy
    Quote.find(params[:id]).destroy
    cable_ready['hello_quotes'].remove(
      selector: "#quote-#{params[:id]}"
    )    
    cable_ready.broadcast
    respond_to do |format|
      format.json { render json: params[:id] }
    end       
  end
end