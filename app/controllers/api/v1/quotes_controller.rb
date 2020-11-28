class Api::V1::QuotesController < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: Quote.order(created_at: :desc).all }
    end
  end
end