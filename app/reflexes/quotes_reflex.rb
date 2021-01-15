# frozen_string_literal: true

# Reflex methods for our example app
class QuotesReflex < StimulusReflex::Reflex
  def destroy
    id = element.dataset[:id]
    Quote.find(id).destroy
    morph :nothing
  end
end
