class UserMailer < ActionMailer::Base
  default :from => "adpeps2.0@gmail.com"

  def support_email(params)
  	@params=params
    mail(:to => "clientsupport@adpeps.com", :subject => "Письмо в поддержку")
  end
end
