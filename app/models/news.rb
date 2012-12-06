class News < ActiveRecord::Base
  attr_accessible :post, :title, :img_url

  def post_html
  	self.post.grep("\n","<br/>");
  end

  def post_short(count=25)
  	self.post[/(\s*\S+){#{count}}/]+" ..."
  end
end
