class QuotesReflex < StimulusReflex::Reflex
  include CableReady::Broadcaster
  def destroy 
    id = element.dataset[:id]
    Quote.find(id).destroy    
    cable_ready['hello_quotes'].remove(
      selector: "#quote-#{id}"
    )
  end
end
