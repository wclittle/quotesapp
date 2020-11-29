class QuotesReflex < StimulusReflex::Reflex
  include CableReady::Broadcaster
  def destroy 
    id = element.dataset[:id]
    Quote.find(id).destroy    
    cable_ready['hello_quotes'].remove(
      selector: "#quote-#{id}"
    )
    ActionCable.server.broadcast("hello_quotes", {
        type: "RQA::DeleteQuoteSuccess", 
        response: {
          data: id.to_i
        }
      }
    )      
  end
end
