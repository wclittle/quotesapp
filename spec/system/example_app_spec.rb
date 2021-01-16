# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Example App' do # rubocop:disable Metrics/BlockLength
  describe 'JavaScript Hello World Button' do
    it 'Appends "Hello World!" to hello_world_list' do
      visit '/'
      expect(find('#hello_world_list')).to_not have_text('Hello World!')
      find('#click_me_button').click
      expect(find('#hello_world_list')).to have_text('Hello World!')
    end
  end

  describe 'Stimulus Hello World Button' do
    it 'Appends "Hello World from a Stimulus controller" to the hello.list' do
      visit '/'
      expect(find('ul[data-target="hello.list"]')).to_not have_text('Hello World from a Stimulus controller')
      find('button[data-action="hello#addHelloWorld"]').click
      expect(find('ul[data-target="hello.list"]')).to have_text('Hello World from a Stimulus controller')
    end
  end

  describe 'Rails Quotes' do
    it 'Prepends and deletes a quote from all lists' do
      visit '/'
      fill_in 'quote_content', with: 'Hello Rails World'
      fill_in 'quote_author_name', with: 'John Doe'
      find('#create_quote_submit').click
      expect(find('#quotes_list')).to have_text('Hello Rails World')
      expect(find('#RQA_quotes_list')).to have_text('Hello Rails World')
      expect(find('#quotes_list_turbo')).to have_text('Hello Rails World')
      find('#quotes_list > li:nth-child(1)').click
      expect(find('#quotes_list')).to_not have_text('Hello Rails World')
      expect(find('#RQA_quotes_list', visible: false)).to_not have_text('Hello Rails World')
      expect(find('#quotes_list_turbo')).to_not have_text('Hello Rails World')
    end
  end

  describe 'React Quotes' do
    it 'Prepends and deletes a quote' do
      visit '/'
      fill_in 'RQA_quote_content', with: 'Hello React World'
      fill_in 'RQA_quote_author_name', with: 'John Doe'
      find('#RQA_quote_submit').click
      expect(find('#quotes_list')).to have_text('Hello React World')
      expect(find('#RQA_quotes_list')).to have_text('Hello React World')
      expect(find('#quotes_list_turbo')).to have_text('Hello React World')
      find('#RQA_quotes_list > li:nth-child(1)').click
      expect(find('#quotes_list')).to_not have_text('Hello React World')
      expect(find('#RQA_quotes_list', visible: false)).to_not have_text('Hello React World')
      expect(find('#quotes_list_turbo')).to_not have_text('Hello React World')
    end
  end

  describe 'Turbo Quotes' do
    it 'Prepends and deletes a quote' do
      visit '/'
      fill_in 'turbo-quote_content', with: 'Hello Turbo World'
      fill_in 'turbo-quote_author_name', with: 'John Doe'
      find('#turbo-create_quote_submit').click
      expect(find('#quotes_list')).to have_text('Hello Turbo World')
      expect(find('#RQA_quotes_list')).to have_text('Hello Turbo World')
      expect(find('#quotes_list_turbo')).to have_text('Hello Turbo World')
      find('#quotes_list_turbo > li:nth-child(1)').click
      expect(find('#quotes_list')).to_not have_text('Hello Turbo World')
      expect(find('#RQA_quotes_list', visible: false)).to_not have_text('Hello Turbo World')
      expect(find('#quotes_list_turbo')).to_not have_text('Hello Turbo World')
    end
  end
end
