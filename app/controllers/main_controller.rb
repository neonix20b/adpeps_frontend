class MainController < ApplicationController
  def index
  	 page3()
  end

  def page1
  end

  def page2
  end

  def page3
  	@news = News.order("id").limit(3)
  end

  def support

  end
end
